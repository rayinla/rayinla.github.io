---
layout: post
title: JavaScript Variables
image: config.png
---


JavaScript Variables
===========

Welcome, Coders!
------------------------

If you've ever had the pleasure(or displeasure) of sitting through an Algebra 1 class, you've probably heard about variables. You know, x + 4 = 6 and all that good stuff. Don't worry. JavaScript variables are much less scarier. You get to declare them so that you know exactly what they are. And, for the love of all that's holy, don't name your variables x or y or z. Give them reader-friendly names so that you're not staring at a quadratic equation by the time you're finished coding. 

First, before we start messing around with variables and learning what variable declaration even means, let's learn to need them. By that I mean let's get a little cozy with data types and  operators.

Data Types
------------------------

Open up your Twitter or Instagram account and you're hit with a log in screen prompting you to enter your information. When you enter your username and password, you've just entered data. You fill out a survey, you like a post, you order ten fidget spinners on Amazon - all of that is data. 

In JavaScript, this data is divided into three groups:

<h3> 1 ) Numbers: 101010 </h3> 

Numbers are exactly what you've known them to be all your life - 1, 50, 22.3, 5…Integers, decimals, fractions. 

JavaScript is real friendly when it comes to numbers, because you don't have to specify the type of number. We call this behavior <b>untyped</b>. JavaScript is untyped because determining whether a number is an integer or a decimal(float) is taken care of by the language's interpreter. 

Why don't you try entering `typeof 5;` into the editor and hit the run button. You should get `'number'`. Also, please mind the semicolon. They're like periods in English. Make sure to put them at the end of every statement or expression.


>Pro tip: `typeof 5` is a statement. You wrote JavaScript code and expected to get a value in return. That's what statements are all about. If you're getting `undefined` as a value, you most likely have an expression on your hands.

You can also try this cool tool:

```javascript
console.log(typeof 5);
```
>Pro tip: `console.log()` is a web tool that prints JavaScript code to a console. Every web browser has a console you can access. "Web tools" makeup what's called a Web API. It's much easier to think of API's as a set of tools that make your job a whole lot easier. No need to worry about opening a console here though. Lex will log the result for you.

<h3> 2) Strings: "Hello there" </h3>

Strings are simply fields of text. Even the words you're reading now form a string. To encase these words, we use quotes. Keep in mind that strings aren't limited to run-on sentences. 

In JavaScript, this is also a string: `"123";`

~~~javascript
typeof "123";// > 'string'
typeof "hello world"; // 'string'
~~~

You can probably guess by now that your passwords are stringy bytes of data. 

<h3> 3)  Boolean: True, False </h3>

Don't let the name throw you off. It's the namesake of the mathematician George Bool. Booleans only have two values: true and false.

```javascript
typeof true; // > 'boolean'
typeof false; // > 'boolean'
```

As you'll come to know, these are important values when it comes to adding logic to our programs. With just those two values, you can create a complex system of loops and conditions.

But let's not get ahead of ourselves. We will explore the depths of conditions and loops another time.
 
For now, let's move onto what makes all of this data worthwhile.


Operators
----------


What's the use of data if you can't do anything to it? That's where operators come in. Each data type (Numbers, Strings, Boolean) share a set of operators that you can use to come up with nifty solutions to problems. There are four important categories of operators that you'll use throughout your time as a JavaScript developer and they are

<h3> 1) Arithmetic Operators </h3>


<h4>Addition(+) -</h4>

<b>Number:</b>
```javascript
1234 + 4579; // > 5813
```
<b>String: </b>
```javascript
"hello" + "Jerry"; // > 'helloJerry'
```

You can actually add strings. There's a fancy term for this called string concatenation. If you tried this in the code editor, you probably noticed how the two strings glob together. We can solve this problem by adding an empty string in between.
```javascript
"hello" + " " + "Jerry"; // > 'hello Jerry'
```

<b>Boolean:</b>
```javascript
true + false; // > 1
```

Performing arithmetic operations on boolean values actually returns a value. In this case, the value 1 isn't just any ordinary 1. It's a bitwise 1. In the language of computers, this translates to true. So, we can conclude that true plus false equals true. 

