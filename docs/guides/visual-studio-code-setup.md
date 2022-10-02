# Visual Studio Code Setup

>
/video here
## **Introduction**

Visual Studio Code is a lightweight but strong source code editor that runs on your desktop. Additionally, it provides built-in support for JavaScript.

This guide walks you through installing Visual Studio Code

## **Prerequisites**

In order to begin this guide, you must have completed the following:

- [Getting Started with GitHub]
- [Vercel Setup]

## **What You’ll Do**

- Install Visual Studio Code
- Add extensions

---
## **TUTORIAL**
### Install Visual Studio Code

/video

[Download Visual Studio Code - Mac, Linux, Windows](https://code.visualstudio.com/download)

You should see this screen. Click directly on the blue download arrows depending on your system type proceed to the next step.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Windows/Untitled.png)

### **Windows**

In the bottom left side of your screen, you should see the VSCodeUserSetup install. Upon completion, click on it.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Windows/Untitled-1.png)

Next, select the ‘I accept the agreement’ option, and click on ‘Next >’.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Windows/Untitled-2.png)

Click ‘Next >’.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Windows/Untitled-3.png)

Click ‘Next >’.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Windows/Untitled-4.png)

If you prefer to have a Visual Studio Code desktop icon, check the box next to ‘Create a desktop icon’. Otherwise, verify that ‘Add to PATH (requires shell restart)’ is checked, and then click ‘Next >’.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Windows/Untitled-5.png)

Click ‘Install’.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Windows/Untitled-6.png)

Verify that ‘Launch Visual Studio Code’ is checked, and then select ‘Finish’.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Windows/Untitled-7.png)

---
### **Mac OS X**

Navigate to VS Code official download website

![Untitled](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/01.png)

![Untitled](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/02.png)

Open the associated zip file in the downloads bar of your browser

![download](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/03.png)

Drag `Visual Studio Code.app` to the **Applications** folder, making it available in the macOS Launchpad.

![Untitled](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/04.png)


*Optional: Add VS Code to your Dock by right-clicking on the icon and choosing `Options`, `Keep in Dock`.*

After installing the VS Code, we can also configure the code to open from a **command line**, and it is pretty easy for us to do that.

1. Launch Visual Studio Code.
2. Open the **Command Palette** (⇧⌘P) and type ‘**shell command**‘ to find the **Shell Command: Install the ‘code’ command in the PATH** command.

![Untitled](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/vscode-install-assets/Screen%20Shot%202022-10-01%20at%201.44.13%20PM.png)

Restart the terminal for the new `$PATH` value to take effect. You'll be able to type 'code .' in any folder to start editing files in that folder.

```bash
code .
```

### **Extensions to Consider Adding to VS Code**

- Solidity
    - [https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
- Truffle for VS Code (ConsenSys)
    - [https://marketplace.visualstudio.com/items?itemName=trufflesuite-csi.truffle-vscode](https://marketplace.visualstudio.com/items?itemName=trufflesuite-csi.truffle-vscode)
- DotENV (crucial for smart contract dev when messing around with private keys)
    - [https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- Quokka.js
    - [https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
- Tailwind CSS IntelliSense
    - [https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- Prettier
    - [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- indent-rainbow (really helpful for seeing what code lines up with what)
    - [https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- CodeSnap
    - [https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)

---

## **Further Resources**

[Getting started with Visual Studio Code](https://code.visualstudio.com/docs/introvideos/basics) | Visual Studio Code

---