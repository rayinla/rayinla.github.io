---
layout: post
title: Variables
image: config.png
---

Variables
==========


If you've ever had the pleasure(or displeasure) of sitting through an Algebra 1 class, you've probably heard about variables. You know, x + 4 = 6 and all that good stuff. Don't worry. JavaScript variables are much less scarier. You get to declare them so that you know exactly what they are. And, for the love of all that's holy, don't name your variables x or y or z. Give them reader-friendly names so that you're not staring at a quadratic equation by the time you're finished coding. 


Let's think of numbers, strings, and booleans as Snap chat photos that ghost away after a short period. They don't stay around long enough to be useful. If you want to use the same data, you'd have to re-type it somewhere else in your JavaScript file.

Imagine having to write this formula over and over again: `1/2(60 * 120);`

Or this really long string: `"superkalafragilisticespialadocious";`.

What a variable does is allow us to save data so that we can use it again. 

Let's declare two variables
```javascript
var triangleArea, poppinsQoute;
```
Now for some takeaways:

The `var` keyword creates what's called a global variable. It's like taking a shower in public. Everyone can see you. In JavaScript, we have blocks, like neighborhood blocks.

They often look like this:

```javascript
// brackets enclose the block
{
  //...code goes here
}


if(true){
  // execute code in this block...
}

```

 Within an if statement, `var triangleArea;` and `var poppinsQoute;` can be accessed within the if statement's block, because we declared them in a global scope.

Think of scope as perspective. From the perspective of the outside, we can't always see what is inside someone's house. But from the inside, we can see everything that's outside. 

We shouldn't be able to look inside an if statement and see its local variables. Local variables are variables that are declared within a block.


```javascript
if(3==3){
 var number = 3;
}
```

>Note: In this example, we've declared and initialized our variable at the same time.

Remember what we discussed about global and local variables. You're probably guessing that if we were to use this variable outside of the `if` block, we should get an error.

```javascript
if(3===3){
 var number = 3;
}

console.log(number); // > 3
```

Wait…we were still able to access the variable outside of the block. Did we just acquire X-Ray vision? So all this talk about local and global variables must be a lie then, right? 

Well, the problem with the `var` keyword is that it loves to expose itself to the global scope. Even if it's defined within a block, it'll still want to be seen by everyone. The only thing that can tame it is a function.
```javascript
function test(){
  var number = 3;
}
console.log(number); // number is not defined
```
>Pro tip: Being able to read and understand errors is crucial to being able to debug your JavaScript applications. In our case, a <b>ReferenceError</b> occurs when we try to use a variable that hasn't been declared. If we try to use a variable that is out of scope, we also get a ReferenceError.


We will get into functions another time, but all you need to know for now is that functions create their own scope. They're like highly secured mansions.

That's all fine and dandy that functions are so secure, but how do I secure an if statement? 

There is a new way to declare variables as of es6. Every so often ECMA International comes up with new ways for us to code in JavaScript. What they've come up with to solve this issue is the `let` keyword.

Let's use it!

```javascript
if(3===3){
 let number = 3;
}
console.log(number); // > number is not defined
```

Great. We got an error! Now we truly have global and local variables. 

Going back to our original variable declarations, `var triangleArea, poppinsQoute;`, you can see that we are able to declare multiple variables at the same time by separating them with a comma. Also, look at how the second word in the variable name starts off with a capitalized letter. This convention is called <b>camel case</b>. It's good to stick to this convention so that your code is legible to you and to others that might look at your code one day. 


<h3> Assignment </h3>

You can *initialize* a variable by assigning data to it.

```javascript
let poppinsQoute = "superkalafragilisticespialadocious";

console.log(poppinsQoute); // > "superkalafragilisticespialadocious"
```

You can also re-assign data to the same variable. This will overwrite the previous data.

```javascript
let poppinsQoute = "superkalafragilisticespialadocious";

poppinsQoute = "Mary Poppins, practically perfect in every way.";

console.log(poppinsQoute); // > "Mary Poppins, practically perfect in every way.";
```


<h3>Const: A constant friend </h3>

The `const` keword is yet another way to declare a variable. You would use this keyword if you wanted to tell yourself and other developers that this variable should not change. Perhaps we should redeclare our `triangleArea` variable.

```javascript
const TRIANGLE_AREA = 1/2(60 * 120);
//If we try to re-assign it, we'll get an error
TRIANGLE_AREA = 1/2(60 * 180); // > Syntax Error
);

```

You cannot re-assign data to a constant. The convention is to use all caps so that 500 lines down, someone else working on the same project will know that your variable is a constant.

The Variable Warehouse
----------------------

We've messed around with variables a little, but we haven't pushed them to the limit. Let's see what we can put inside of a variable.

<h3>Numerical statements</h3>
```javascript
let triangleArea = 1/2(60 * 120);
```

<h3>Strings</h3>
```javascript
let poppinsQoute = "superkalafragilisticespialadocious";
```

<h3>Boolean</h3>
```javascript
let true_ = true;
```

Wait. Why the underscore? See, you can't name a variable anything that is already named by those who've designed the language. These untouchable names include keywords and reserved words. Also, make sure that you don't start your variable names with numbers: `123true`.
 
<h3>Logical statements</h3>
```javascript
let check = (2==2&&3==3&&4==4);
```
The parenthesis is there for readability. You can plug this right into your if statement and it'll work beautifully.

```javascript
if(check){
 console.log("true");
}
```
>Pro tip: I did not have to type `check === true` because the if statement automatically checks for true or false.

<h3>Functions</h3>

~~~javascript
var myFunction = function(){
  return 'hello';
}
~~~
Functions can also be assigned to variables. These functions are called anonymous functions because they aren't named.

<h3>Arrays</h3>
```javascript
let myArray = [1,3,4,5];
```

Arrays are a collection of data. 

<h3>Objects</h3>

```javascript
let myObject = {me: "too", save: "me"};
```

Objects also hold a collection of data. Actually, everything in JavaScript is an object. Yep, even data types.


<h3> Null</h3>
```javascript
let empty = null;
```

Null means nothing. You can intentionally set null to  a variable if you're not expecting the variable to have a type or value.

<h3>Other variables</h3>
```javascript
let oldVariable = 25;
let newVariable = oldVariable * 2;
```

<h3>Multiple variables!</h3>
```javascript
var varOne = varTwo = varThree = 1;
```

Don't try this one at home, because it has unwanted side effects. Variable assignment works from right to left. So in order for `varOne` to finally receive value, the other two variables are pushed to the global scope automatically. This means even functions won't recognize `varTwo` and `varThree` as local variables. This is called leaking and is a pretty big no no.


Closing Note
------------

Variables are here to stay, so make sure you get into the habit of using them. Whenever you find yourself using the same data type repeatedly, try sticking it into a variable. You'll be happy you did.


>Challenge: Write a function that return a variable. Don't be afraid to ask Google for anything.
