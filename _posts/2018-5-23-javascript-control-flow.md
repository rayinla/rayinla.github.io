---
layout: post
title: JavaScript Control Flow
image: config.png
description: Learn JavaScript control flow so that you can master your programs. This tutorial teaches you how to us control flow like a pro. 
tag: beginner
---

JavaScript Control Flow
============

There comes a point in time when you need to rely on automated tasks to run code. Think of the traffic lights that control traffic, saving cities from the hassle of appointing a traffic cop on every crossroad. Or the assembly line which performs mundane tasks at incredible speeds.

Similarly, conditionals and loops allow us to write effective and efficient code. The reason why the term control flow is used is because the interpreter reads code from top to bottom. Step by step.

When you write a bunch of statements like,

```javascript
 let firstVar = 'dummy';
 let secondVar = 'bozo';
 let thirdVar = 'stooge';

 console.log(firstVar);
 console.log(secondVar);
 console.log(thirdVar);
```

The interpreter reads the code from top to bottom and executes them in that order. This would be fine if we didn't have to account for the fact that users will interact with our app. Humans, unlike robots, can be don't interact with our app they way we want them to, so we have to plan for this by setting up conditions.

Think of conditionals as forks in a road. One conditional you may be familiar with by now is the if statement. Let's try to use it in a scenario where a user would interact with our app.

<h3>If/else</h3>

Suppose we've been tasked with building a submission form for a pet daycare called Pet Nirvana. One of the questions that CEO Larry Davis wants to ask his potential costumer is, 'how many pets do you have?'.

```javascript
var answer = prompt("how many pets do you have?");
alert(answer);
```

> Pro tip: The `prompt` method takes in a response from a user and returns the user's input. We can use it to test user input. Once upon a time, the `alert` method used to be used to test output, but `console.log()` took over that role.

We'd assume that the user would enter a number, but what if someone wanted to enter a long string just to mess with us.

Without control flow, this is what we might get from a malicious user:


![image]({{site.baseurl}}/images/prompt-1.JPG)


That little line of SQL code can drop all of the users in a database. That's just one example. Really, all it takes is a simple string to break our app. We'll see why that is with a real life example.

Imagine if we wanted to calculate the average pets per owner so that Mr. Davis can know how much he should be spending on supplies.

Don't worry about the functions. Copy the code below into the editor and try entering a number.

```javascript
var pets = 35;
var owners = 15;
var petsPerOwner = average(pets, owners);
//======Pet Info Form
var answer = prompt("how many pets do you have?");
//============
updateAvg(answer) // update based on answer, add new owner

console.log(`There are now ${petsPerOwner} pets per owner at Pet Nirvana `)

//============
//Functions are hoisted up in JavaScript.
//We'll deal with 'em later

function average(total, number){
    return total / number;
}
function updateAvg(newNum){
  pets += Number(newNum); // register new pet(s)
  owners += 1 // register new owner
  petsPerOwner = Math.ceil(average(pets, owners)); // find new average, round up
}

```
You should've received a nicely rounded average. Now, try to insert a random string into the prompt.

You should get "There are now NaN pets per owner at Pet Nirvana"

>Pro tip: The specific error originates at the Number() function. The function forces a number that's type string (`'3'`) into type number
(`3`). Whenever we receive user input, it'll most likely be in the form of a string. So `Number()` comes in handy when we're expecting a number. If an input is a normal string of words, and we try to coerce it into a number, we get `NaN`.

This might not appear to be a big deal, but in the real world this would be a disaster. We've lost access to important information just because we couldn't filter data.

There has to be control over the data we'd like to work with.

Thankfully, we have if/else statements.

```javascript
var answer = prompt("how many pets do you have?");
if(isNaN(answer)){
    alert("Error: input a number");
}else{
  updateAvg(answer) // update based on answer, add new owner
  console.log(`There are now ${petsPerOwner} pets per owner at Pet Nirvana `)
}
```

Instead of taking in any ol' response, we're able to control the flow of data by checking if the answer is a number. Remember our  `NaN` error? It's the error you get when you try to perform incompatible arithmetic operators on strings. Any block of code within the if statement will automatically execute if the condition is true.

>Note: There's no need to write `isNaN(answer) == true` because the if statement can evaluate the truthiness of a value.

```javascript
"hello" / 4; //> NaN
```

Well, there's a built-in function called `isNaN()` that checks whether or not a data type is a number. If the data type is not a number, it returns true. Otherwise, it returns false.

Let's translate the code we just wrote into pseudo code for better understanding.

```javascript
/*
If the answer is not a number
     output an error
Else(otherwise)
    update the average
*/

```
<h3> Short circuit </h3>
There's an alternative way to control the flow of data. We can short circuit the OR operator.

```javascript
 isNaN(answer) || (petsPerOwner = updateAvg(answer));
console.log(`There are now ${petsPerOwner} pets per owner at Pet Nirvana `);
```
The OR operator looks for the first truthy value. When it finds it, it breaks out of the condition. So, if  there's ever the case that the answer is not a number, we wont have to update the average.

