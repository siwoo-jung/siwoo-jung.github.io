---
title: How to Create a Pull Request (PR) on GitHub
description: Learn how to create a Pull Request (PR) and try it yourself
date: 2025-08-02 09:00:00 +1000
categories:
tags:
pin: true
math: false
mermaid: true
image:
  path: assets/img/posts/presidio-pr.png
  alt: My merged Pull Request in Microsoft's Presidio repository
lang: en
# slug: how-to-create-a-pull-request-on-github
---

## Introduction

---

In my previous [post](https://siwoo-blog.pages.dev/posts/how-to-contribute-to-open-source-projects/), I shared my experience contributing to Microsoft's open source project, Presidio. For those not familiar with creating a Pull Request (PR), this post will provide a step-by-step guide on how to create a PR on GitHub.

A Pull Request (PR) is a way to propose changes to a codebase. It's called a "pull" request because you're asking the project maintainers to "pull" your changes into their repository. PRs are fundamental to collaborative development and are the standard way to contribute to open source projects.

## Prerequisites

---

Before you start creating PRs, make sure you have:

1. **Git installed on your computer**
   - Download Git from [git-scm.com](https://git-scm.com/downloads)
   - Verify installation by running `git --version` in your terminal

2. **A GitHub account**
   - Sign up at [github.com](https://github.com)
   - Set up two-factor authentication (2FA) for security
   - Configure your Git credentials locally:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

3. **Basic Git knowledge**
   - Understanding of basic Git commands (`clone`, `add`, `commit`, `push`)
   - Familiarity with branching concepts
   - Knowledge of what a repository is

4. **A code editor**
   - Visual Studio Code, Sublime Text, or any preferred editor
   - Basic understanding of the programming language you'll be working with

## What You'll Learn

---

By following this tutorial, you'll learn how to:
- Fork a repository
- Clone a repository to your local machine
- Make changes to files
- Commit and push changes
- Create a pull request
- Understand the pull request workflow

## How to Participate

### Step 1: Fork the Repository

1. Go to my tutorial [repository](https://github.com/siwoo-jung/pull-request-tutorial)
2. Navigate to the top right of the repository page
3. Click the **Fork** button
4. Click **Create fork** to fork this repository to your GitHub account

   ![Fork Button](./assets/img/posts/pr-tutorial-1.png)
   ![Create Fork Button](./assets/img/posts/pr-tutorial-2.png)

### Step 2: Get Your Repository URL

1. Click the **<> Code** button (green button)
2. Click the copy icon to copy your repository URL

   ![Code Button](./assets/img/posts/pr-tutorial-3.png)

### Step 3: Clone the Repository

Open your terminal and run the following commands. **Make sure to replace `YOUR-USERNAME` with your actual GitHub username**, or use the copied URL from Step 2.

```bash
git clone https://github.com/YOUR-USERNAME/pull-request-tutorial.git
cd pull-request-tutorial
```

### Step 4: Make Your Changes

1. Open the `favorite_number.py` file in your preferred text editor
2. Change the `favorite_number` and `favorite_color` variables to your actual favorites
3. Save the file

   ![Edit favorite number and color](./assets/img/posts/pr-tutorial-4.png)

### Step 5: Commit and Push Your Changes

Run these commands in your terminal:

```bash
git add favorite_number.py
git commit -m "Update favorite number and color"
git push origin main
```

### Step 6: Create a Pull Request

1. Go to your forked repository on GitHub
2. Click the **Contribute** button
3. Click **Open pull request**

   ![Contribute](./assets/img/posts/pr-tutorial-5.png)

### Step 7: Submit Your Pull Request

1. Review your changes on the pull request page
2. Click **Create pull request**

   ![Create PR](./assets/img/posts/pr-tutorial-6.png)

### Step 8: Wait for Review

Once you submit your pull request, I will review it and merge it into the main branch!

![Merged](./assets/img/posts/pr-tutorial-7.png)

---

## Conclusion

---

When you create a PR on an actual open source project, the main process is no different. However, one thing you may want to prevent is automatic linters, such as `prettier`. These tools automatically format code whenever you save a file, which could cause significant changes (differences) in a file that you would not have expected. 