---
layout: post
title: JavaScript Functions
---
JavaScript Functions
==========




Without functions, there is no JavaScript, at least all the good parts of JavaScript that we know and love. A function has a parameter or parameters. We can name them whatever we like, just like variables. Though, we should think of parameters more like references rather than storage. We're telling the function that we're expecting some variable or data type to be plugged into this space by the user. We then operate on the parameter names within the body of the function.

More times than not, you'll want to make sure you return your expected result. Not doing so will produce `undefined` when you invoke the function. If you intend to use your function to set value, include the return keyword.


```javascript
function multiply(x, y){
  return x * y;
}

function // keyword for decleration
multiply // function name
(x,y)   // parameters
return x * y; // a return statement allows
              //the function to produce value

```

<h3> Return </h3>


The `return` statement can *return* any data type.

Numbers:
```javascript
return 2;
```
Strings:
```javascript
return "hello";
```
Null:
```javascript
return null;
```
Undefined:
```javascript
return undefined;
```
Arrays:
```javascript
return [1,2,3];
```
Objects:
```javascript
return {one: 1, two: 2, three: 3};
```
Functions:
```javascript
return function(){
  return "I'm in a function";
}
```

<h3>Invoking a function</h3>

You invoke a function by adding `()` to its name. If the function requires parameters, you must enter them or you'll get an error.

```javascript
function multiply(x, y){
  return x * y;
}
multiply(2,2); // 4
```
You can invoke a function before its declaration and it'll still work. This is called hoisting.

```javascript
multiply(2,2); // 4

function multiply(x, y){
  return x * y;
}
```
<h2>Function notations</h2>


When a landmark or a *thing* is significant in any human language, there's often more than one way to declare its name.

>Fun fact: In Classical Arabic, there are hundreds of ways to name a camel.

Similarly, functions are so important to JavaScript that there are numerous names for them depending on the context in which they're used.

<h3>Function Declaration</h3>

You have the tried and true <b>function declaration</b>:

```javascript
function greet(){
  return 'hello';
}

// we can the call or invoke this functions

greet(); // 'hello'

```
<h3>Function Expression</h3>
You also have a <b>function expression</b>. It's called a function expression because you're assigning a function to a variable:

```javascript
let greet = function(){
  return 'hello';
}

// we can still call or invoke this functions

greet(); // 'hello'

```
One important thing to note is that hoisting does not work with function expressions.

```javascript
greet(); // undefined

let greet = function(){
  return 'hello';
}
```
<h3>Anonymous Functions</h3>

The function keyword(`function()`) without a name after it is called an <b>anonymous function</b>. Es6 introduced a new way to write an anonymous function. Instead of using the function keyword, you can delete it and add the arrow operator `=>` to the parenthesis.

```javascript
let greet = ()=>{
  return 'hello';
}

```

For the most part, the difference in syntax was introduced to satisfy purists who are fond of writing minimal code. Though, the arrow function does introduce auto binding. Instead of getting overly technical, we'll show you what auto binding is later.

<b>Anonymous functions</b> are versatile. You can set them as a value to a key in an object literal:

```javascript
let person = {
  name: "Mark",
  greet: function(){
    return 'hello' + ' ' +  this.name;   
  }
}; // end of object literal

person.greet();
```
>Note: `this` refers to `person` within our anonymous function. We could have just as easily wrote `person.name`.

<h3>Callback Functions</h3>

Anonymous functions can also go in a parameter. Doing so turns the anonymous function into what's called a <b>callback</b>.

```javascript
//here's a function expression
let greet = (callback, times)=>{
  for(let cnt=0; cnt < times; cnt ++){
      console.log(callback()); //it doesn't return.
                              //This will cause a side effect
  }
}


//here's our anonymous func AKA callback
greet(()=>{return 'hello'}, 3);
//we could have written it like this:
greet(function(){return 'hello'}, 3);
```
>Note: Remember when we talked about the anatomy of a function? When you define a function, you create a mock up. The callback just takes advantage of that because we can wait for the function to arrive. We're telling the interpreter that we want to invoke the function when it arrives by attaching `()` to our parameter name.


