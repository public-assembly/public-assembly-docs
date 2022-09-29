# Welcome

"What's Public Assembly?" - 

## Neosund Quick Start

- [No-code Guide] - 

## Guides

- [Getting Started with Public Assembly]
- [Using the Assemble Package Template]

- [Wallet Setup]
- [Getting Started with GitHub]
- [Vercel Setup]
- [Visual Studio Code Setup]
- [Exploring Git]
- [Installing Node JS]


## Documentation

- [Overview]
- [Curation Protocol]
- [OS Modular Package Library]
- [OS Modular Audio Player Library]
- [Glossary]

## Communcation

- [Twitter](https://twitter.com/pblcasmbly)
- [Notion](https://www.notion.so/ourzora/Neosound-working-product-title-dd4ef7e0ce8c478386ef867a5d0f7ffe)
- [Figma](https://www.figma.com/file/IMYiNZVVJCvO9Yjn0IBe1f/~neosound~-%5Bcommunity%5D?node-id=1730%3A10991)

### Contribution Guidelines
Thanks for giving a little extra love to our docs! Below are some basic guidelines to follow to get your PR merged :)

### Creating a Pull Request
1. Fork the repository.
2. On your copy of the repo, create a new branch. Be sure that your branch contains the most recent changes from the main branch.
3. Make any necessary changes, then commit and push them to your fork.
4. Go to the main docs repo in your browser and open a new pull request.
5. Title the pull request to describe your contribution, and include a short summary of the changes. If an open issue is associated with your changes, tag the issue by referencing the issue number ( i.e., #123) in the pull request summary.
6. If there is a relevant tag like "typo", "bug", or "enhancement", include the tag in the PR.

### A standard flow to set up a fork
Set up your fork with the following terminal commands, or an alteration of them to suit your environment:

```cd zora-docs
git remote add upstream https://github.com/public-assembly/public-assembly-docs.git
git fetch upstream
git pull --rebase upstream main
git checkout -b "<your-name>/my-contribution"
```
### Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
