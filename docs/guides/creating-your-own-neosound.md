# Creating Your Own Platform

Neosound is Public Assembly's first integration with the curation protocol. Our goal with Neosound was to build a platform whose architecture would be transparently seen and thus stripped apart, rebuilt, and remixed. Neosound is a single implementation of the power of collective decision-making reflected through the richness of NFTs as vehicles for information dissemination.

## Begin

Navigate to our [deploy platform](https://deploy.neosound.xyz/) to begin your journey into onchain curation. The website will walk you through the necessary steps to deploy your own curation contract on the Göerli testnet. You'll need ether on Göerli to successfully deploy your contract, with an active Twitter account, you can obtain some [here](https://faucet.paradigm.xyz/) thanks to the folks at Paradigm.

## Title

Your curation contract needs a name. This can be something general to reflect an entire platform's identity, or something more specific, all dependent on what you want to build. Remember, we're on a testnet, so don't get hung up on naming.

## Symbol

Your contract symbol is used solely for distinguishing your contract from someone else's, and theoretically, could appear on an interface. The convention is to use uppercase letters. If you're stuck on choosing a symbol, just grab the first few letters of your contract title.

## Curation Pass

Your curation pass is an integral piece to your curation contract. It is the NFT that enables those who hold it to add and remove elements from your curation contract. It can exist as any NFT contract, and is not specific to a platform or protocol. If you don't currently have an NFT on Göerli that you wish to use for this, you can go ahead and create one [here](https://testnet.create.zora.co/).

If you happen to have used the Paradigm faucet from above, you'll actually already have a 'MultiFaucet Test NFT' if your wallet. You can grab that NFT address by viewing the contents of your wallet at testnets.opensea.io/[your-wallet-address], clicking on a neon test NFT, and navigating to that token's details. Your curation pass can be changed at any time after deploying your contract.

Lastly, for reference, here is a [link](https://create.zora.co/collections/0xe276af76d8cf8646e2b4ae94c549fb0bbf198c1d) to the mainnet NFT that governs Neosound.

## Media

The deploy platform allows you to choose the first piece of media you wish to add to your curation contract. Again, this can be any NFT on Göerli. However, if you do choose to fork Neosound, the current rendering mechanism only supports editions from Zora.

Also, your contract need not be deployed with any media at all so feel free to skip this step. You can continually add and remove listings from your curation contract via Etherscan. We're in the midst of developing a general purpose UI to support these interactions for your curation contract.

## Deploy

Confirm that your wallet is configured for the Göerli testnet before clicking deploy. If it is and your happy with the inputs you've provided, go ahead.

If you're using MetaMask, navigate to your transaction on Etherscan by clicking the MetaMask logo in your browser, and then clicking again on your most recent 'Contract interaction'. Adjacent to 'Status' click 'View on block explorer' which should take you to Etherscan and display the status of your transaction. In the middle of the page, you should see the name of your contract and your contract symbol beside the field ERC-721 Tokens Transferred. Click on your new curation contract to be brought to it's dedicated page on Göerli Etherscan. Under 'Profile Summary' copy and paste your contract address to your clipboard.

## Forking Neosound

Following a successful transaction, navigate back to the deploy platform where you will be prompted to deploy your project to Vercel. This will lead you down the path of directly forking Neosound and creating your own version powered by the curation contract you've just deployed. The requested environment variable titled NEXT_PUBLIC_CURATION_CONTRACT should be your curation contract address currently copied to your clipboard. Follow the rest of the Vercel prompts to continue configuring your new repository.

## What's Next

If you've made it this far, you should have a fully functional curation contract deployed to the Göerli testnet, along with an accompanying GitHub repository that you can now begin to configure and make your own.
