# Exploring Git Locally
> **Source Control on Visual Studio Code [WIP]**

/ video here 

## Introduction 

## Prerequisites
In order to begin this guide, you must have completed the following:

[Getting Started with GitHub]
[Vercel Setup]
[Visual Studio Code Setup]

## What You'll Do

- Clone a repository 
- Edit code
- Push to GitHub
- Pull from GitHub
- Make a branch from Terminal
- Make your first Issue
-   Optional: turning your issue into a new branch.

---

## TUTORIAL

## **Clone a Repository**

1. On GitHub.com, navigate to the main page of the repository.
2. Above the list of files, click  **Code**.
3. Copy the URL for the repository.

- It is okay to clone the repository using HTTPS. Under "HTTPS", click copy icon

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/getting-started-with-github-assets/15.png)


---

## Cloning a repository 
Open a new terminal window (CMD+Spacebar search terminal or 'F4' Search terminal)

Change the current working directory to the folder location where you want the cloned directory. *(cd means change directory, try Desktop if you have never done this before)* 

For example, I keep all of my VSCode repo on my `Desktop` in a folder called `VSCode`.

```bash
$ cd Desktop
$ cd VSCode
```

Type `git clone`, and then paste the URL you copied earlier.

```bash
$ git clone https://github.com/YOUR-USERNAME/hello-world
```

Press **Enter** to create your local clone. You should see a message like the one below.

```bash
$ git clone https://github.com/YOUR-USERNAME/hello-world
> Cloning into `hello-world`...
> remote: Counting objects: 1, done.
> remote: Compressing objects: 100% (1/1), done.
> remove: Total 1 (delta 1), reused 1 (delta 1)
> Unpacking objects: 100% (1/1), done.
```

Change (cd) to the newly cloned repository folder as the current working directory.


```bash
$ cd hello-world
```

Type `code .` and this will open VSCode straight to the repository you made (hello-world) this is now connected to both internet and your to your local computer.

```bash
$ code .
```

Open Visual Studio code and authorize the app for use, it will always so you if you trust the authors of a reote reposity before opening it up in your computer.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/01.png)


---
## Editing code 

Navigate to the explorer tab of the editor and find your README file that we created in the last tutorial.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/02.png)

Make edits to your README file by typing in the text and code editor, I'm typing markdown text in my editor. 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/03.png)

Unsaved changed will flag the current tab or flash a (1) on the explorer icon, click `cmd/ctrl`+`s` to save files.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/04.png)

## Pushing to GitHub

As you save your files, the (1) flag will appear on the source control panel in your VSCode editor. The source control panel is a convenient way to stage changes without having to use terminal commands. [What is staging changes?](https://githowto.com/staging_and_committing)

Prepare your files to be committed to the remote repository by clicking the '+'.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/05.png)

After you complete that step, your files will be moved up a section.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/06.png)

After changes have been staged, you should see the file move from unstages to stages; then, in the message box, type Update README.md; the message box will serve as clear communication while working in teams.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/09.png)

Navigate to the Terminal tab at the top and click “New Terminal”
    
Type `git -v`  or `git —version` in your terminal to confirm if git has been installed
    
```bash
$ git -v 
```
Type `git push` then `return` key
This will prompt you to sign-in with GitHub

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/07.png)


After you've authorized your account, return to the Terminal tab and type 'git push'; if successful, you'll see a number of lines linked in the image below.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/10.png)

Navigate to your repository on github.com and look at the most recent push you made from your computer. Congratulations! You should see your commit message on the screen.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/11.png)


## Pulling from GitHub

Click the pencil on your newly pushed README.md file.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/12.png)

Make edits to your README.md file then commit those edits.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/13.png)

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/14.png)

Open your VSCode editor and type 'git pull' in the terminal to download the remote changes to the file. Git pull is used when multiple people on the same team are working on the same product and want to make changes to the project.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/15.png)


## Making a new branch in Terminal 

Type 'git branch' to see which branch you are on; we are on main.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/16.png)


Type 

```
git push --set -upstream origin newbranch
```
This creates a new branch right in terminal. 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/17.png)

Refresh your GitHub to confirm uf a new branch has been made.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/18.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/19.png)


## Opening an Issue 

Clik on the Issues tab 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/20.png)


Edit the subject and description to your suggestions and click `Submit a new Issue`.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/21.png)


After it has been submitted you can view all open issues in the issues tab. 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/22.png)


> Note: Open issues can turn into new branches and new pull requests in a few easy steps so that's what we're going to do. 

Create new branch and rename it to something like issue solution. 
Copy and paste these lines into your VSCode Terminal. 

```
git fetch origin 
git checkout /issue-solution 
``` 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/23.png)

This is how the output should look like. 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/24.png)


On this branch you have the freedom to edit the README.md and merge the branch back into GitHub.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/25.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/26.png)


Congratulations, you finished the Exploring Git Locally tutorial.

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/27.png)


--- 

## **Further Resources**

[Git command cheat-sheet ](https://education.github.com/git-cheat-sheet-education.pdf)

---