The problem here is that `answer` still holds the unwanted value, limiting what we can do with that variable down the line. You'll also notice that there was no way of giving the user any feedback. Short circuiting the OR operator is a nifty trick, but it's not the best at controlling data flow.

<h3> else if </h3>

What if we want to check for more than two possible conditions? What if the CEO of Pet Nirvana also wants to warn pet owners that the company can only accommodate 3 pets per owner, for now. We would now not only need to check for the type of data the users are entering, we would also have to warn owners who have over four pets about the limit.

An else if statement will be useful. You can chain as many of them together as you want.

```javascript
if(/*first condition*/){

}else if(/*second condition*/){

}else if(/*third condition*/){

}
```
Why don't we try pseudo coding our solution first before we begin coding?  

```javascript
/*
If the answer is not a number
     output an error
Else if the answer is greater than three     
    warn the user that they have too many pets
Else(otherwise)
    update the average
*/


````
Let's try it out on our code. When you input a number greater than 3, you should get a warning.

```javascript
var answer = prompt("how many pets do you have?");
if(isNaN(answer)){
    alert("Error: input a number");
}else if(Number(answer) > 3){
  alert("Sorry, we currently only accept 3 pets");
}
else{
  updateAvg(answer) // update based on answer, add new owner
  console.log(`There are now ${petsPerOwner} pets per owner at Pet Nirvana `)
}
```
<h3> Task </h3>
Oh, oh. There was a breakdown in communication between you and your client. Apparantly, he wants the average to be updated even if an owner's total number of pets exceeds the limit, but he want's to ask the user if they're okay with the limit before doing so.

Pseudocode has been provided for you.

```javascript
/*
Else if the answer is greater than three   
  Prompt the user and ask if they're ok with the limit
  If the prompt equals yes
     update the average

*/

```

<h3>Switch Statements</h3>

As you continue to work with if statements, you might come across this type of code:

```javascript
if (x == "case 1") runThis();
else if (x == "case 2") runThat();
else if (x == "case 3") runThis();
else if (x == "case 4") runThat();
```

If you're dealing with so many cases, it may be better to use a control flow construct called `switch`.

A basic switch statement begins with the initial value, then offers up case blocks with an optional default.

A case statement is just a reader-friendly if statement.

```javascript
let greeting = 'hello'
switch(greeting){
  case 'hello': // is the same as if(greeting === 'hello')
    //code goes here
    //break

  default: // is the same as else
}

```
Here's a more fleshed out example for you to munch on.

```javascript
let number = 2;

switch(number) {
  case 1:
    console.log("this is one");
    break;
  case 2:
    console.log("this is two");
    break;
  case 3:
    console.log("this is three");
    break;
  default:
    console.log("I can't count past three.");
}

//can you guess what the result will be?

```
The break keywords are crucial. If you leave them out and the condition is met, the switch statement will continue, automatically executing the next case block until it hits a break or runs out of cases.

So, if we had omitted the `break` in `case 2:`, we would have gotten:
```javascript
"this is two"
"this is three"
```

Think of the switch statement as a pipe. The break statements serve as dams that prevent leakage to other sections of the pipe.

One other thing to note about switch statements is the ability to group cases. Let's expand our greeting example to showcase our chain of cases.

```javascript

switch(prompt('greet me!')){
  case 'hello':
  case 'hi':
  case 'yo':
    console.log("Hey? What's up?");
    break;
  default:
    console.log("I don't speak your lingo.");
}

```


<h2>Loops</h2>


So now we know how to control the data that comes in, but how about the data that goes out to the user?

Mr. Davis now wants to add a rating system to his handlers. He'd like stars to show up under their profile name.

We could render all of the stars manually...

```javascript
//you can see that Becky has accumulated a rounded average of four stars
var becky = {name:'Becky Star', stars: 4}

//====Profile
//Mock profile name
console.log(becky.name)
//we can render our stars four times
render() + render() + render() + render();
//====
//Dummy render function
function render(){
  return '*';
}

```
<h3> while loop</h3>

Or we can use a `while` loop. A while loop checks if the condition is true and will continue running the block of code until it is false. Make sure your loop can eventually produce a false value. Otherwise, you'll have an infinite loop on your hands.

```javascript
// you usually have to set a counter and either decrement or increment it till it satisfies the condition.
counter = 4;

while(counter != 0){
  console.log(counter);
  --counter //we decrease the counter by 1
}

```

Try igniting your creativity. render a row four stars using a while loop. The output should look like this: `'****'`

>Hint: the counter number and the number of stars are significant.

>Hint: the plus equals operator will be useful


<h3>do  while</h3>

A do while loop is similar to a while loop except for the fact that you are guaranteed the execution of the block on the first go round.

It's like saying, "definitely do this first(this being the block of code). Now, while my condition is true, continue to do what's in that block.

Let's revisit that pet number prompt and rewrite it using a do while loop.
```javascript
let answer;
do {
  answer = prompt("how many pets do you have?");

}while(isNaN(answer))

