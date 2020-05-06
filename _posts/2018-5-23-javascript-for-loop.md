---
layout: post
title: JavaScript For Loop
image: config.png
description: Learn JavaScript control flow so that you can master your programs. This tutorial teaches you how to control flow like a pro. 
tag: beginner
---

JavaScript For Loop
============

Simply put, a for loop automates repetetive tasks, making you job as a coder easier. IF you ever wonder if you should be using a for loop, then check whether you're writing or copy/pasting the same peice of code over and over again. If you are, then you probably need a for loop. Think of a for loop as an asembly line. You can produce more robust code ina more efficient manner because a for loop takes care of the repetetiveness. For loops are often used to iterate through objects and arrays.

With a for loop, you set everything within a single parameter`()`.

```javascript
/* first you set the counter*/
//var x = 4;
/* then you set the condition*/
//x != 0;
/*finally, you decrement or increment
depending on your condition
*/
//--x
//Now let's install the batteries
for(var x = 4; x!= 0; --x){
  //we're ready to loop
}
```

Remember that rendering task you had to do earlier? Here's the solution using a for loop.

```javascript
//we can see here that Becky has accumulated a rounded total of four stars
var becky = {name:'Becky Star', stars: 4}
var starRow = '';
//====Profile
//Mock profile name
console.log(becky.name)
//rendering with the for loop
for(cnt = becky.stars; cnt != 0; --cnt){
  starRow += render();
}
starRow; // > '****'

//Dummy render function
function render(){
  return '*'
}

```

<h3>Breaking loops</h3>

A loop continues to run until the condition is false. Sometimes we might want to break out of the loop--Inception-style--with the keyword  `break`.

```javascript
//this is a potential infinite loop
while(true){
  console.log("I'm free!");
  break; // phew
}

```

You might encounter a problem that requires a nested for loop.

```javascript
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
//prints 1,2,3,4...
for(var outer=0;outer < matrix.length; ++outer){
   for(var inner=0;inner < matrix.length; ++inner){
    console.log(matrix[outer][inner])   
   }
}

````

Writing a break statement in the inner for loop will break the inner loop, but the outer loop will keep running.
```javascript
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
//prints 1,2,3,4...
for(var outer=0;outer < matrix.length; ++outer){
   for(var inner=0;inner < matrix.length; ++inner){
      if(matrix[outer][inner] === 2){
        break;
      }   
   }
}

````

 If you want to break completely free of every loop, you need to label your loops. You prepend your for loop with any name you want followed by a colon. Then, when you're ready to break the loop, you append your label name after the break keyword.

```javascript
labelName: for(){
  for(){
    break labelName;
  }  
}
```

Here's our modified nested loop.

```javascript
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
//the for loop can start on a newline
outer:
for(var outer=0;outer < matrix.length; ++outer){
   for(var inner=0;inner < matrix.length; ++inner){
      if(matrix[outer][inner] === 2){
        break outer;
      }   
   }
}

````

<h3>Continuing loops</h3>

The continue directive allows us to skip steps in a loop. Perhaps the directive should've been called skip, but, alas, we'll make do with continue.

```javascript
for (let i = 0; i < 10; i++) {
// if i is even, skip the rest of the code.
  if (i % 2 == 0) continue;

  console.log(i); // 1, 3, 5, 7, 9
}
```
> Pro tip: Curly braces are not required if the block of code can be written in one line.

<h3> Different types of for loops </h3>

In JavaScript, you also have the for/in loop and the for/of loop. You can use these to quicly loop through objects and arrays. For example:

```javascript
let house = {keys: 3, shirts: 5, shoes: 6}
for (object in house) {
  console.log(house[object]); // 3, 5, 6
}
```
How the for/in and for/of work is that the first variable can be named whatever you like and should refer to the items in the object or array. The second variable should refer to the enire object or array. More on JavaScript objects later.


<h3> For loop conclusion </h3>

For loops are the bread and butter of looping, meaning you'll be using for loops a lot. At first it may be tempting to write every peice of code out when you're first learning to program. Wioth the above example, we could've console.logged all of the values in the object. But as your programs get bigger, you don't want to write everything by hand. That's why we program in the first place!

