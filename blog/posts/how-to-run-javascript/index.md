---
title: How to run JavaScript
date: "2022-05-19"
description: "In this article I am going to talk about 4 ways to run JavaScript for those who are new at JavaScript and want to learn."
tags: ['javascript']
---

## Overview

In this article I am going to talk about 4 ways to execute JavaScript using 2 diferent hosts, the browser and Node.JS. Below are the 4 methods I am going to touch on. Methods 1-3 all use the web browser as a host with a built in JavaScript interpreter. This was the original way to run JavaScript when it first became a language.

The 4th method uses another host environment to execute JavaScript called Node.js which allows you to have access to the operating system and are not limited to just the browser.

1. JavaScript embedded in an HTML page
2. JavaScript in an external file
3. Browser Console JavaScript Interpreter
4. Using Node.js

The first 2 methods are going to be for front end JavaScript development. The 3rd method is going to be for debugging / testing JavaScript quickly in the browser. The 4th is server-side JavaScript using Node.js.

## Embedded in a HTML Page

On an HTML page, we use the `<script>` `</script>` tags to embed our JavaScript within an HTML page. Below is an example of a basic HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>Hello</p>
</body>
</html>
```

Now we will add the script tags to our document just before the closing `</body>` tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>Hello</p>
    <script>
    </script>
</body>
</html>
```

The script tags can be placed anywhere within the body tags however, in most circumstances it is best to add the script tags just before the closing body tag. The reason is because if our JavaScript code does sort of manipulation with our HTML elements through the DOM (Document Object Model), the JavaScript might fail if the JavaScript loads before our HTML elements.

Within the script tags we will add some JavaScript to show a popup Window when a button is pressed:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>Hello</p>
    <button onclick="functionClickMe()">Click Me!</button>
    <script>
        function functionClickMe() {
            alert("Greetings");
        } 
    </script>
</body>
</html>
```

Save the file and open it in your browser. Click the "Click Me!" button which will call our JavaScript function called functionClickMe. Uou will see JavaScript return an alert with a message saying "Greetings".

## HTML JavaScript External File

index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript External File</title>
</head>
<body>
    <h1>JavaScript External File</h1>
    <p id="myParagraph">Old paragraph...</p>
    <button type="button" onclick="myFunction()">Update</button>
    <script src="script.js"></script>
</body>
</html>
```

script.js:

```javascript
function myFunction() {
    document.getElementById("myParagraph").innerHTML = "New paragraph...";
  }
```

## JavaScript Browser Console

Another way to run JavaScript is through your browser JavaScript interpreter in the web deverloper tools. To access the web developer tools, you can typically press F12 or Control-Shift-I (On MacOS: Command-Option-I) and select the console tab.

## Using NodeJS

Node.js was created in 2009 and it comes with a CLI (command line interface) where you can run JavaScript from a terminal. You can directly input JavaScript in the terminal or pass an external file with JavaScript code. You must have Node.js installed on your machine. You can get Node.js from https://nodejs.org. Node.js is for developing server-side applications and running utility scripts. To run JavaScript after you have installed Node.js, open a terminal and type node:

```text
PS C:\Users\JasonRoss> node
Welcome to Node.js v16.14.2.
Type ".help" for more information.
>
```

```text
PS C:\Users\JasonRoss> node
Welcome to Node.js v16.14.2.
Type ".help" for more information.
> 1+1
2
>
```
