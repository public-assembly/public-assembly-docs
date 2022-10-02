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


Open VS Code 

Navigate to the Terminal tab and click “**New Terminal**”

Change the current working directory to the folder location where you want the cloned directory. *(cd means change directory, try Desktop if you have never done this before)* 

```bash
$ cd Desktop
```

Type `git clone`, and then paste the URL you copied earlier.

```powershell
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

- Making and commiting changes
    
    via VSCode View explorer tab and locate your `readme` file. Open the file  
    
    Make any edits to your `readme` file in plain text
    
    hit save 
    
- Pushing changes to GitHub

    GitHub username and password
    
    now navigate to the source control panel in vscode. a little 1 should have popped up for pending changes, on source control sign in to github… cmd/ctrl shift p 
    
    under changes tab click the + sign to stage changes, this is the equivalent of doing add . in terminal 
    
    after changes have been staged you should see the file move from unstages or stages, type update read me in the message box, the message box will serve as clear communication while working in teams 
    
    Navigate to the Terminal tab at the top and click “New Terminal”
    
    Type `git -v`  or `git —version` in your terminal to confirm if git has been installed
    
    ```bash
    $ git -v 
    ```
    
    git pull (or fetch and merge)
    git push -u origin main (or git branch [branch name], git push -u origin [branch name])
    

    ## Git push --set -upstream [branch name]
## Pulling merged changes back to your local repository 

git fetch 
git pull

![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/01.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/02.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/03.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/04.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/05.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/06.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/07.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/08.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/09.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/08.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/09.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/10.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/11.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/12.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/13.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/14.png)


![img](https://github.com/public-assembly/public-assembly-docs/blob/main/static/imgs/exploring-git-assets/Exploring%20Git%20in%20VSCode%20and%20terminal/15.png)


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


## **Further Resources**

[Git command cheat-sheet ](https://education.github.com/git-cheat-sheet-education.pdf)

---