<h3>Closures</h3>

A function within a function is called a <b>closure</b>:
```javascript
// We have two functions. One is named outie and the other is named closure *wink* *wink*
function outie(){
  // this is closure's first and only outer scope
  function closure(){
   // this is closure's local scope
  }
}
```
If you've been playing around with callbacks, you might have guessed correctly that a callback is also a closure. At some point during its existence, it gets called within another function.


<b>Context:</b>'
Now that we've started nesting functions, we should address context. Functions create their own context, which effects the `this` keyword, but if we wrote a closure within an anonymous function, `this` would refer to our nested function. Thus, we'd get undefined.

Here's an example:
```javascript
 let person = {
  name: "Mark",
  greet: function(){    
    return function(){
          return 'hello' + ' ' +  this.name;  
    }      
  }
}
// double invoke ()() can invoke a returned closure
person.greet()();// >'hello undefined'
```
To fix the problem, developers just set `this` to a variable to preserve the context. In other words, we're *binding* this. Starting to see what auto binding may entail?:

```javascript
//code excerpt
greet: function(){
  let self = this;   
  return function(){
        return 'hello' + ' ' +  self.name;  
  }      
}
//end of excerpt
```

An alternate solution is to explicitly call `bind(this)` on the closing bracket of a function.

```javascript
//code excerpt
greet: function(){
  return function(){
        return 'hello' + ' ' +  this.name;  
  }.bind(this)      
}
//end of excerpt
```
It looks ugly, but it works.

> Pro Tip: Remember the new `()=>` syntax? The example above gives a good example of why we need auto binding. Before, you had to remember to bind `this` in a variable like we had to do earlier. Now, you just use the new syntax and, wala!, you have a functioning `this` keyword. Try it out by rewriting the closure.

The final solution is to use the Es6 arrow function.

```javascript
//code excerpt
greet: function(){  
  return ()=>{
        return 'hello' + ' ' +  this.name;  
  }      
}
//end of excerpt
```

> Note: Using the arrow function on the outer anonymous function destroys context. Because the arrow function binds automatically, you will be binding `this` to a context outside of the `person` object. So, `this.person` would no longer work.


<h3>Selv Invoking Functions</h3>

A function that calls itself is called an <b>Immediately Invoked Function Expression(IIFE)</b>.

```javascript
(function(){
  return 'hello'; //'hello'
}());
```
You can still do anything that you can do with other functions. You can set parameters and use the "invoker" `()` to feed in data.
```javascript
(function(name){
  return name;   // 'hi'
}("hi"));
```

You can set an IIFE to a variable, but you have to declare the name. You don't have to invoke it though.

```javascript
var greet =
(function(name){
  return name;   
}("hi"));

greet // 'hi'
```

<h2>Function Mania</h2>


We can use IFFE's and closures, combined with anonymous functions, to create an android.
```javascript
//function expression
let android = (function(){
    //==private
    this.name = "Mark VI";
    //declaration
    function addStrings(){
       return "hello" + " " + this.name;
    }
    function setName(name){
      this.name = name;
    }
    //==public: we're just returning an object.
    return {  //anonymous functions
       setName:(name)=>{
          return setName(name);
        },    
        greet: ()=>{
            return addStrings();
        }
    }
}());//IIFE

android.setName("Raj");
android.greet(); //'Hello, I'm Raj'
```


The code above takes advantage of all that functions give us to produce a functioning object. It manages its own state, meaning that any changes we make will be saved. So, if we set a new name, and tell the android to greet us, it will greet us with that new name. That's some powerful stuff! We will learn more about object oriented programming in another chapter.

>Note: Oftentimes, developers wrap JavaScript code with an IFFE if they want their code to run without having to be triggered by an event.


<h2>Summary</h2>


It may be hard to keep track of all of these different type of functions, so let's list the different function types.

- Declared functions
- Anonymous functions
- Callbacks
- Closures
- Immediately Invoked Function Expressions


>Challenge: write a program that utilizes all of these different functions
