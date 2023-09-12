# Create and deploy an NFT Smart Contract

In this section, we will deploy an [ERC-721 Non-fungible token contract](https://eips.ethereum.org/EIPS/eip-721) using a customizable template from Open Zeppelin. 

## What is an NFT, anyways?

An NFT is a token stored and governed by a smart contract. Many projects are built using Open Zeppelin's [standard ERC-721 contract](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol) which can show us what NFTs are.

An NFT's state is stored in mappings on the smart contract.

```
mapping(uint256 tokenId => address) private _owners;

mapping(address owner => uint256) private _balances;
```

The state is accessed by standard getters that read from these mappings.

```
function balanceOf(address owner) public view virtual returns (uint256) {
        if (owner == address(0)) {
            revert ERC721InvalidOwner(address(0));
        }
        return _balances[owner];
    }

function _ownerOf(uint256 tokenId) internal view virtual returns (address) {
        return _owners[tokenId];
    }
```

To create or update a token, the `_update` method simply updates the `_balances` and `_owners` mappings stored in contract state.

```
function _update(address to, uint256 tokenId, address auth) internal virtual returns (address) {
        address from = _ownerOf(tokenId);

        // Perform (optional) operator check
        if (auth != address(0)) {
            _checkAuthorized(from, auth, tokenId);
        }

        // Execute the update
        if (from != address(0)) {
            // Clear approval. No need to re-authorize or emit the Approval event
            _approve(address(0), tokenId, address(0), false);

            unchecked {
                _balances[from] -= 1;
            }
        }

        if (to != address(0)) {
            unchecked {
                _balances[to] += 1;
            }
        }

        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);

        return from;
    }
```

## Create with Open Zeppelin Contract Wizard

Now we'll use an [ERC-721 Contract template](https://docs.openzeppelin.com/contracts/4.x/wizard) to make an NFT.

Notice as you add features like "Mintable," the contract will import and inherit methods from standard classes. Let's make it Mintable with Auto Incremented Ids. 

When you're done adding features, press "Open in Remix" to edit in the Remix IDE and deploy.

## Deploy with Remix

Compile the contract into bytecode in the "Compile" tab.

Then go to the Deploy tab, use the environment of the Injected Provider, which comes from your wallet.

Deploy the contract and complete the transaction in your wallet.

[Next: Using Etherscan](2-usingEtherscan.md)