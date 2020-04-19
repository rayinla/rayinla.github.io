---
layout: post
title: JavaScript This and Bind
description: Learn how JavaScript this and JavaScript bind keywords interact with oneanother to provide context for your variables. And learn how the JavaScript this keyword functions in ES6. 
tag: beginner
---
JavaScript This and Bind
==========

<h3> TL;DR</h3>

Declared functions are assigned a global context if they aren’t declared within the context of an object. So when we want our closure (inner function) to refer to one of our parent objects, we either have to preserve the value of the object or bind the object to the function.

<h3>Intro</h3>

If you’ve ever manipulated the DOM in JavaScript, you’ve probably come across the contextual  **this** bug. You’re coding up an amazing click event, slamming the keys and feeling like a code ninja. You go to test your code in the browser and nothing works.  `this`  is undefined apparently. You realize that the  **this** keyword in your  `makeButtonLightUp()`  function is referring to the local  **this** rather than the  **this** of your outer  `onclick()`  function. You grumble because you know the solution, and you know it’s hacky.

This is the struggle of the everyday JavaScript coder. We're going to start our deep dive into JavaScript functions by dealing with this tricky topic before moving onto something fun, like building a game. 

<h3>Understanding this and bind</h3>

`var that = this;`

Alternatively, you might call  `.bind()`  on your your function just to keep things interesting. Both solutions work, but why do they work and why do we have to implement them?

This answer requires knowledge of exactly what scope and context means in JavaScript. Pull up a chair and grab some popcorn. Things are about to get real interesting.

**Note:** The use of  `that`  as a variable is just a convention and not a rule. You can just as easily name the variable  `boogabooga`.

<h3>Context vs Scope.</h3>

The terms scope and context at first glance just seem like synonyms and may leave you scratching your head when asked to differentiate the two. Both effect the behavior of your code in different ways. Simply put,  scope refers to the viewability of variables and context refers to the accessibility of objects within a function.The confusion often lies in the relationship between scope and context. Let’s break them down further.

Each function you create has its own scope. When you declare a variable with a keyword like  `var`, that variable cannot be seen outside the scope of that function. But, if you declare a function within another function, you create what’s called a  **scope chain**. The outer parent cannot see the variables of its child(ren), but the child can see the variables of its parent(s). Confused? Think of a Matryoshka doll. Now imagine if these dolls were given life(scary thought). An outer doll wouldn’t be able to see the gruesome innards of an inner doll. The inner doll can see everything. Now that’s scope.

Here’s a code example:

```javascript
function firstFunc(){
  var firstVar = 2;
  firstVar += secondVar; // secondVar is undefined because scope doesn’t look down
  function secondFunc(){
    var secondVar = 5;
  }
}
```

In the case of our  `this`  dilemma, think context, not scope. Context is the object that a function, having been executed within said object, has access to. Even nested functions will still point to the parent object. The keyword often associated with context is  **this**.

**Context**

To better understand context, let’s imagine a principal’s office. There are three children sitting in chairs and a scowling teacher, without pointing or gesturing, tells the principle, “One of them threw a pencil at a student of mine.”

The principal answers, “Which one?” Because the context is global. He cannot properly execute his punishment function because the object is undefined

“This one.” The teacher points at a freckled student.

The student is the object to which her  **this** refers to. He can now execute his function on the student and has access to the student’s attributes.

Now, let’s imagine that this principle now wants to execute a new function within the  `dollOutPunishment()`  function called  `callParent()`. Let’s also imagine that his mind cannot keep state, or, in other words, that he loses his memory after each function declaration and can only remember the global context of three boys. How would he be able to remember which child the teacher pointed out?

He’d have to preserve that name in a variable in order to keep track of the proper context.

 <h3>So, How Does “This” Work?</h3>

Keeping this example in mind, let’s look at ECMAScript’s definition of  `this`

> The  `this`  keyword evaluates to the value of the  `ThisBinding`  of the current execution context.

ThisBinding is used by JavaScript’s interpreter to keep track of context. If you declare a function with what is called a  _BindingIdentifier(ex:_ `function  **example**(){…}`), a function environment is created and is given a  **this**  binding by default. If the internal state called[[ThisValue]] is null or undefined, **this**  is set to the global object.

We have to understand that all functions return undefined as a value. So, our  **this**  keyword will point to the global scope.

