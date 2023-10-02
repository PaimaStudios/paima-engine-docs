# Cardano

## Block timing

In Cardano, finality is measured by `ttl` + `minimum_lock_time`

`ttl` and `minimum_lock_time` are measured in *slots*, despite the fact that finality is measured in *blocks*. These are not the same thing, since there can be many empty slots in Cardano (which contribute nothing to finality). However, in order to ensure determinism, Cardano smart contracts only have access to POSIX millisecond timestamps (conversion is done by the Cardano node internally before being forwarded to the contract). The current duration of a slot cannot be known from a smart contract (as of Babbage) and no mapping of time to blocks is available to contracts either.

## Multi-asset projection

Although the main use-case is projecting a single NFT, we support projecting multiple NFTs at once as well as fungible tokens. If multiple assets are used in a single projection, we also support partially unlocking funds from the hololocker by specifying `partial_withdraw` as part of the redeemer when moving funds from `Locked` to `Unlocking` - allowing the remaining funds to stay projected

Note that the funds that are kept locked do not have to be kept in the same hololocker type. Although switching the type is not an important feature in the usual case, it's important in the `Receipt` as you will have to mint a new receipt NFT to to unlock the projected funds later.

## Supported lock conditions

### Locking using a public key hash

To create hololockers,
1. Send the asset(s) you want to project to the script hash of the hololocker with `{ owner: Owner::PKH(address), status: Status::Locked }` as the datum

To unlock/withdraw hololockers,
1. Include the hololocker as an input 
2. Include the required public key hash in the `required_signers` field of the transaction. Note that you do NOT need to actually withdraw the contents of the hololocker to the address specified in datum. It simply needs to be part of the `required_signers` of the transaction that withdraws the asset
3. (when unlocking) place the projected funds you want to unlock in a UTXO with the inline datum set to `State { owner, Unlocking { out_ref, for_how_long } }` where `owner` is the same as before, `out_ref` is the `{ tx_hash, index}` pair of the utxo input from (1), and `for_how_long` is `ttl + minimum_lock_time`
4. (if `partial_withdraw` when unlocking) place the remaining funds in a inline datum representing their new hololocker in the output index directly following the output of the funds you are unlocking
5. Sign the transaction using the required public key hash
6. (when withdrawing) you can withdraw the content to any address you wish

### Locking using a pre-existing NFT external to this script

To unlock, use a specific pre-existing NFT (`<policy, token_name>` pair). This is useful for example in the case of a NFT-backed multisig script where you do not have a specific public key hash to use as a lock.

Strictly speaking, a fungible token could be used as the lock the hololocker, but only one unit is required to unlock (no pseudo-multisig). Note this token isn't burned in the transaction. 

To create hololockers,
1. Send the asset(s) you want to project to the script hash of the hololocker with `{ owner: Owner::NFT(policy_id, asset_name), status: Status::Locked }` as the datum

To unlock/withdraw hololockers,
1. Include the hololocker as an input
2. Include `nft_input_owner` which encodes the input (`{ tx_hash, index}` pair) of the transaction that contains the NFT used as a lock. This is just for performance optimization
3. (when unlocking) place the projected funds you want to unlock in a UTXO with the inline datum set to `State { owner, Unlocking { out_ref, for_how_long } }` where `owner` is the same as before, `out_ref` is the `{ tx_hash, index}` pair of the utxo input from (1), and `for_how_long` is `ttl + minimum_lock_time`
4. (if `partial_withdraw` when unlocking) place the remaining funds in a inline datum representing their new hololocker in the output index directly following the output of the funds you are unlocking
5. (when withdrawing) you can withdraw the content to any address you wish

### Locking using an NFT created specifically for this hololocker (a "Receipt")

This NFT has to be burned to unlock the NFT. Note that the hololocker script can be used both as a spending script and as a minting script to implement this use-case.

Note: you can create multiple of this type of hololockers at once (useful for airdrops).

To create hololockers,
1. Set the redeemer for the mint hololocker script as `{ total: Int }`
2. Specify `total` number of assets being minted, with the policy being the hololocker script and the asset name for each token `i=0..total` being `blake2b_256(cbor(input[0]), i)`. We use the first input of the transaction (`input[0]`) as this guarantees the uniqueness of the asset name, given nobody will ever be able to use the same `{ tx_hash, index}` pair again. 
3. Ensure that for every minted token, there is an equivalent standalone output which uses an inline datum `{ owner: Receipt(minted_asset_name), status: Locked }`. Include the assets you want to project in these outputs. Note that you can send the newly minted lock NFTs to any address you wish

To unlock hololockers,
1. Include the UTXO holding the lock NFT as an input
2. Specify the hololocker as a mint policy that burns the lock NFT
3. Specify the hololocker as a mint policy that mints a new lock NFT (its asset name will be set using the same deterministic rule as mentioned in the section on creating the hololocker). This new NFT will be used when you want to withdraw the hololocker content.
4. Add the asset name of the newly minted NFT in the redeemer of the spend condition (as `new_receipt_owner`)
5. Place the projected funds you want to unlock in a UTXO with the inline datum set to `State { owner: new_receipt_owner, Unlocking { out_ref, for_how_long } }` where `out_ref` is the `{ tx_hash, index}` pair of the utxo input from (1), and `for_how_long` is `ttl + minimum_lock_time`
6. (if `partial_withdraw`) place the remaining funds in a inline datum representing their new hololocker in the output index directly following the output of the funds you are unlocking

To withdraw hololockers,
1. Include the UTXO holding the lock NFT as an input
2. Specify the hololocker as a mint policy that burns the unlock NFT
3. You can withdraw the content to any address you wish
