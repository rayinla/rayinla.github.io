---
layout: post
title: JavaScript Data Types
image: config.png
---


JavaScript Data Types
===========



Open up your Twitter or Instagram account and you're hit with a log in screen prompting you to enter your information. When you enter your username and password, you've just entered data. You fill out a survey, you like a post, you order ten fidget spinners on Amazon - all of that is data. 

In JavaScript, this data is divided into six types: Numbers, Strings, Boolean, Null, Undefined, Symbols

 <h2> Data Types </h2>

<h3> 1 ) Numbers: 101010 </h3> 

Numbers are exactly what you've known them to be all your life - 1, 50, 22.3, 5…Integers, decimals, fractions. 

JavaScript is real friendly when it comes to numbers, because you don't have to specify the type of number. We call this behavior <b>untyped</b>. JavaScript is untyped because determining whether a number is an integer or a decimal(float) is taken care of by the language's interpreter. 

Why don't you try entering `typeof 5;` into the editor and hit the run button. You should get `'number'`. Also, please mind the semicolon. They're like periods in English. Make sure to put them at the end of every statement or expression.

```javascript
typeof 5;
```


>Pro tip: `typeof 5` is a statement. You wrote JavaScript code and expected to get a value in return. That's what statements are all about. If you're getting `undefined` as a value, you most likely have an expression on your hands.

You can also try this cool tool:

```javascript
console.log(typeof 5);
```
>Pro tip: `console.log()` is a web tool that prints JavaScript code to a console. Every web browser has a console you can access. "Web tools" makeup what's called a Web API. It's much easier to think of API's as a set of tools that make your job a whole lot easier. No need to worry about opening a console here though. Lex will log the result for you.

There are also two special numbers that are worth mentioning: `Infinity` and `NaN`.

1.Infinity is the greatest numerical quantity. It is, quite simply, infinite.
```javascript
console.log(typeof Infinity); // > 'number'
console.log(typeof -Infinity); // > 'number'
console.log(1/ 0); // Infinity
```
2.NaN(Not a Number)is a error you'll get when you try to perform incompatible arithmetic operations on non-numbers
```javascript
console.log(typeof NaN); // > 'number'
console.log(1/ 0); // Infinity
```

<h3> 2) Strings: "Hello there" </h3>

Strings are simply fields of text. Even the words you're reading now form a string. To encase these words, we use quotes. Keep in mind that strings aren't limited to run-on sentences. 

In JavaScript, this is also a string: `"123";`

~~~javascript
typeof "123";// > 'string'
typeof "hello world"; // 'string'
~~~

Strings can be double qouted, single qouted, and backticked.

~~~javascript
 "hello world";
 'hello world';
 `hello world`;
~~~

Double and single qoutes may appear similar, but double qoutes are safer because they do a better job of delimiting words.

Take this example:
~~~javascript
 "I'm Sally"; // Correct
 'I'm Sally'; // incorrect
~~~

Backticks allow you to create multiple lines:

~~~javascript
 `My Amazing Poem:
  Sally sells
  sea shells
  by the sea shore`;
~~~

If you want to do the same with double or single qoutes, you will need to use an escape character `/n`
~~~javascript
 "My Amazing Poem:/nSally sells/nsea shells/nby the sea shore";
~~~

Backticks also allow for what's called <b>string interpolation</b>:
~~~javascript
let name = 'Ron';
`I am ${name}`; // > 'I am Ron'
~~~


If you want to get the same result with double or single qoutes, you will need to add the variable to the string. This is called <b>string concatenation</b>. We glue strings together with the plus operator.

~~~javascript
let name = 'Ron';
'I am' + name; // > 'I amRon'
'I am' + " " + name; // > 'I am Ron'
~~~


<h3> 3)  Boolean: True, False </h3>

Don't let the name throw you off. It's the namesake of the mathematician George Bool. Booleans only have two values: true and false.

```javascript
typeof true; // > 'boolean'
typeof false; // > 'boolean'
```

As you'll come to know, these are important data types when it comes to adding logic to our programs. With just those two values, you can create a complex system of loops and conditions.

But let's not get ahead of ourselves. We will explore the depths of conditions and loops another time.

<h3> 4) Null </h3>

Null means nothing. You can intentionally set null to  a variable if you're not expecting the variable to have a type or value.

```javascript
let empty = null;
```

<h3> 5) undefined </h3>

Undefined is not an error. It is a data type that simply states that a variable hasn't been stated.

```javascript
//this is an expression
let learning = 'cool' // > undefined;

//=============
//this is an expression
let learning = 'cool'
//this is a statement
learning; // > 'cool'

```
In the case of functions, undefined is returned if you don't explicitly use a return statement.

```javascript

function adder(){
  2 + 2;
}
adder(); // > undefined

//========
function adder(){
  return 2 + 2;
}
adder(); // > 4

```

<h3> 6) Symbols </h3>

The symbol type is the latest primitive type to enter the JavaScript language. To better understand symbols, we will need to explore JavaScript objects


Bonus data type
---------------
There are six "primitive" data types, but there's also an extra data type called object. This is the grand daddy of all data types. Quite literally. In fact, you can safely say that every primitive data type except null and undefined is also an object.

Here's the proof:

```javascript
 typeof(Number.prototype); // > 'object'
 typeof(String.prototype); // > 'object'
 typeof(Boolean.prototype); // > 'object'
 typeof(Symbol.prototype); // >'object'
 ```
What you're seeing are built-in objects with methods that allow you to do cool things to primitive data types like:

