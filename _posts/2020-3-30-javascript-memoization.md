---
layout: post
title: JavaScript Memoization
description: Learn JavaScript memoization in 3 minutes.
tag: advanced
---

JavaScript Memoization
===========




There are several excellent articles that talk about the optimization technique called memoization. You can access them  [here](http://inlehmansterms.net/2015/03/01/javascript-memoization/)  and  [here](https://www.sitepoint.com/implementing-memoization-in-javascript/). What we’re going to do is give you a brief overview of what memoization is. We will go a bit further by performing a step by step analysis of what “memoizing”code is actually doing, line by line. By the end of the article, you will fully understand memoization.

<h3>Memoization in a Nutshell</h3>

Memoization is the programmatic practice of making long recursive/iterative functions run much faster.

How, you ask? By caching the values that the function returns after its initial execution.

When we input the same value into our memoized function, it returns the value stored in the cache instead of running the function again, thus boosting performance. No longer does your program have to recalculate every number to get a result.

Sounds awesome, right? Well, what’s even better is that it’s not hard to understand what a memoize function is doing once you break down the code.

Here’s an example of a basic  `memo`  function:

```javascript
function memo(func){
  var cache = {};
  return function(){
    var key = JSON.stringify(arguments);
    if (cache[key]){
      console.log(cache)
      return cache[key];
     }
    else{
      val = func.apply(null, arguments);
      cache[key] = val;
      return val;
   }
  }
}
```

# **Let’s start from the beginning…**

We’re returning what’s called an anonymous closure. Our anonymous closure is able to inherit any variable or, in this case, function passed into  `memo`. We can then play with the  [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)  that our passed-in function provides.

> Note:  So, if every function has an arguments object, why aren’t we inheriting the arguments object of  `memo`? That’s because, as a rule, closures do not inherit an outer function’s arguments object. We use this rule to our advantage in order to play with the function we want to memoize.

Let’s break down exactly what memoization is doing by looking at a very simple and impractical example. By the way, you should copy/paste this code, or any code for that matter, to really get a feel for how it works.

```javascript
/*

Closures cannot access the arguments object of the parent,
but, because functions are first class objects, we can pass a function as a parameter.

The closure can now access the arguments object of the function that is passesd as a parameter.

So, there is no confusion as to which arguments object we want the closure to access.

We're basically taking advantage of its limitations

*/
function demoMemo(func){
//we must return a function in order to keep state
//this will be more apparant in a recursive example
  return function () {
    console.log(func); // > function (num){num + num}
    console.log(arguments[0]); // > 1
  }
}

// Our function expression here calls demoMemo and passes it an anonymous function.
var adder = demoMemo(function(num){
  num + num;
});

//Once that is passed, as you can see, when we call our function expression,
//we have access to all the properties of the function we want to memoize
adder(1);
```
Let’s flesh this out a little more by looking at a snapshot of our real memo function:
```javascript
//Knowing that we have access to whatever

//the user inputs into our function expression, we then write...

return function(){
  var key = JSON.stringify(arguments);
  if (cash[key]){
    return cache[key];
   } 
  else{
  //apply() comes in handy here and will simply
  //return the value of the function it calls
    val = func.apply(this, arguments);
//then we set the value of the function to the key(argument).
//The next time the function runs,
//if the argument is the same, we simply return
//the value without having to have the function execute.
   cash[key] = val;
   return val;
    }
}

```
Now that we’ve broken down what a memo function is doing, let’s create a function expression and pass in a recursive Fibonacci function into  `memo` and see what happens.
```javascript
//Now we'll test our code!  
// =======TEST=======  
fib(10)//On the first try we need to load
//=> loading…
//=> loading…
//=> loading…
//=> loading…
//=> loading…
//=> 4 loadings later we get...//=> 89
// And on the second try…fib(10)//=> 89
//No loading! Yaay!
//The cool thing about memoizing the recursive Fibonacci algorithm is that once we make a call for the value of the nth number in the series, we are able to store all the previous numbers in the series.
//So if we try...  
fib(7) //=> 21  
//We don't have to recalculate anything.//And if we want to try fib(11)...  
fib(11)  
//loading...  
//=> 144  
//Our memoized recursive function already cached fib(1-10),so all it needed to do was to calculate the cached values.
 // This is what the cache now looks like:  
/*  
{ ‘{“0”:0}’: 1,  
‘{“0”:1}’: 1,  
‘{“0”:2}’: 2,  
‘{“0”:3}’: 3,  
‘{“0”:4}’: 5,  
‘{“0”:5}’: 8,  
‘{“0”:6}’: 13,  
‘{“0”:7}’: 21,  
‘{“0”:8}’: 34,  
‘{“0”:9}’: 55,  
‘{“0”:10}’: 89,  
‘{“0”:11}’: 144}  
*/
```

<h3>Conclusion</h3>

Memoization becomes demystified when you boil it down to key-value pairs. All we’re doing is creating an object, checking for existing values that match the user input, and storing new key-value pairs if they don’t exist in our object.

Of course, storing all this data means that we’re going to be using up memory.  **It’s best to implement memoization on functions that are pure and involve heavy, repetitive calculations.**

<h3> Bonus </h3>

Just for fun, here’s a functional version of our memoizer:

```javascript
// A more functional memoizer

//We can beef up our module by adding functions later

var Memoizer = (function(){
 //Private data
 var cache = {};

//named functions are awesome!

function cacher(func){
  return function(){
    var key = JSON.stringify(arguments);
    if(cache[key]){
      return cache[key];
    }
  else{
    val = func.apply(this, arguments);
    cache[key] = val;
    return val;
  }
 }
}

//Public data
return{
  memo: function(func){
  return cacher(func);
  }
}
})()

var fib = Memoizer.memo(function(n){
  if (n < 2){
    return 1;
  }else{
    return fib(n-2) + fib(n-1);
   }
});

```
