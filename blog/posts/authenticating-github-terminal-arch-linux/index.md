---
title: Authenticating to Github in the Terminal in Arch Linux
date: "2022-04-07T00:00:00.000Z"
description: "How to authenticate to Github in the Terminal in Arch Linux so you can make changes to your private repos!"
tags: ["git", "linux", "linux-config"]
---

## Overview

This is a quick article on how to easily authetnicate to Github in a terminal on Arch Linux.

## Prerequisits

This article assumes you already have Git installed. If not, run:

```
sudo pacman -S git
```

## Authenticate to Github

We will use the Github Command Line Interface (CLI) to authenticate. We must first install `github-cli` from the AUR:

```
sudo pacman -S github-cli
```

I always create my repos folder in my home folder:

```
mkdir ~/repos
cd ~/repos
```

Now run:

```
gh auth login
```

and choose

```
> GitHub.com
```

You will then be propmpted to copy a code and open your browser window where you will type in your GitHub credentials. Once you are logged in, you will paste the code you received from the terminal into the browser. Once done, click on authorize and then that is it!