Why is that so? You'll understand once we turn true and false into what our computer actually sees.

```javascript
//Beep boop bop...
true: 1
false: 0

result:1 + 0 or 0 + 1 = 1
```

<h4>Subtraction(-) - </h4>

<b>Number:</b>`1234 - 1234;`

<b>String:</b> `NaN`

> Note: NaN(Not a Number) is the error you'll get when you try to subtract String values.

<b>Boolean:</b> `true - false; ` or `false - true;`

<h4>Division(/) - </h4>
<b>Number:</b>`1234 / 1234;`

<b>String:</b> `NaN`

<b>Boolean:</b> `true / false;` or `false/true;`


<h4>Multiplication(\*\) - </h4>

<b>Number:</b>`1234 * 1234;`

<b>String:</b> `NaN`

<b>Boolean:</b> `true * false;` or `false * true;`


<h4>Modulo(%) - </h4>

This cool operator tells us the remainder of a division of two values.

<b>Number:</b> `10%3;`

<b>String:</b> `NaN`

<b>Boolean:</b> `true % false;` or `false % true;`


<h4>Increment(++) - </h4>

`++` is a fancy way to say add 1 to any value. It matters where you put the incrementer. Oh, and by the way, we need variables now. JavaScript's interpreter can't read `++10` if 10 is not saved inside a variable. why? Because the plus, plus operator is what we call syntactic sugar. It's something that was created  to make life easier for developers, because it turns out we're pretty lazy. Instead of saying 10 + 1, we get to forgo adding the 1. Since plus, plus is technically not a real arithmetic operator, you need to define a variable so that you won't get errors.

Before we start our lesson on variables, try playing around with them. Type this into the code editor:


```javascript
var cookies = 5;
console.log(cookies++);// > 5
console.log(++cookies);// > 7
```


>Pro tip: `var cookies = 5;` is called an expression. You defined what value cookie has but you didn't ask for its value. As you learned earlier, `cookies;` would be a statement.



So…why are we not getting the values we expect???

Well, writing the variable before `++` gives us the original value before it can be incremented and vice versa.

Think of it this way: we asked the baker for 5 cookies before he knew we wanted to add one more to the order(cookies)(++).

We receive a receipt saying we ordered five, but when we ask for one more, the baker runs back to get us one more(so, we have 6 cookies now).

The baker returns, but we ask for one more again(++)(cookies).

Finally, when we ask for our cookies, our total is 7 cookies.

JavaScript's interpreter is that poor baker when it comes to incrementing and decrementing.

<h4>decrement(- -) - </h4>

<b>Number:</b> `-- number`

<b>String:</b> `NaN`

<b>Boolean:</b> `--true`

<h3>2) Assignment Operators</h3>
<h4>Equals(=)</h4>
```javascript
var favoriteSoda = 'Coke';
```
Here's another brief glimpse at a variable in action. The equals sign, in this case, is not the same as the equal sign you use in math. You see now that there's a reason we use double equals in comparison operators. The single equals simply means that you want to assign a particular data type to a variable name you made up. The operator used is called an assignment operator.


<h4>Plus Equals(+=)</h4>

It turns out programmers are lazier than you thought. Yes, there are more arithmetic shortcuts.

Say you have `var score = 5;` and, instead of incrementing score by 1, you want to increment it by 6.

Normally you'd write, `score = score + 6;`

With Plus Equals(+=) you simply have to write it as, `score += 6;`

Why don't you try it out with the different arithmetic operators?

```javascript
score *= 6;
score -= 6;
score /= 6;
```

<h3>3) Comparison Operators</h3>

```javascript
//this isn't code =)
equals: ==, 
not equal: !=,
greater: >,
less: <,
greater than or equal: >=,
less than or equal: <=,
```
Comparison operators return true or false. Without them, we wouldn't have all of the complex apps that are available to us. 

There's also a special triple equals `===`. This checks to make sure that the types are the same as well.

