# Getting Started with Neosound

>  Music brings people together.

// What is neosound 
// Website overview 

---

## Introduction

![image](https://user-images.githubusercontent.com/91724117/194314147-7b655a32-9a56-43d8-9097-be8b9e3c29be.png)

Neosound is both a template and living example --- for how to use open-source + modular building blocks to create a new way to listen to, share, and publish music online. 

The player is made with a modular design and uses a curation protocol to expressly draw and assemble data from the Ethereum blockchain. Therefore, none of the music is hosted exclusively on Neosound, making it a fully decentralized player as well. That means that this web application’s design can be used by anyone to make anything they desire. You can either only listen to the music or create your own music player for your portfolio or record store.

There are so many options for independent artists to foster their audience or community these days, and it can be overwhelming for a novice artist to approach Web 3 music as a lone creative. So, in response, Neosound strives to spark conversations on how that changes for artists and the way they distribute art.

---

## What is the cost to use Neosound?

Neosound provides a free online listening experience. The music on the site can be collected for a fee, and it also provides the ability to deploy curation contracts to power your own custom site from the factory page.

---

## Using Neosound as a Listener:

### Modular music player

To begin listening, locate the navigation bar and click ‘Listen’. No login is required to listen…you’ve already made the decision!

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/02-A-02-Listen-List-Hover.png)

Another emphasis of Neosound has been on creator sovereignty and universal access. Over the last two years, music NFTs have created a new revenue stream for artists, corporations, and celebrities. Artists can build on that with Neosound and further develop a digital asset library to reach a new generation of fans and investors. With that in mind, you are able to mint tracks by clicking on the album cover or song title.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/03-A-01-A-View%20Details-Select.png)

The music data will be shown with the token information, and you will be prompted to connect to a Web 3 wallet to complete the transactions.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/03-A-04-View%20Details-WalletConnected.png)

---

## Using Neosound as a Curator:

Accessing the curation functionality that allows you to update the on-chain playlist that feeds into Neosound requires the ownership of a “curation pass”. A curation pass is an NFT lives in your Web 3 wallet that grants token-gated perks. Inspired by sites like Present Material, curation passes can be distributed by individuals or communities (whoever owns the curation contract) in whatever manner they please.

![img](https://user-images.githubusercontent.com/91724117/194176577-9458b8c3-302c-4e55-bc90-c027ea753cfa.png)

A good way to do this is by using [ZORA create tools](create.zora.co) that allow edition contract owners to airdrop tokens. Currently, Neosound is only compatible with ZORA NFT collections — which happen to be ERC-721s. However, the underlying architecture can be easily adjusted to swap in other ERC-721 implementations or NFT standards. If you would like to create a music NFT edition, head over to the create editions tutorial here.

> Where can I find the curator pass for Neosound?
      https://create.zora.co/collections/0xe276af76d8cf8646e2b4ae94c549fb0bbf198c1d
 
### Adding song listings

To begin curating, locate the ‘Curate’ tab in the navigation bar, click on it, and connect your wallet so the pop-up module can verify if you hold a pass. 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/04-A-01-CurateModal-Default.png)

After this is done, paste the music NFT contract address of the song you want to curate. This address can be found in places like details on platforms like Zora, OpenSea, or Rarible.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/04-A-03-CurateModal-Connected.png)

Upon pasting the contract address in the module, click ‘Add’ and you’ll be prompted to sign and complete the transaction in your wallet. Shortly after the transaction confirms, your song will be queued at the top of the playlist.

> Note: Only associated curators of the specific song and site contract owners will be able to remove or reorder a song listing. Other users can only interact with the tracks they have input. (ex. listening, minting, still open to all).

Another cool thing about this build is that the tracks are also tagged by the ETH address or ENS name that added the track listing.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/03-A-01-B-View%20Details-Scroll.png)

---

## Using Neosound to Deploy:

There’s a curation contract at the heart of Neosound. The underlying curation protocol reacts in tandem with the simple design of the site. There are methods whereby every song on the site is a ‘Listing’, and each ‘Listing’ is actually an ERC-721 of its own. These Listings are minted and then the tokenID’s of the Listing are soulbound to the song curator’s address.

![image](https://user-images.githubusercontent.com/91724117/193858474-455171a5-ac02-4363-bf7c-b7c84542a660.png)
[source](https://github.com/public-assembly/curation-protocol/blob/6eb6d8d5e824cdf68866d7c9c676b8d3d15bed45/src/interfaces/ICurator.sol)

  The contract method getListings() binds Listings together into a composable array that can be added to and subtracted from.
  This  method also makes the curation contract gas-efficient because after the listings are assembled, no data is stored on-chain.

  ![image](https://user-images.githubusercontent.com/91724117/193859332-9e17a38d-d2de-4e45-b8ed-2a15aa1201d6.png)
  [source]
  
![img](https://user-images.githubusercontent.com/91724117/194313502-3447c3f8-dd91-4914-9d72-6333a0f284cf.png)


### What is a Factory?

  In the context of blockchain, a factory is a smart contract that deploys other smart contracts.
  
  ![image](https://user-images.githubusercontent.com/91724117/193864948-f5de1bd8-d2ee-4bea-a2b8-b2b9cac7efb2.png)
  [source]

### Create your contract

  To use Neosound to make a custom curation contract, go to the navigation bar and click on the "Deploy" tab.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/click%20deploy.png)

  Follow the detailed onboarding instructions and enter the inputs as desired.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/01-A-03-Start.png)

---

Further Reading

---
 
 





