---
layout: post
title: JavaScript Hoisting
image: config.png
---

JavaScript Hoisting
===========


We've mentioned hoisting before when talking about functions. You probably scratched your head. Hoisting is one of those spooky JavaScript quirks. Since we're all about having fun here, why don't we let Rick from Rick and Morty explain it to you. 

>Note: this is fanfiction and not sponsored in any way by Rick&Morty.

<h3>And...action!</h3>

Morty: Here’s a question I’d like answered. Why does this work? What is this Jedi nonsense? Doesn't the interpreter read code like a printer?
```javascript
sayMyNameSayMyName('Morty'); // 'I said your name, Morty.'  
function sayMyNameSayMyName(name){  
   return `I said your name,${name}.`;  
}
```

Rick: Hoisting.

Morty: Yeah, yeah, but what the heck is hoisting exactly?

Rick:Here goes.  _ahem_  Declarations, whether they are a variable or function, are judo lifted up to the top of your program.

Morty: Okay, that’s digestible. Sort of. But wait…so you’re telling me that this can’t be hoisted with the Force?
```javascript
sayMyNameSayMyName('Morty'); // TypeError: undefined is not a function 

var sayMyNameSayMyName = function(name){  
   return `I said your name,${name}.`;  
}
```
Rick: Well, you see, declarations get special treatment. Assignments are second class chumps. They don’t get the privilege of being hoisted into nirvana.

Morty:But why? Isn't that...racist?

Rick:It's called classist, Morty. Get it right before you get us cancelled. Look, the execution context is to blame, not their poverty.

Morty:Execution what?

Rick: Every line of code has a context. There are two key contexts to keep in mind. You have the global and the function context. It looks like this:

```javascript
/*Global context--woohooo I'm freee*/

two(); // 2

function two(){  
 /*Function context  
   ========  
*/ return 2; 
}
```

Morty: Wait. Context is the same as scope, right?

Rick:  _Sigh_

You have much to learn, young Jedi.You're forcing me to go into a really long monologue. Not cool. No, scope refers to access. If a variable is declared in a global scope, it can be accessed by functions or blocks. Functions are unicorns because they create their own scope. But that differs from context.

You see, we can all say that we are from planet Earth. That is our global context. But we cannot all say that we are from Washington DC. That is the function context. In JavaScript, you can determine the current context with the  `this`  keyword.


Morty: So what does context have to do with hoisting?


Rick: Yes, so…

First, imagine that the interpreter is an alien who found your signal and is now looking for you. The alien would start on planet earth, our global context. There are seven continents on Earth. It might start in North America.


Morty: Why?


Rick: It loves North America’s bizarre geometry.

Anyway, it will then create a scope chain containing your possible country, then your state, then your city, then your street.

Now, let’s try to look within the mind of JavaScript’s interpreter. When the interpreter reads code, it automatically enters the global context.

The interpreter does something similar to the alien’s search tactics by first looking for a function invocation(the signal). It won’t execute it until it can create the context(find your info).

There are two stages the interpreter goes through to accomplish its mission: the creation stage and the execution stage.

<h3> 1) Buckle up, Morty, we’re entering the creation stage.</h3>

A function can have multiple functions within it, so the interpreter will initialize a scope chain(country,state,city,street). It will create a  `variable object`  to hold all sorts of arguments, parameters, and function/variable declarations. It then creates  `this`  to store the current context.

This is an oversimplification. We’ll simplify it further by only concerning ourselves with how the interpreter deals with function declarations versus variable declarations.

*Function:*

When the interpreter’s nose bumps against a  `function`  keyword, it looks for the name. It then stores a reference to that function name in variables object.

*Variable:*

When the interpreter’s nose bumps against a  `var`,  `let`, or any keyword associated with variables, it first stores the variable name in variable objects. Then it automatically initializes it with undefined.

Can you start to see how assigning a function to a variable and hoping it will be hoisted does not work? When we invoke  `myNameIs(name)`, the interpreter will find our function expression, but it will only read in the variable name and assign undefined to it.
```javascript
sayMyNameSayMyName('Morty'); // 'I said your name, Morty.'  
 myNameIs('Morty'); // undefined//  
function sayMyNameSayMyName(name){  
   return `I said your name,${name}.`;}  
var myNameIs = function(name){  
   return `your name is,${name}.`;  
}
```
You’ll understand this more in the next stage.

<h3> 2) The Execution Stage </h3>

In the execution stage, values are assigned to variables within the execution context.

The problem with calling  `myNameis()`  early is that the interpreter has assigned undefined to`myNameIs()`  in the creation stage. If you had invoked  `myNameIs()`  after the function expression, the interpreter would have had time to assign the value of  `myNameIs()`  within the global context during the execution stage.

Invoking  `sayMyNameSayMyName()`  works because a reference to the declared function is stored in the creation stage. When the code is executed, we're able to run it without a problem.

<h3>Conclusion</h3>

Morty: So…hoisting is all about execution context?

Rick: Yep.