Try this out: `3 == '3';`. You got `true`, right? The fact that JavaScript ignored our stringed `'3'` can cause some unwanted bugs. To fix this, add another equals. Now you should get false. That's because triple equals also ensures that the types are exactly the same as well.

<b>Number:</b> `1 === 2;`

<b>String:</b> `'string' === 'string';`

<b>Boolean:</b> `false != true;`

<h4> Bonus: Comparison Operators and What If </h4>
Okay, let's play around some more by using what's called an if/else statement.

```javascript
if('you feel overwhelmed by this new topic'){
 'Do not worry. Sometimes the best way to learn is to try and fail'
}else {
 "Let's get this show on the road!"
}
```

Try this real if/else statement instead.

```javascript
if(2==3){
 console.log('correctomundo');
}else {
 console.log('wrooong');
}
```
>Note: the end of if statements don't receive semi-colons.

> Pro tip: Exclude semicolons from any statements or expressions ending in a bracket.
Be sure to use different data types in your if/else statement. You can even play around with all of the operators you've learned so far.

<h3>4) Logical Operators</h3>

<h4> &&(And), ||(Or), !(Not) </h4>

Logical operators allows us to add complexity to our conditional statements. Practically, if you want maximum control over a condition, you'd use && because all of the conditions must be met in order to be true. Conversely, if you want the condition to be more inclusive, you'd use logical OR because only one condition has to be true to get a return value of true.

```javascript
if(2==2&&3==3&&3==2){
 console.log('correctomundo');
}else {
console.log('wrooong');
}
```



Variables, Finally!
-------------------

You were introduced to variables  a bit prematurely. Even then, you saw how badly we needed a variable in order to get the increment and decrement operator working. 

Now, let's think of numbers, strings, and booleans as Snap chat photos that ghost away after a short period. They don't stay around long enough to be useful. If you want to use the same data, you'd have to re-type it somewhere else in your JavaScript file.

Imagine having to write this formula over and over again: `1/2(60 * 120);`

Or this really long string: `"superkalafragilisticespialadocious";`.

What a variable does is allow us to save data so that we can use it again. 

Let's declare two variables
```javascript
var triangleArea, poppinsQoute;
```
Now for some takeaways:

The `var` keyword creates what's called a global variable. It's like taking a shower in public. Everyone can see you. In JavaScript, we have blocks, like neighborhood blocks. Within our if/else statements, we wrote a block of code that only ran based on certain conditions. `var triangleArea, poppinsQoute;` can be accessed within that block, because we declared them in a global scope.

Think of scope as perspective. From the perspective of the outside, we can't always see what is inside someone's house. But from the inside, we can see everything that's outside. 

We shouldn't be able to look inside an if/else statement and see its local variables. Local variables are variables that are declared within a block.
pro tip: any code within curly braces form a block.

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

Well, the problem with the `var` keyword is that it loves to expose itself in public. Even if it's defined within a block, it'll still want to be seen by everyone. The only thing that can tame it is a function.
```javascript
function test(){
  var number = 3;
}
console.log(number); // number is not defined
```
>Pro tip: Being able to read and understand errors is crucial to being able to debug your JavaScript applications. In our case, a <b>ReferenceError</b> occurs when we try to use a variable that hasn't been declared. If we try to use a variable that is out of scope, we also get a ReferenceError.


We will get into functions another time, but all you need to know for now is that functions create their own scope. They're like highly secured mansions.
That's all fine and dandy that functions are so secure, but how do I secure an if/else statement? 

There is a new way to declare variables as of es6.  Every so often Ecma International comes up with new ways for us to code in JavaScript. What they've come up with to solve this issue is the `let` keyword.

Let's use it!

```javascript
if(3===3){
 let number = 3;
}
console.log(number); // > number is not defined
```

Great. We got an error! Now we truly have global and local variables. 

Going back to our original variable declarations, `var triangleArea, poppinsQoute;`, you can see that we are able to declare multiple variables at the same time by separating them with a comma. Also, look at how the second word in the variable name starts off with a capitalized letter. This convention is called camel case. It's good to stick to this convention so that your code is legible to you and to others that might look at your code one day. 


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

Arrays are a collection of data. More on them some athor time.

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
