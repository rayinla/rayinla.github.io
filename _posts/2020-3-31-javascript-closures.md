---
layout: post
title: JavaScript Closures
tag: beginner
---

JavaScript Closures
============


When you’re first learning JavaScript, terms like “closures” may make the language appear mystical and hard to understand. But some of these terms are just sugary concoctions that give fanciful names to very simple concepts. If you’ve spent just a few minutes tinkering with JavaScript, you’ve probably used closures without knowing it. That’s because the JavaScript language depends on closures to create programs that are concise and efficient. By the end of this tutorial, you will gain a full understanding of closures.

<h3>What is a closure?</h3>

In order to really understand closures, it is helpful to know how scope works. We covered scope in a previous article, so we’ll quote it here:

> [I]f you declare a function within another function, you create what’s called a  **scope chain**. The outer parent cannot see the variables of its child(ren), but the child can see the variables of its parent(s). Confused? Think of a Matryoshka doll. Now imagine if these dolls were given life(scary thought). An outer doll wouldn’t be able to see the gruesome innards of an inner doll. The inner doll can see everything. Now that’s scope.

```javascript
// We have two functions. One is named outie and the other is named closure *wink* *wink*

//this is closure's global scope

function outie(){

// this is closure's first and only outer scope

function closure(){

// this is closure's local scope

}

}
```

We can conclude that the inner function has three  **scope chains**. The first chain allows the inner function to access its own variables. The second allows it to access the variables and parameters of the outer function. And the third allows it to access the global variables. Every time we add a function, we’re adding a new link to the chain.

By defining a function within another function, we create a  **closure**. Closures themselves can also take on the role of outer functions. Take this somewhat practical example of multiple closures:

```javascript
function sayMyName(firstName, middleName, lastName){ 

var praiseList = ["beautiful", "awesome", "splendid", "fantastic", "jaw-dropping"]; 
//this first closure called combineName() has access to the parameters 
//of the outer function and its variable 
function combineName(){ 
var min = 0; 
var max = praiseList.length - 1; 
//this second getRandomInt() closure has access to the variables in combineName() 
function getRandomInt(){ return Math.floor(Math.random() * (max - min) + min); } return "Your" + " " + praiseList[getRandomInt()] + " name is " + firstName + " " + middleName + " " + lastName; } return combineName();} sayMyName("Beyonce", "Giselle", "Knowles-Carter"); // Your beautiful/awesome/splendid... name is Beyonce Giselle Knowles-Carter
```
In this example, we have two closures.  `combineName()`  is a closure to the outer function of  `sayMyName()`.  `getRandomInt()`  serves as both a closure to  `combineName()`  and  `sayMyName()`. What this means is that  `combineName()`  has three scope chains while  `getRandomInt()`  has four scope chains. Every time we create a closure, one link is added to the scope chain. So,  `getRandomInt()`  can access the variables of  `combineName()`  and  `sayMyName()` .

> Note: As you can see from the example, we were able to “borrow” the parameters from sayMyName and use them in our first closure, all thanks to the trickle down effect scope chains have, which, *ahem*, is far more reliable than trickle down economics. One point to note, however, is that you cannot call an outer function’s  [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)  from within a closure.

<h3>Closures In Depth</h3>

We’ve briefly outlined what closures are. Now let’s go through some use cases and explore the deepest depths of closures.

**Closures are basically the walking dead.**  When a function returns, the idea is that all of the variables within that function should be non existent. Yet, closures still have access to any variables in their scope chains.

Here’s an example:
```javascript
function init(args){ 
var firstName = args.firstName; 
var lastName = args.lastName; function gerunding(action){ 
return firstName + " " + lastName + " " + "is" + " " + action; 
} 
return gerunding; 
} 
var data = {firstName: "George", lastName: "Rooney" }; 
var zombieOne = init(data); //when we initialize the outer function, it returns undefined. The outer function is dead, but.../* 20 lines of code later...*/
zombieOne("walking"); // George Rooney is walking

```
The reason why we can still access the name of this “zombie” isn’t due to any sci-fi magic, it’s because closures don’t store value. Values are static. Instead, they store references to values in their scope chains. The amazing thing is that if you were to change the value of a variable up in the scope chain before returning the closure, the same value used within the closure will then update. This phenomenon is called  **state,** which is the backbone of programming. We want to be able to create functions whose inner data lives on through the lifetime of our apps. When a user inputs data, we want that data to be updated.

We’ll show an example of how we can use closures to create a modular pattern by modifying our above code:

```javascript
var zombieOne = (function(){

//private variables

var firstName = "";

var lastName = "";

//private functions

function init(data){

firstName = data.firstName;

lastName = data.lastName;

}

function combineName(){

return firstName + " " + lastName;

}

function gerunding(action){

return firstName + " " + lastName + " " + "is" + " " + action;

}

//public functions

return {

getName: function(){

return combineName();

},

setName: function(data){

return init(data);

},

setAction: function(action){

return gerunding(action);

}

};

})();

var data = {firstName: "George", lastName: "Rooney" };

zombieOne.setName(data);

zombieOne.getName(); // "George Rooney"

zombieOne.setAction("walking");// "George Rooney is walking"
```

What we’ve created is an  [**anonymous closure**](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)  by  _enclosing_  our first function within parenthesis.

`(function(){…})();`

> Note: Anonymous closures or  **Instantly Invoked Function Expressions**  execute immediately and allow us to maintain state and manage privacy. Unlike other object oriented languages like C++ or Ruby, JavaScript is yet to implement any native private methods. There are several JavaScript  [developers](https://esdiscuss.org/topic/class-private-syntax-in-es6-was-es6-es7-es8-and-beyond-a-proposed-roadmap)  who, after tasting ES6’s new class keyword, are pining for private syntax. For now, we have to make do with closures to code private/public data.


Any function or variable within our anonymous closure is considered private. The closures within the anonymous wrapper after the  `return` statement have access to the private functions, but users cannot access the private functions outside of the module. The private data is effectively  _closed_ off by our anonymous closure, as most private things are.

<h3>Conclusion</h3>

Closures are a prime example of the flexibility of JavaScript’s functions. In just a few examples we’ve set functions to variables, returned functions, called anonymous functions, have used functions as keys, not to mention the fact that we self-invoked a function. All of these functional, acrobatic tricks all have terms that apply to them. Just remember that closures are those functions that are defined within another function.