```
This code will keep badgering a user to enter information if they don't enter a number.

Let's add a condition within the loop to beef up our control of information.

```javascript
let answer;
do {
  answer = prompt("how many pets do you have?");
  if(isNaN(answer)){
     alert("error: enter a number");
  }
}while(isNaN(answer))
```

Now we've created a feedback loop that alerts the user of their error and allows them to immediately correct it.


<h3> for loop </h3>

Simply put, a for loop is a while loop with batteries included. You know how you have to set up a counter outside of the loop and then make sure you decrement or increment it?

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


<h2> Extra Content: The If Sphagetti </h2>

When we’re controlling the flow of data within a function, it can be tempting to use only a single return statement. A variable will be assigned a new value depending on a condition.

```javascript
function divider(dividend, divisor){  
   let response;  
   if(isNaN(dividend) || isNaN(divisor))  
   {  
     response = "Error: input a number";  
   }  
   else if(divisor === 0)  
   {  
    response = "Error: cannot divide by 0";  
   }  
   else   
   {  
    response = dividend / divisor;  
   }return response;  
 }
```
> **_Note_**_: Admittedly, that else block is a stretch._

The code above has a single exit point(return statement), which is fine if you’re thinking in terms of functional logic. When we learn about functions for the first time, it’s ingrained in our being that you only return once. A function is a dog and a dog only has one tail, the return statement. Logically-speaking, the notion of multiple exit points can appear confusing…like a dog with multiple tails. “Which tail will the dog wag next?” is the sort of thing a cynic might say about functions that have multiple returns.

But a single exit point in a maze can create a game of cat and mouse as we peruse through nested conditions. If you looked at the earlier code example long enough, you may have gotten that nagging feeling that said, ‘if the condition is met, why are we not exiting right now? Why do we have to wait?’

It’s as if we reached a possible exit after meeting a condition, only to be funneled to a waiting room. Think: your flight’s delayed after meeting the condition of booking your ticket and being there on time. Yeah, rough.

Conversely, we can use early returns.
```javascript
function divider(dividend, divisor){  
   if(isNaN(dividend) || isNaN(divisor))  
   {  
     return "Error: input a number";  
   }  
   else if(divisor === 0)  
   {  
    return "Error: cannot divide by 0";  
   }return dividend / divisor;  
 }
```
Multiple exit points allow us to make sense of the logic. Sometimes, we need to be reminded that we’re still within a function as we traverse conditions.

When you think about early returns in terms of pseudo code, you’ll realize that early returns are succinct.
```
If a condition is true   
  return value.

As opposed to,

If a condition is true  
 assign a valuethe value may or may not change...return value
```
There’s less ambiguity, less confusion, and more assurance with early returns. It feels good to know that if you have a base case that handles invalid input, you are exiting the function immediately.

Doing otherwise is akin to dragging your feet, saying, “Yeah, yeah I’ll take care of that later.” Then, assigning the task of garbage disposal to someone else.
```javascript
if(hackyInput)  
{   
  return; //!!!!  
}//vsif(hackyInput)  
{   
  handleLater = ERROR_MSG;   
}
```
 <h3> Sprinkling More Style</h3>

All of this code can be stripped down by deleting all of those brackets.
```javascript
function divider(dividend, divisor){  
   if(isNaN(dividend) || isNaN(divisor))  
     return "Error: input a number";  
   else if(divisor === 0)  
    return "Error: cannot divide by 0";return dividend / divisor;  
 }if(hackyInput) return; //!!!!//vsif(hackyInput) handleLater = ERROR_MSG;
```
<h3>Thoughts?</h3>

Of course, all of the above should be taken with a grain (or a couple more) of salt. At the end of the day, it is a style of programming. There is a time and place for early returns just like there’s a time and place for fanny packs(is there?).

It would be responsible to include a disclaimer. So here it is:

When you abuse the return statement by placing it in the middle of code, or, worse, a callback, you can create a hellish “Where’s Waldo?” debugging scenario. When your logic is bursting at the seams with complexity, so much so, that you need multiple returns to diffuse some of that complexity, then early returns become a crutch, rather than a tool. In that case, you may want to decouple your code, which is a nice way of telling you to nuke it.

Semantically, an early return should signify to the code reviewer that your first validation is make or break. The function cannot run without the condition being met. In that case, the early return reads more like a fail safe than clever coding.

At the end of the day, good style is in the eye of the beholder…for the most part.


<h2>Summary</h2>


We conquered `if/else if/else` statements, tackled `switch` statements, and untangled `while`, `do while`, and `for loops`. We also learned how to break loops and continue them. We even leanrned how to control flow with style. Next, we'll learn how a JavaScript program flows around functions.
