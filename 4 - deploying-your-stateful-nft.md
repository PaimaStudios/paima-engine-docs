# Deploying Your Own Stateful NFT Contract

Stateful NFTs are a minor extension of the ERC721 standard that allows you to specify a pre-selected string when minting the NFT. This feature enables developers to create NFTs with customized state information, making them more flexible and versatile for different use cases.

## Pre-requisites

To deploy the contracts, you will need the following:

- The address and private key of an EVM account on the target network (network you will be deploying on) with sufficient funds for deploying the contract (aka. the _deployment account_),
- The address of an account on the target network to be marked as the owner of the contract, capable of withdrawing funds (the _owner account_, can be the same as the deployment account).

## Accessing the contracts

First we will get access to the smart contracts and make sure all dependencies are installed to be able to compile/deploy them:

1. Run `./paima-engine contract` which emits the _contracts_ directory.
2. Navigate to the `contracts/nft/` directory;
3. Run `npm install` to install all needed dependencies.

## State customization

Before you deploy your contracts, you may want to customize what strings the NFTs get minted with. To achieve this, you will need to make some simple changes to two source files found in the `contracts/nft/src/` directory:

First, in `contracts/nft/src/NftType.sol`, you will find the following enum:

```
enum NftType {
    FIRE,
    WATER
}
```

Edit this enum by adding, removing or changing any of its values to obtain your desired list of possible values. For example, you can extend it by adding two more elements as follows:

```
enum NftType {
    FIRE,
    WATER,
    EARTH,
    AIR
}
```

Next, you need to map these enum values to strings that the NFTs will be minted with. To do this, open `contracts/nft/src/NftTypeMapper.sol`, where you will find the following code snippet:

```
    constructor() {
        nftTypeToString[NftType.FIRE] = "fire";
        nftTypeToString[NftType.WATER] = "water";
    }
```

Edit this file so that it contains an entry for each possible enum value, assigning the strings you want to mint with:

```
    constructor() {
        nftTypeToString[NftType.FIRE] = "fire";
        nftTypeToString[NftType.WATER] = "water";
        nftTypeToString[NftType.EARTH] = "earth";
        nftTypeToString[NftType.AIR] = "air";
    }
```

After this, your NFT contract is almost ready for deployment. One final preparation step is ensuring that your configuration is up to date.

## Configuration

Whether you are deploying or simply performing some admin functions, most of the data is taken from `contracts/nft/src/deploy-config.json`. Notice that the file contains separate configurations for testnet and mainnet, so you can have different configurations for different networks. You can use

Note that the `owner` fields in the configuration are only used with the transfer ownership admin functionality; when first deploying the contracts, the deployment account is set as the owner. Be aware that only the owner can perform certain admin operations with the contracts (config updates, fund withdrawal), so once you change it, you cannot perform these operations as described in this file unless you use the new owner account as the deployment account.

Another configuration file used for deployment is `contracts/nft/src/contract-addresses.json`. In the vast majority of cases, especially when first deploying, you will not need to update this file or think about it at all, as it gets updated automatically whenever a new contract is deployed. If you are nevertheless interested in more details, consult `contracts/nft/README.md`.

## Deployment

There are two contracts that you need to deploy in order:

- The NFT contract (`Nft`) &ndash; this is the ERC721-compatible contract which mints the NFTs and stores their ownership state;
- The NFT sale contract (`NativeNftSale`) &ndash; this is the interface for buying your NFTs, from where you can also withdraw the funds used to buy them. It must be deployed after deploying the NFT contract so that it can be associated with it.

To achieve this, simply navigate to the `contracts/nft/` directory, run the `deploy.sh` script and follow the script's instructions:

```sh
cd contracts/nft/
./deploy.sh
```

After executing the two commands above, you will be asked to select the target network you want to deploy to and asked to provide the private key corresponding to the deployment account. Afterwards, select the option allowing you to deploy contracts (rather than perform admin operations) and select the NFT contract (`Nft`) as the contract to be deployed. Once the operation has completed, you should see a message like the following:

```
Deployed contract addresses:
   Nft: 0xfB7...a13

To automatically add this contract's Data to your game node database, you can copy and paste the following to your CDE config file:
  - name: Test NFT contract
    type: erc721
    contractAddress: 0xfB7...a13
    startBlockHeight: 12494000
    initializationPrefix: nftmint
```

Note down the contract address denoted on the second line, and also copy the final five lines, which you can later use as part of your _CDE config file_ to use your NFT data in your game node. Afterwards, you can run the deploy script again:

```sh
./deploy.sh
```

Again, follow the script's instructions just like for deploying the NFT contract, but this time select the `NativeNftSale` contract. Once deployment finishes, you should see a message like the following:

```
Deployed contract addresses:
   NativeNftSale: 0x3C0...E4b
   NativeProxy:   0x4a2...33C
```

You can now use the address marked as `NativeProxy` as the address of your NFT sale contract.

## Admin operations

The deploy script found at `contracts/nft/deploy.sh` can also be used to update the configuration of your deployed contracts. Simply update `contract/nft/src/deploy-config.json` with any values you want to change and then run the following:

```sh
cd contracts/nft/
./deploy.sh
```

Simply follow the script's instructions, this time choosing to perform admin operations rather than deployment, select which operation you want to perform and then simply wait for it to finish.

Note that to execute these admin operations with a smart contract, you need to be its owner, meaning that when the script asks you for the deployment private key, you need to supply the private key of the owner account. You do not need to worry about this if you didn't explicitly change the owner and are using the same private key as you deployed with.

## Accessing the NFT data from your game node