```javascript
"hello".toUpperCase(); // > "HELLO"
123.toString(); // > '123'
```

 What's up with the prototype? Hold on to your drink, because most, not all, objects are functions. Here's why:

 ```javascript
 /*
 See the uppercase? By convention, this is how
 you declare an object in JavaScript.
You can clearly see that it's still a function.
  */
function Number() {

}

typeof Number; // > 'function'

/*
By accessing the prototype, we're asking to see its parent.
*/
typeof Number.prototype; // >'object'

 ```
 Knowing all of this, we can conclude that in the beginning there was Object. And everything else in JavaScript is the offspring of Object.

 The more basic object is called an object literal which holds a collection of data. It's written like so:

```javascript
{siteName: "howtocodejs", url:"https://howtocodejs.com", description: "Learn JavaScript the Easy Way"};

```
 
There is much more we can say about objects. For now, let's move onto what makes all of this data worthwhile.


Operators
----------


What's the use of data if you can't do anything to it? That's where operators come in. Each data type (Numbers, Strings, Boolean) share a set of operators that you can use to come up with nifty solutions to problems.

Actually, if you've been coding along, you've been using a ninja operator all along.

If you guessed the `typeof` operator, you're correct. It evaluates a data's type. This type of operator is called a unary operator. Think uni, or *uno*, or one. It only operates on a single value. Operators that operate on two values are called binary operators.

```javascript
2 + 2; //  the plus operator is binary
-4; //  in this context, the minus operator is unary.
```


There are four important categories of operators that you'll use throughout your time as a JavaScript developer and they are

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
Comparison operators return boolean values(true or false). Without them, we wouldn't have all of the complex apps that are available to us. 

There's also a special triple equals `===`. This checks to make sure that the types are the same as well.

Try this out: `3 == '3';`. You got `true`, right? The fact that JavaScript ignored our stringed `'3'` can cause some unwanted bugs. To fix this, add another equals. Now you should get false. That's because triple equals also ensures that the types are exactly the same as well.

<b>Number:</b> `1 === 2;`

<b>String:</b> `'string' === 'string';`

<b>Boolean:</b> `false != true;`

<h4> Bonus: Comparison Operators and What If </h4>
Most comparison operators are used in conditional statements. So, let's mess around with what's called an if/else statement.

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

Let's look at the &&  and || operator at work.

```javascript
//&&
if(2==2&&3==3&&3==2){
 console.log('correctomundo');
}else {
console.log('wrooong');
}

//||

if(2==2||3==3||3==2){
 console.log('correctomundo');
}else {
console.log('wrooong');
}

```

Do you see what's happening? It's really cool. AND, starting from the left, is desperately looking for the first false value.

OR starts from the left and is satisfied with the first "truthy" value.

We can get really creative if we think of these operators as blind sniffers. Let's examine the OR operator because it's really dynamic.

Say we want to create a welcome box that prints the users social media name. Our imaginary website only accepts Twitter, Instagram, Facebook, and Whatsapp usernames.  

Problem is we're not sure which social media name the user will input. They may input one, two, or none at all.

We can solve this problem with the OR operator. Let's pretend a user just filled a form and now we're getting the response from an Ajax request.

```javascript

//This is a make believe user. Variables are being used for simplicity's sake
let instaName = null,
fbName = null,
twitterName = '@cachememesoutside',
whatsappName =  null;
defaultName = 'add a social name, plox'

let socialName = (instaName || fbName || twitterName || whatsappName || defaultName);  

console.log(socialName); // >'@cachememesoutside'

```
Null and OR are a potent combination. Null returns a falsey value, so the logical operator will keep sniffing for truthy values, which are values that are not empty in the case of our social names.

If you want to prove that null is false, try this:

```javascript
console.log(!!null) // > false
```
The `!!` not operator converts a data type to boolean.

The ! simply gives you the opposite boolean.

```javascript
!true; // >false
!false; // >true
```

<h4>Short Circuiting</h4>
We can also <b>short-circuit</b> the OR operator. Say we want to prompt the user to enter a social name or Else!!! We can try this.

```javascript
let instaName = null,
fbName = null,
twitterName = null,
whatsappName =  null,
errorMessage;


//socialName will be null
let socialName = (instaName || fbName || twitterName || whatsappName );

//you must wrap the right side of the OR operator
socialName || (errorMessage = "put a darn social name in, man");

console.log(errorMessage); // > 'put a darn social name in, man'
```
Short circuiting means we find the shortest possible path towards a value. The error message never has to be triggered if the left side is always true. If the users of our website always enter at least one social name, our error message will always be short circuited.



Summary
--------

We covered...

1) Six Primitive Data Types: Strings, Numbers, Booleans, Symbols, Undefined, Null

2) One extra data type: Object

3)Four operators: Arithmetic: `+,-,/...`, Assignment: `=, +=,-=...`, Comparison: `<, >=, != ...`, Logical:` &&, ||, !`


<h3>Challenge:</h3>


 Angela, a fictional co-worker, peered over to look at our code, saying that there's another way of writing that short-circuit. We can use a ternary operator.

 She showed us how to use it:

 ```javascript
 (true ? 'true':'false'); // > 'true'
 (false ? 'true':'false');// > 'false'
 ```   

>TODO: Try rewriting the short-circuit expression. If there is a social name, we should congratulate the user. If there isn't, perhaps we shouldn't yell at them. Write a clear error message that tells the user what you expect them to do.

 ```javascript
 let instaName = null,
 fbName = null,
 twitterName = null,
 whatsappName =  null,
 errorMessage;

 let socialName = (instaName || fbName || twitterName || whatsappName );

 socialName || (errorMessage = "put a darn social name in, man");  //Rewrite me!

 ```
