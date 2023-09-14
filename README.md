# NFT Contracts & Tokengating Workshop

This workshop was created for the Coinbase Engineering Conference in September 2023.

## Goals

1. Create and deploy an NFT Smart Contract on EVM blockchains ([docs](docs/1-creatingAnNftCollection.md))
2. Use Etherscan to read and write blockchain state with your smart contract's methods ([docs](docs/2-usingEtherscan.md))
3. Build a tokengated dapp with Next.js ([docs](docs/3-tokengatingDapp.md))

## Setup

### Create a wallet

Create a crypto wallet with [Coinbase Wallet](https://www.coinbase.com/wallet) and install the [Chrome web extension](https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad)

### Get some testnet ETH

Deploying a contract and any other action that changes blockchain state requires the user to pay a gas fee. Get testnet ETH from Coinbase's [Goerli ETH faucet](https://coinbase.com/faucets/ethereum-goerli-faucet). 

## Local development

This is a [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) project bootstrapped with [`create-rainbowkit`](https://github.com/rainbow-me/rainbowkit/tree/main/packages/create-rainbowkit).

### Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Learn More

To learn more about this stack, take a look at the following resources:

- [RainbowKit Documentation](https://rainbowkit.com) - Learn how to customize your wallet connection flow.
- [wagmi Documentation](https://wagmi.sh) - Learn how to interact with Ethereum.
- [Next.js Documentation](https://nextjs.org/docs) - Learn how to build a Next.js application.

You can check out [the RainbowKit GitHub repository](https://github.com/rainbow-me/rainbowkit) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
