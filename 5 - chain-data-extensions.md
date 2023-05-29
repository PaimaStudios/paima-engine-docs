# Chain Data Extensions

At some point, you might want your game to access more on-chain data than just what is being posted to the Paima L2 contract. For instance, you might be interesting in accessing information about ownership of ERC721 tokens, or a wallet's balance in some ERC20 token. Paima's solution to this are _Chain Data Extensions_, which allow you to read data trustlessly from the underlying L1.

The basic approach is simple: you set up a config file where you specify what contracts you want to collect data about, and when you then run your game node, it will automatically read this data for you into your game database, along with a simple-to-use interface in the Paima SDK to allow you to access this data.

Paima Engine currently supports the following types of chain data extensions, each described in more detail in its own section:
 - [ERC721](#erc721), keeping track of NFT ownership for a specified ERC721 contract at the currently processed blockheight, as well as generating scheduled inputs for newly minted NFTs;
 - [ERC20](#erc20), keeping track of wallet balances for a specified ERC20 contract;
 - [ERC20Deposit](#erc20deposit), keeping track of the total amount of a specified ERC20 contract sent by wallets to a specified address, as well as generating scheduled inputs when such transfers happen.

## Configuration

To specify to Paima Engine what chain data extensions you are interested in, you need to provide a configuration file. By default, a file named `extensions.yml` in your root directory (same place as the `.env` file) is expected, but you may adjust this path using the `CDE_CONFIG_PATH` environment variable. An example of the format can be seen below:

```yaml
extensions:
  - name: "My NFT Contract"
    type: "erc721"
    contractAddress: "0x01...EF"
    startBlockHeight: 7654321
    initializationPrefix: "newnft"
  - name: "My SpecialCoin"
    type: "erc20-deposit"
    contractAddress: "0xFE...10"
    startBlockHeight: 4567123
    initializationPrefix: "dp"
    depositAddress: "0xAB...CD"
```

Note that extensions of different types might require slightly different fields &ndash; this will be described in their respective sections. However, here is a quick overview of the purposes of each field in the above config:

 - `name`: This field allows you to refer to this particular extension when using the Paima SDK functions for accessing the data it has collected;
 - `type`: This specifies what kind of extension you want, currently supporting three values corresponding to the three types of extensions described in later subsections:
   - `"erc721"`,
   - `"erc20"`,
   - `"erc20-deposit"`;
 - `contractAddress`: The address of the contract to read data from;
 - `startBlockHeight`: The starting blockheight from which you want the data to be read, zero by default;
 - `initializationPrefix`: For extensions that trigger scheduled inputs (ERC721 and ERC20Deposit) specifies the prefix used with these scheduled inputs;
 - `depositAddress`: This field is only used by the ERC20Deposit extension type to specify the target address of transactions you are interested in tracking.

If you try to run your game node with an invalid or non-existent CDE config file, Paima Engine will report the problem to you and then carry on as if no chain data extensions were specified.

## Accessing the collected data

Each extension may provide data to your game in one of two ways:
 1. By collecting their data into your game database, which you can access using Paima SDK functions described below;
 2. By scheduling inputs when certain events happen, which you can then react to in your state transition function.

The data collected and functions used to access it are specific to each type of extension and you can find more information about that in their respective sections. In general, be aware that these functions will need read access to your database (which is what the `readonlyDBConn` parameter in each function is for), and you need to specify the extension whose data you want by using its name (which is what the `cdeName` parameter in each function is for), which needs to correspond to the name specified in the configuration file.

Scheduled inputs are triggered by various events specific to the extension type, with these circumstances and the format of the scheduled input described in their respective sections. The inputs are always scheduled either for the same blockheight in which they are triggered (which enables them to be processed immediately, as scheduled inputs are processed before the state transition function is called), or, if they are triggered before the overall `START_BLOCKHEIGHT` of the game node (specified in the `.env` file), in the so-called _pre-sync_ phase, they are scheduled for `START_BLOCKHEIGHT + 1` (which is the first blockheight for which the state transition function is called). The scheduled inputs will always start with the prefix specified in the config as `initializationPrefix`.

To learn by example, please consult the NFT LvlUp game template &ndash; `./paima-engine-linux init template nft-lvlup` to learn more.

## ERC721

This extension allows you to track NFT ownership for any ERC721-compatible contract. You may also use it with PaimaERC721 contracts, which additionally allow you to specify an arbitrary string when minting an NFT &ndash; this extension type supports retrieving that string using scheduled inputs.

A scheduled input is triggered everytime a new NFT is minted. The scheduled input will have the following format:

```
prefix|contractAddress|tokenId|mintData
```

where:

- `prefix` is the `initializationPrefix` specified in the config file,
- `contractAddress` is the address of the contract (also specified in the config file),
- `tokenId` is the ID of the newly minted token in base 10,
- `mintData` is, for PaimaERC721 NFTs, the string with which the NFT was minted; for other ERC721 contracts, it will always be an empty string.

Paima SDK provides you with the following functions you can use to access ERC721 data:

- `getNftOwner`, to fetch the address which owns the NFT with the specified token ID:

```ts
export async function getNftOwner(
  readonlyDBConn: Pool,
  cdeName: string,
  nftId: bigint
): Promise<string | null>;
```

- `isNftOwner`, to check whether the specified address owns the specified NFT:

```ts
export async function isNftOwner(
  readonlyDBConn: Pool,
  cdeName: string,
  nftId: bigint,
  ownerAddress: string
): Promise<boolean>;
```

- `getAllOwnedNfts`, to fetch a list of token IDs of NFTs owned by the specified address:

```ts
export async function getAllOwnedNfts(
  readonlyDBConn: Pool,
  cdeName: string,
  ownerAddress: string
): Promise<bigint[]>;
```


## ERC20

This extension allows you to track the balances of a specified ERC20 token for all wallets that interact with it by processing `Transfer` events the contract emits. It does not schedule any inputs, so the `initializationPrefix` field can be omitted.

Paima SDK provides you with the following functions you can use to access ERC20 data:

- `getFungibleTokenBalance`, to fetch the balance of a specified address:

```ts
export async function getFungibleTokenBalance(
  readonlyDBConn: Pool,
  cdeName: string,
  walletAddress: string
): Promise<bigint | null>;
```

## ERC20Deposit

Unlike the ERC20 extension, which keeps track of the overall balances of the specified token, this one only keeps track of transfers made to a _Deposit Address_ specified in the config file. It stores the total amount transferred, and triggers a scheduled input for each such transfer. The desired deposit address needs to be specified in the config file as the `depositAddress` field as seen in the example earlier.

A scheduled input is triggered everytime a transfer is made to the deposit address. The scheduled input will have the following format:

```
prefix|fromAddr|value
```

where:

- `prefix` is the `initializationPrefix` specified in the config file,
- `fromAddr` is the address from which tokens have been sent to the deposit address,
- `value` is the amount transferred in base 10.

Paima SDK provides you with the following functions you can use to access the collected data:

- `totalAmountDeposited`, to fetch the total amount the specified address has deposited to the deposit address:

```ts
export async function totalAmountDeposited(
  readonlyDBConn: Pool,
  cdeName: string,
  walletAddress: string
): Promise<bigint | null>;
```

- `findUsersWithDepositsGreaterThan`, to fetch the list of wallet addresses which have sent at least the specified threshold amount:

```ts
export async function findUsersWithDepositsGreaterThan(
  readonlyDBConn: Pool,
  cdeName: string,
  thresholdAmount: bigint
): Promise<string[]>;
```