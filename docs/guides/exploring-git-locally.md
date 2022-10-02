# Exploring Git Locally
> **Source Control on Visual Studio Code [WIP]**

## Introduction 

## Prerequisites 

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

For example I keep all of my VSCode repo on my Desktop in a folder called VSCode

```bash
$ cd Desktop
$ cd VSCode
```

Type `git clone`, and then paste the URL you copied earlier.

```bash
$ git clone https://github.com/YOUR-USERNAME/hello-world
```

Press **Enter** to create your local clone. You should see a message like the one below

```bash
$ git clone https://github.com/YOUR-USERNAME/hello-world
> Cloning into `hello-world`...
> remote: Counting objects: 1, done.
> remote: Compressing objects: 100% (1/1), done.
> remove: Total 1 (delta 1), reused 1 (delta 1)
> Unpacking objects: 100% (1/1), done.
```

Change the current working directory to the newly cloned repository folder.

```bash
$ cd hello-world
```

Type `code .` and this will open VSCode straight to the repository you made (hello-world) this is now connected to both internet and your to your local computer

```bash
$ code .
```

Open Visual Studio code and authorize the app for use, it will always so you if you trust the authors of a reote reposity before opening it up in your computer
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/01.png)


---
## Editing code 

Navigate to the explorer tab of the editor and find your read me file that we created in the last tutorial 
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/02.png)

Make edits to your README file by typing in the text and code editor, I'm typing markdown text in my editor 
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/03.png)

Unsaved changed will flag athe open tab or flash a (1) on the explorer icon, click cmd+s to save files
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/04.png)

## Pushing to github
As you save your files you will then see the (1) flag on the source control panel in your VSCode editor
ths source control panel is an easy way to stage changes without using terminal commands. what is staging changes?[https://githowto.com/staging_and_committing]

prepare you files to be committed to the remote repository by clicking the '+' sign

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/05.png)

After you have done that step you will see your files move up in section
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/06.png)

After changes have been staged you should see the file move from unstages or stages, type update read me in the message box, the message box will serve as clear communication while working in teams 
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/09.png)

Navigate to the Terminal tab at the top and click “New Terminal”
    
Type `git -v`  or `git —version` in your terminal to confirm if git has been installed
    
```bash
$ git -v 
```
type `git push` then `return` key
this will prompt you to sign in with GitHub

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/07.png)


after your account has been authorized, revisit the terminal tab and type `git push`
if successful you will see a number of lines link in the image below 
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/10.png)


Open your reository in github.com and view the recent push you just made from your computer. Congratulations 
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/11.png)


## Pulling from github

Click the pencil on your newly pushed read me file 
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/12.png)

Make edits to you read me file then commit those edits 
![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/13.png)

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/14.png)

open your VSCode editor and type 'git pull' in terminal , this will bring the remote changes to the file into your computer. pull is use if anyone is ever working with a product on the same team and wants to do something to the file 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/15.png)


## Making a new branch in terminal 

'git branch' check the current branch you are one, we are on main. 

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/16.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/17.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/18.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/19.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/20.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/21.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/22.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/23.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/24.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/25.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/26.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/27.png)

## Opening an Issue 

## **Further Resources**

[Git command cheat-sheet ](https://education.github.com/git-cheat-sheet-education.pdf)

---