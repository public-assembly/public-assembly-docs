# Exploring Git

## **Introduction**

Git enables multiple developers to work together on projects. Git is the seed that connects GitHub and your local computer across the web. 

This guide walks you through the Git Source Control features built into Visual Studio Code + GitHub.

## **Prerequisites**

In order to begin this guide, you must have completed the following:

- [Getting Started with GitHub](https://www.notion.so/Getting-Started-with-GitHub-5ffbde3c760f4abcab093a393261392e)
- [Vercel Setup](https://www.notion.so/Vercel-Setup-5a93184617154e2eaf05ed3e6c819bd1)
- [Visual Studio Code Setup](https://www.notion.so/Visual-Studio-Code-Setup-eff31c44564645f08a8faf1c752c841a)

## **What you’ll do**

- Install Git
- Create a Repository
- Create a Branch
- Make a Commit
- Clone a Repository

---

[Downloads](https://git-scm.com/downloads)

## **Installing Git**

### **Mac OS X**

There are several options for installing Git on macOS. 

 [https://git-scm.com/download/mac](https://git-scm.com/download/mac)

### **Windows**

Click here to download the latest (**2.37.3**) **64-bit** version [https://git-scm.com/download/win](https://git-scm.com/download/win)

---

- Install window will pop up swiftly after downloading.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/adcdc55b-9b1b-496a-a95c-906a3999dac9/Untitled.png)

- Make sure to follow the steps as your files update.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7b73acc0-8a35-471f-bd61-aaffdb051aae/Untitled.png)

### **After Install**

Open your VSCode application 

Navigate to the Terminal tab at the top and click “New Terminal”

Type `git -v`  or `git —version` in your terminal to confirm if git has been installed

```bash
$ git -v 
```

Type  `git config --global [user.name](http://user.name/) “[firstname lastname]”` to set a name that is identifiable.

```bash
$ git config --global user.name "[Johnny Appleseed]"
```

Type git config --global user.email “[valid-email]”, preferably the email you used to set up your GitHub account this will be associated with each history marker. 

```bash
$ git config --global user.email "[johnny.a@gmail.com]"
```

**Congrats, you are finished installing Git to your computer!** 

### **Source Control on GitHub**

### **Create a Repository**

A **repository** is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs. 

Let’s start by creating a simple  `hello-world` repository.

1. In the upper-right corner of any page, use the  drop-down menu, and select **New repository**.
    
    ![https://docs.github.com/assets/cb-11427/images/help/repository/repo-create.png](https://docs.github.com/assets/cb-11427/images/help/repository/repo-create.png)
    
2. In the **Repository name** box, enter `hello-world`.
3. In the **Description** box, write a short description.
4. Select **Add a README file**.
    1. *Often, repositories include a README file, a file with information about your project. README files are written in the plain text Markdown language. You can use this [cheat sheet](https://www.markdownguide.org/cheat-sheet/) to get started with Markdown syntax. GitHub lets you add a README file at the same time you create your new repository. GitHub also offers other common options such as a license file, but you do not have to select any of them now.*
5. Select whether your repository will be **Public** or **Private**.
6. Click **Create repository**.
    
    ![https://docs.github.com/assets/cb-106613/images/help/repository/hello-world-repo.png](https://docs.github.com/assets/cb-106613/images/help/repository/hello-world-repo.png)
    

### **Create a Branch**

Branching lets you have different versions of a repository at one time.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6c229d0-f9d0-4463-828b-644fef6537ee/Untitled.png)

By default, your repository has one branch named `main` that is considered to be the definitive branch. You can create additional branches off of `main` in your repository. This is helpful when you want to add new features, experiment, and/or make edits to a project without changing the main source of code. The work done on different branches will not show up on the main branch until you merge it, which we will cover later in this guide. 

When you create a branch off the `main` branch, you're making a copy, or snapshot, of `main` as it was at that point in time. If someone else made changes to the `main` branch while you were working on your branch, you could pull in those updates. Think about a car switching lanes. 

This diagram shows:

- The `main` branch
- A new branch called `feature`
- The journey that `feature` takes before it's merged into `main`

![https://docs.github.com/assets/cb-23923/images/help/repository/branching.png](https://docs.github.com/assets/cb-23923/images/help/repository/branching.png)

### **Create a branch**

1. Click the **Code** tab of your `hello-world` repository.
2. Click the drop-down at the top of the file list that says **main**.
    
    ![https://docs.github.com/assets/cb-6252/images/help/branch/branch-selection-dropdown.png](https://docs.github.com/assets/cb-6252/images/help/branch/branch-selection-dropdown.png)
    
3. Type a branch name, `readme-edits`, into the text box.
4. Click **Create branch: readme-edits from main**.

![https://docs.github.com/assets/cb-27383/images/help/repository/new-branch.png](https://docs.github.com/assets/cb-27383/images/help/repository/new-branch.png)

Now you have two branches, `main` and `readme-edits`. Right now, they look exactly the same. Next, you'll add changes to the new branch.

### **Making and committing changes**

When you created a new branch in the previous step, GitHub brought you to the code page for your new `readme-edits` branch, which is a copy of `main`.

You can make and save changes to the files in your repository. On GitHub, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes so that other contributors can understand what you’ve done and why.

1. Under the `readme-edits` branch you created, click the *README.md* file.
2. Click to edit the file.
3. In the editor, write a bit about yourself. Try using different Markdown elements.
4. In the **Commit changes** box, write a commit message that describes your changes.
5. Click **Commit changes**.
    
    ![https://docs.github.com/assets/cb-75044/images/help/repository/first-commit.png](https://docs.github.com/assets/cb-75044/images/help/repository/first-commit.png)
    

These changes will be made only to the README file on your `readme-edits` branch, so now this branch contains content that's different from `main`.

### **Clone a Repository**

1. On GitHub.com, navigate to the main page of the repository.
2. Above the list of files, click  **Code**.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f1b18ee-efd4-4962-b9a1-169a8da592ef/Untitled.png)

Copy the URL for the repository.

- It is okay to clone the repository using HTTPS. Under "HTTPS", click copy icon

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78499712-e9da-4736-bc60-b79af6efd23d/Untitled.png)

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

### **Source Control on Visual Studio Code [WIP]**

Your VS Code editor should still be open at this point in the tutorial.

- Making and commiting changes
    
    via VSCode View explorer tab and locate your `readme` file. Open the file  
    
    Make any edits to your `readme` file in plain text
    
    hit save 
    
- Pushing changes to GitHub
    
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
    
    GitHub username and password
    

---

## Further resources

[Git command cheat-sheet ](https://education.github.com/git-cheat-sheet-education.pdf)

---