> _“that” is often a nemesis and it has everything to do with context, not scope._

You might be wondering, then why does  **this**  work beautifully in objects literals? For example, if we create an object literal called  `myHouse`, we can expect  `this.myHouse`  to refer to our house, and it will:
```javascript
var myHouse = {
  neighborhood: "Cherry Wood",
  address: "5 Premium Park",
  city: "Rolly",
  state: "NC",
  printInfo(){ 
    // 'this' refers to the object we created. 
    //'this' is easy to conceptualize here because... 
    //we have manually created an object that we can see
    return this.neighborhood + "," + this.address + "," + this.city + "," + this.state
 }
}
myHouse.printInfo() // >> "Cherry Wood,5 Premium Park,Rolly,NC"
```

The problem comes when we want to manipulate the DOM. The DOM is an acronym for Document  _Object_  Model, which means we’re dealing with a tree of objects with a starting HTMLDocument node.

We are not instantiating new objects that will then be bound to a  **this** keyword. We are using existing objects, accessing one of its many methods, and writing an anonymous function that inherits the [[ThisValue]] of the object. The moment we declare a _BindingIdentifier_  within our anonymous function, our context is lost and must be regained.
```javascript
$(document).ready(function(){
   //It is important to notice that 'button' is a DOM object with various methods
  $('button').on('click', function(){
     //We must preserve the button's context
     var that = this;
     bluezy();
     function bluezy(){
       //We're saying, "I want to do fun things with <<that>> button object, 
      //not <<this>> window object you keep giving me
       $(that).css("background-color", "blue"); 
        console.log(this); // >> Window
        console.log(that);// >> <button>
     }   
  });  
});
```
<h3>What is binding?</h3>

Let’s recall our stateless principal and how he had to preserve state in order to keep track of context. By assigning  **this** to  a variable we are saving a static copy of [[ThisValue]].

We could have also preserved our  **this** value using  `bind()`. bind() is an exotic built-in JavaScript function(according to EcmaScript 2017) that has an internal [[Call]] method that takes a [[boundThis]](an object you want to bind to the function) and optional arguments. It then sets the function object’s currently undefined  **this**  value to the value of the bound  **this.** So, basically we forcefully tie up our object and throw it at the feet of our function saying, “Hey, use  **this** instead**.”**

The most common use of  `bind()`  involves adding an object as our first and only argument:
```javascript
$(document).ready(function(){
   //It is important to notice that 'button' is a DOM object with various methods
  $('button').on('click', function(){
     //We must preserve the button's context
     bluezy();
     function bluezy(){
       //We're saying, "I want to do fun things with <<that>> button object, 
      //not <<this>> window object you keep giving me
       $(this).css("background-color", "blue"); 
     }.bind(this)   
  });  
});
```
We’ve wrapped  `bluezy()`  with the bind function to define the context we want our function to work with. Because we’re working with the DOM, we use  **this**  instead of referring to an actual object name.

<h3>Auto Binding</h3>

When we brushed over functions, we mentioned the arrow function `()=>{}`. See, that little thing does all that hard work for you through auto binding. But it's always good to know what happens under the hood. That arrow operator is what we call syntactic sugar. It's pretty sweet to not have to keep binding.

Here's the same code re-written with the ES6 arrow function:

```javascript
$(document).ready(function(){
   //It is important to notice that 'button' is a DOM object with various methods
  $('button').on('click', function(){
     //We must preserve the button's context
  
     let bluezy = ()=>{
       //We're saying, "I want to do fun things with <<that>> button object, 
      //not <<this>> window object you keep giving me
       $(this).css("background-color", "blue"); 
     }   
     bluezy();
  });  
});
```

We can't use the arrow function all the time, because the arrow function is also an anonymous function. Anonymous functions have to be assigned to a variable. There are downsides to assigning a function to a variable.

Notice how the function call, `bluezy()`, had to be moved under the arrow function; we lose the ability to "hoist" function calls when we use the arrow function. More on hoisting later.

It's also important to note that over using arrow functions can lead to code that's hard to read. 

<h3>Takeaway</h3>
"This" concept may seem tricky at first, but when you practise event based programming, you'll slowly begin to become familiar with the quirkiness of `this`. But before you do that, why don't we familiarize ourselves with jQuery by building a game?
