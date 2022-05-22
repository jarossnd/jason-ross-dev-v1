---
title: JavaScript Variables
date: "2022-05-19"
description: "Types of variables in JavaScript and how to declare and assignments"
tags: ['javascript']
---

## Overview

Variables are a fundamental concept in JavaScript. Variables hold types of information such as numbers, strings, booleans, arrays, and objects. There are eight different data types, and I will cover that in another post. For now, understand that variables hold information that can later be used, manipulated, or called upon within our JavaScript code.

## Declaring Variables

### Using var and let

There are 3 ways to declare a variable in JavaScript using the keywords of var, let, and const. All 3 keywords will allow you to store data in a variable. I will cover `const` the differences between the 3 later in this post. For now, we will use `var` and `let`. To declare a variable, you use the keyword plus the name that you want to call the variable. Below is an example using `var` and `let`:

```JavaScript
var name;
let age;
```

> In JavaScript, we use a semi-colon ( ; ) to tell the JavaScript interpreter that we are done with our statement.

Variable names can contain letters, numbers, and `$` or `_`. However, variables cannot start with a number or contain spaces.

If you were to type `name` (the variable we just declared above using the var keyword) or call upon `name` within some JavaScript code, it would return `undefined` because we have not set a value yet. Let us initialize our variable in the next section

### Using Constants

The third variable keyword is `const` which stands for constants. `const` works like `var` and `let` with the following exceptions:

- you have to initialize the variable (assigning a value) when they are declared
- you cannot assign a `const` variable a new value after it has been initialized

Here is an example on how to declare and initialize a constant variable using the `const` keyword:

```JavaScript
const alive = true;
```

If I try change alive to equal false, I will receive an error:

```JavaScript
alive = false;
```

The error will saying something like this:

```Text
Uncaught TypeError: Assignment to constant variable.
```

## Initializing Variables

Once a variable has been declared, you can then initialize the variable by setting a value:

```JavaScript
name = ‘bob’;
age = 65;
```

The datatype for name is going to be a string, age is a number and alive is a boolean. Again, I will talk about data types in another post.

We can also declare variables and assign a value at the same time using the assignment operator (=):

```JavaScript
var first = ‘jason’;
let age = 5;
```

If there are any calculations to the right of the assignment operator, they will be processed and the variable name will contain the value:

```JavaScript
let total = 1 + 1
total
2
```

## var

var is the older and no longer recommended way to declare a variable. In earlier versions of JavaScript, you could only declare a variable using var. var had some issues and eventually let and const were added to the language. var has been kept in the language for backwards compatibility reasons.

## let

## const

We covered `const` briefly already but const stands for constant. The value of a constant cannot be changed once it has been declared and initialized. Again, a `const` is a variable like var and let with the following exceptions:

- you have to initialize the variable (assigning a value) when they are declared
- you cannot assign a `const` variable a new value after it has been initialized
