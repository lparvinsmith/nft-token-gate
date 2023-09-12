# Use Etherscan to read and write blockchain state

[etherscan.io](https://etherscan.io/) is a block explorer for Ethereum. You can use it to read the state of any account

## Find your contract on Etherscan

Paste your deployed contract's address into the Etherscan search bar and navigate to the contract page. Here you'll find balances, transfers, holders, and more. Click on the "Contract" tab to explore the contract code and methods.

Take a minute to explore the code, and notice that all dependencies are included here, along with the bytecode and ABI. 

## Use the UI to call a contract method

Let's check your NFT balance. Click "Read contract" and go to the `balanceOf` method. Try pasting in your address and reading your balance. We're expecting 0.

Now go to "Write contract" and go to `safeMint` method. When you run this method, you'll update the token mapping to include a new tokenId key with the value of your address.

Go back to `balanceOf` and check again. You've just updated global blockchain state!

## Download ABI

Download the ABI from the "Code" section. You're going to need it in the next step when we build our dapp.

[Next section](3-tokengatingDapp.md)