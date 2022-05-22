---
title: How to run JavaScript
date: "2022-05-19"
description: "In this article I am going to talk about 4 ways to run JavaScript for those who are new at JavaScript and want to learn."
tags: ['javascript']
---

## Overview

In this article I am going to talk about 4 ways to run JavaScript for those who are new at JavaScript and want to learn. Below are the 3 methods I am going to touch on:

1. JavaScript embedded in an HTML page
2. JavaScript in an external file
3. Browser Console JavaScript Interpreter
4. Using NodeJS

The first 2 methods are going to be for front end JavaScript development. The 3rd method is going to be for debugging / testing JavaScript quickly in the browser. The 4th is server-side JavaScript using NodeJS.

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

## JavaScript Browser Console

## Using NodeJS

You can run JavaScript from a terminal using NodeJS. You must have NodeJS installed on your machine. You can get NodeJS from https://nodejs.org. NodeJS is for developing server-side applications. To run JavaScript after you have installed NodeJS, open a terminal and type node:

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