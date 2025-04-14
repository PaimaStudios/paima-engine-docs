# Paima Batcher Payment Example

To enable this functionality set the batcher's .env:
```
BATCHER_PAYMENT_ENABLED="true"
```

Optionally you can set your .env value, and will be available as `ENV.BATCHER_PAYMENT_ADDRESS` in the middleware.
```
BATCHER_PAYMENT_ADDRESS=0x1234567890
```

In your frontend, using `viem` you can call the contract `payBatcher` function:

```TS
async function buttonPressed(amountEth = '0.0001') {
    // amountEth: Amount to be deposited
    // PaimaL2 Contract's ABI
    const paimal2Abi = [...];

    // Create a Viem custom chain definition
    const gameChain = defineChain({
        id: ENV.CHAIN_ID,
        name: ENV.CHAIN_NAME,
        network: 'local',
        nativeCurrency: {
            name: ENV.CHAIN_CURRENCY_NAME,
            symbol: ENV.CHAIN_CURRENCY_SYMBOL,
            decimals: ENV.CHAIN_CURRENCY_DECIMALS,
        },
        rpcUrls: {
            default: {
                http: [ENV.CHAIN_URI],
                webSocket: undefined,
            },
            public: {
                http: [ENV.CHAIN_URI],
                webSocket: undefined,
            },
        },
    });

    // Get the player's wallet
    const wallet = await endpoints.userWalletLogin({
      mode: WalletMode.EvmInjected,
      preferBatchedMode: true,
    });
    if (!wallet.success) return;

    // Create a View Wallet Client
    const walletClient = createWalletClient({
      chain: gameChain,
      transport: custom(window.ethereum!),
    });

    const { request } = await gamePublicClient.simulateContract({
      account: wallet.result.walletAddress as `0x${string}`,
      address: ENV.CONTRACT_ADDRESS as `0x${string}`,
      abi: paimal2Abi,
      functionName: 'payBatcher',
      args: [ENV.BATCHER_PAYMENT_ADDRESS as `0x${string}`],
      value: parseEther(amountEth),
    });
    await walletClient.writeContract(request);
}
```