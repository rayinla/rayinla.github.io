---
layout: post
title: Learn Variables
image: config.png
---



 *Originally published in codburst.io as Pass Your Front End Interview By Knowing JavaScript's Prototype Chain.*

When you first started learning to program, you may have come across the term object-oriented programming. You looked up what it meant and you found out that it’s simply a buzz word for grouping data into “objects” with attributes.

The keyword used to create these objects in many programming languages is the class. You define a class with a constructor and several public and private functions.If you want one class to inherit from another, you write simple inheritance syntax and (wala!) you have created a chain of inheritance.

Of course, this all groovy if you’re anyone but a JavaScript developer. Until ES2015, the language did not implement a class. Instead, it used and still uses a prototype chain. The new ES6 “class” is just a sugary syntactic concoction that hides the inner workings of the prototype chain. Understanding how the prototype chain works is crucial if you want to develop performant code while using JavaScript’s OOP paradigm.

For those familiar (or not so familiar) with computer science, the prototype chain is a linked list. It’s a gross oversimplification, but keeping it simple is the key to gaining understanding. Here’s Mozilla‘s definition of a prototype chain:

> When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.



Sounds a whole lot like a list huh? Each element in this particular list contains an object literal called a prototype.

![inherit](https://thepracticaldev.s3.amazonaws.com/i/fbol4z64ti4rom45ij2e.png)


The image above is slightly misleading because the last element in a prototype chain is always Object, from which all instances like functions and arrays derive from.How Does thinking of the Prototype Chain as a Linked List help ?

Well, there is one major quirk that we should know about lists. When we want to traverse a list, we have to start from the head of the list. So, in terms of Big O notation, it would take O(n) time to retrieve an element in the prototype chain. You can start to imagine the performance problems you might face if you have prototype chains that are too long.

##How Do We Initialize Our Chain?

The first thing we need to do is create a constructor. Coding by pre-ES5 standards, there is no ‘‘classy’’ way to do this. The only thing we do to differentiate a constructor function from other functions is to capitalizing the first letter. Then, we use the new keyword to create an object.
Note: the pre-ES5 example is being used for now to shun the class syntax. We’ll jump back on the ES5 wagon later.

```javascript
function Bat(name){
 this.name = name;
}

let bob = new Bat('bob');
```

Every constructor we initialize gets a free prototype object as one of its properties. We can name a key and set a value to it.

```javascript
Bat.prototype.fly = function(){
  console.log('Im flying. Weeee');
};

Bat.prototype.detect = function(){
  console.log('I found a mouse!');
};
```

Already, you can see the advantage of prototypical inheritance. We can add methods to our class without modifying the class definition, letting the chain handle property inheritance. This is what the chain looks like in one instance of our Bat object:

`Bob{name: bob}=>Prototype{fly: [Function], detect: [Function]} => Object {} => null`

Now, if we write bob.name, we get ‘bob’. And if we write `bob.fly()`, we get `‘Im flying. Weeee’`. Hmmm. How do we have access to `fly()` without calling `bob.prototype.fly()`?

Well, it’s not magic. JavaScript’s engine first looks for the property in the object itself. If it’s not there, it traverses over to the first prototype, then the next…and the next, till it either finds what it’s looking for or hits null.

##Putting it All Together

We can take advantage of prototype chains to perform class inheritance. This OOP method is also called subclassing.

```javascript
function Mammal(){
  this.bloodTemp = 'warm';  
}

function Carnivore(){

}

function Lion(name){
  Mammal.call(this);  //super. Inherit constructor
  this.name = name;
}

```

We’ll create one super class and two other subclasses. Carnivore should inherit from Mammal and and Lion should inherit from both Carnivore and Mammal.

```javascript
Mammal.prototype.growHair = function(){
   console.log('my hair is growing');
}

Carnivore.prototype = Object.create(Mammal.prototype);

Carnivore.prototype.eatMeat = function(){
  console.log('Mmm.Meat');
};

Lion.prototype = Object.create(Carnivore.prototype);

Lion.prototype.pride = function(){
  console.log('im king of the jungle');
};

```

We’re back to using ES5. `Object.create()` turns a prototype into a stand alone object literal that we can then assign as the prototype of another object. This means we ignore the constructor of the super class when inheriting.
Note: That’s why we invoked `Mammal.call(this)` within Lion’s constructor so that we could borrow Mammal’s constructor.

Knowing how prototype chain now work, you can see how easy the jump from chaining methods to chaining objects can be.
Here’s the expected output:

```javascript
var charlie = new Lion(‘charlie’)
charlie.growHair() // my hair is growing
charlie.eatMeat()  // Mmm.Meat
charlie.pride()    //im king of the jungle
charlie.bloodTemp  // warm
```

Note: To achieve the same result, you can also implement mixins with `Object.assign()`.

```javascript
//classical inheritance
Lion.prototype = Object.create(Mammal.prototype);
//This is a mixin
Object.assign(Lion.prototype, Carnivore.prototype);
```

##Conclusion

Creating methods and inheriting using the prototype chain may seem tedious as compared to the sugary class implementation. Still, what you come to appreciate is the dynamic and modular nature of JavaScript’s language. One important thing to note is that you don’t want to get carried away with prototypical inheritance. Recall this: the charlie.growHair() function had to travel a long way up the chain before it could be executed. Short chains equal better performance.
