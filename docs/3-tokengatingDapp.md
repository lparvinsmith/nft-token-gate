# Build a token-gated dapp

As a user, I want to access exclusive content for NFT holders only.

## Web3 libraries

This app uses [wagmi.sh](https://wagmi.sh), a collection of React hooks to interact with the user's wallet and the Ethereum blockchain. 

The wallet connection components come from [RainbowKit](https://github.com/rainbow-me/rainbowkit). This allows us to read account state from the wallet, including ETH balance.

However, contract state cannot be read from the wallet alone.

## Read balance from the contract

Add the ABI to the repo and use wagmi hooks to read the user's NFT balance. 

```
import { useAccount, useContractRead } from 'wagmi'
import ABI from '../contracts/ABI.json'
 
const { address } = useAccount()
const { data } = useContractRead({
  address: CONTRACT_ADDRESS,
  abi: ABI,
  functionName: 'balanceOf',
  args: [address],
})
```
