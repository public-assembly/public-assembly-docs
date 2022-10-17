# Curation Protocol Quickstart

[https://www.loom.com/share/5219e8f230d743f4bb46c2238c1079c7](https://www.loom.com/share/5219e8f230d743f4bb46c2238c1079c7)

## **Important Links**

- [Public Assembly GitHub](https://github.com/public-assembly)
- [Public Assembly NPM](https://www.npmjs.com/org/public-assembly)
- Neosound [site](https://www.neosound.xyz/) + [repo](https://github.com/public-assembly/neosound)
- Public Assembly [site](https://www.public---assembly.com/) + [repo](https://github.com/public-assembly/public-assembly-home-page)
- [How to deploy your own version of Neosound thread](https://twitter.com/pblcasmbly/status/1580254993504174080?s=20&t=uefr-mzmzeQRQoVu4ykvIg)

## **Curation Protocol**

- [Protocol repo](https://github.com/public-assembly/curation-protocol)
- Protocol NPM Package (OUT OF DATE DO NOT USE)
    - Grab ABI (for `Curator.sol` + `CuratorFactory.sol` from [here](https://github.com/public-assembly/curation-interactions/tree/main/packages/interactions/src/protocol/abi) instead)
- [Custom hooks + components repo](https://github.com/public-assembly/curation-interactions)
- [Custom hooks NPM package](https://www.npmjs.com/package/@public-assembly/curation-interactions)
- `CuratorFactory` addresses
    - Mainnet - [0xff8b0f870ff56870dc5abd6cb3e6e89c8ba2e062](https://etherscan.io/address/0xff8b0f870ff56870dc5abd6cb3e6e89c8ba2e062#code)
    - Goerli - [0xcc0ddff0ea076AbfB837117C5AaC6f48483e5B98](https://goerli.etherscan.io/address/0xcc0ddff0ea076abfb837117c5aac6f48483e5b98)
- `SVGMetadataRenderer` addresses
    - Mainnet - [0xba187429b966788B5C11a99A848938c88DfDFf5C](https://etherscan.io/address/0xba187429b966788B5C11a99A848938c88DfDFf5C)
    - Goerli - [0x7D6A95869D1c75fADAF7fECB7Cfa43037A450232](https://goerli.etherscan.io/address/0x7D6A95869D1c75fADAF7fECB7Cfa43037A450232)
- Example of live curation contracts
    - [Curator.sol](https://etherscan.io/address/0x52a64da96d0a0078bead9158198f3881c4fcd066) powering [neosound.xyz](https://www.neosound.xyz/)
    - [Curator.sol](https://etherscan.io/address/0xbc8db622af59f115cc228dff44d6b17478470ae2) powering [public—assembly.com](https://www.public---assembly.com/)

## **How to Start Experimenting:**

Deploy curation contracts

- Use Etherscan - [Goerli](https://goerli.etherscan.io/address/0xcc0ddff0ea076abfb837117c5aac6f48483e5b98) + [Mainnet](https://etherscan.io/address/0xff8b0f870ff56870dc5abd6cb3e6e89c8ba2e062#code)
    - General UIs coming soon

Interact with deployed curation contracts

- Fork [repo](https://github.com/public-assembly/curation-interactions)
    
    ```bash
    git clone https://github.com/public-assembly/curation-interactions.git
    ```
    
- Install dependancies
    - `yarn install` from root folder
- Spin up local test components
    - `yarn example:next` from root folder

Experiment with UIs that incorporate curation contracts (like pulling in site content dynamically from curation contracts)

- Neosound
    - Fork [repo](https://github.com/public-assembly/neosound)
    
    ```bash
    git clone https://github.com/public-assembly/neosound.git
    ```
    
    - `yarn install` from root
    - `yarn dev` from root
- Public Assembly home page
    - Fork [repo](https://github.com/public-assembly/public-assembly-home-page)
    
    ```bash
    git clone https://github.com/public-assembly/public-assembly-home-page.git
    ```
    
    - `yarn install` from root
    - `yarn dev` from root

## **How to use ZORA API to get Curation Information from a Contract**

→ [API Explorer](https://playground.api.zora.co/)

Example query screenshot

[https://lh3.googleusercontent.com/N0cuAzuv69-smLhZNnCWcbxjYYTcjmln8GNxwuYb4TO5T8GrkiTdXQPPo76BInTvvRRPW_UaxertegDsv7od5lQWUjoVDPmCilcAhFaeLZ1DP8D72AqfMXxRQUnlsqCLjr2Qx0KAgNOzTgX_iW2XnVitauDHMnBpGj0tHYwQyVo0oqDUc4FzW-5vuA](https://lh3.googleusercontent.com/N0cuAzuv69-smLhZNnCWcbxjYYTcjmln8GNxwuYb4TO5T8GrkiTdXQPPo76BInTvvRRPW_UaxertegDsv7od5lQWUjoVDPmCilcAhFaeLZ1DP8D72AqfMXxRQUnlsqCLjr2Qx0KAgNOzTgX_iW2XnVitauDHMnBpGj0tHYwQyVo0oqDUc4FzW-5vuA)

Example query code

```graphql
query ListCollections {
	tokens(
		networks: {network: ETHEREUM, chain: GOERLI}
		where: {collectionAddresses: "0xEd824d01B337Fb423554185464dbF7D85034446B"}
	) {
		nodes {
			token {
				collectionAddress
				collectionName
				owner
				}
			}
		}
	}
```

With this query you can then pass specific `listingRecord` `tokenID` into the `getListing` method call on the curator contract to retrieve information about a `Listing`

This is how you can generate a curator profile that can be managed by the curator (Try to use this information provide frontend interface for removing listings)

- The [useValidation hook](https://github.com/public-assembly/curation-interactions/blob/main/packages/interactions/src/hooks/useValidation.tsx) in the curation-interactions package returns all of the `listingRecord` tokens owned by a given address (ex: whoever is logged in) for a given curation contract
    - The hook return you want for this is `userActiveListings`
