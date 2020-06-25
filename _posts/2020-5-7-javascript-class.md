---
layout: post
title: JavaScript Class
description: Learn everything you need to create classes in ES5 and ES6.
tag: beginner
---
JavaScript Class
==========


You can think of classes as houses that contain variables  and functions. The same reason we use a variable to store numbers is the same reason we use a class to store functions; we want to be able to create a pattern that allows us to reuse information in an efficient way.

But classes are special because they work like a blue print for other people to use and build cool things with. For example, I can have a class that's called Warrior. 

I can "instantiate" or create an object of the class by writing:

```javascript
let bruceLee = Warrior.create("Bruce Lee");
bruceLee.kick();
```

What's cool is that I can create a totally new object without having to rewrite the kick function because it's already defined in a class. 

```javascript
let chuckNorris = Warrior.create("Chuck Norris");
chuckNorris.kick();
```
But how do we create a class in the first place? There are a few ways to create a class in JavaScript. We can divide them into the old ways and the new ways. Some purists prefer the old way, but we'll cross that bridge when we get there. 

The most popular way to create a class in JavaScript is by using the function keyword followed by a capitalized function name:

```javascript
function Warrior(){
}
```
Or we can create a class by using an object literal:
```javascript
let Warrior = new Class({
});
```

Or we can create a class by using a Self Invoking Function: 
```javascript
let Warrior = (function(){

})()
```
The new way of building a class in JavaScript is by using a class keyword like any other language:

```javascript
class Warrior{
  constructor(){
  }
}
```
However you choose to create a class, the components of a class are usually the same. For this tutorial, we'll use the first method but I'll show you how to do the same thing using the new "class" method.

The first thing you have to think about when building a class is what the basic traits of the class should look like. For example, if you want to make a fitness app, you want to probably know the user's name, age, height, and weight. Every new object(or user) we create should have those descriptions available. 

We put this information in what we call the constructor:
```javascript
function User(){
//constructor
  this.name;
  this.height;
  this.age;
  this.weight;
}
```
> Note: We us the "this" keyword because when a new user object is created, we want to get the value of the instantiated object and not the class itself.

Let's go a step further by allowing a someone to assign value to a class by adding one parameter to the class:

```javascript
function User(object){
//constructor
  this.name = object.name;
  this.height = object.height;
  this.age = object.age;
  this.weight = object.weight;
}
```
This type of class building is  great practise because it allows anyone calling a class to be able to build up their object like a build-a-bear without having to worry about breaking anything or arranging anything in a specific order. For example:
```javascript
let bob = User({ height:"7'2", age: 30, name:"Mike", weight: "200 Ibs"})
```
Assuming the class is complete, this will work even if it's not in order because we can just make calls from the object literal. 

Note that the code above won't work as is because we haven't talked about the next aspect of JavaScript classes.

<h2> Private v. Public </h2>

Data within classes are organized into private and public data. There are certain things that you don't want outsiders to access within the class, so you keep them private. This might be an algorithm that calculates a person's BMI, for example. That should always stay the same, so you don't want to allow folks to change that. But we do want to be able change a name or weight, don't we? So that data should be made public. 

Here's how we separate public data from private data in JavaScript. Note that there are no keywords in classic class construction. 


```javascript
function  User(construct){
//constructor
  this.name = construct.name; 
  this.height = construct.height;
  this.age = construct.age;
  this.weight = construct.weight;
//private
  let bmiMultiple = 703;
  let bmi = ()=>{
    return (this.weight / (this.height * this.height)) * bmiMultiple;
   }
//public
  return {
    name,
    height,
    age,
    weight,
    bmi
  }
}
```

If we tried to access the bmiMultiple variable, we wouldn't be able to do so. Note that the variables that are pre-pended by the "this" keyword are automatically "gettable" and "settable." That's the point of the constructor--to allow someone to build an object immediately by setting values.

> Note: I'm cheating by listing the variables in the return statement without adding a colon and a value like you would in pure ES5. ES6 allows for this shorthand. Feel free to mix the old with the new 

Once you've instantiated your class...

```javascript
let bob = User({ height:72, age: 30, name:"Mike", weight: 200}) // 72 is in inches and 200 is in pounds
```

...you can then get information and set information:

```javascript
bob.name; // Mike
bob.name = "Joe"; // Joe
bob.weight; // 200 
bob.weight = 300;
bob.weight; // 300 Ibs
```
You should realize that the new method(ES6 classes) does not allow you to so easily segregate private and public variables/functions. You have to use a hacky underscore to alert other developer or use a hashtag before the variable name or function name.

```javascript
  // private property
  this.#weightCounter= 0;

  // private method (can only be called within the class)
  #bmi() {
    this.#weightCounter++;
  }
```


<h2> Functionality </h2>

If you've explored my function article, you'll notice that I used an anonymous function so that the "bmi" function could blend seamlessly into the return statement. You can use the normal function declaration, but you should be aware that the class structure you choose changes the way you get to call functions. It's better to stick with anonymous functions whenever possible because they're just leaner and more readable.

We can call our function like so:
```javascript
 bob.bmi(); // 27.12
```

<h2> Inheritance </h2>

We should briefly discuss inheritance. Eventually, you'll find yourself needing to make more classes that are tailored to specific individuals. For example, you may want to make a class dedicated to power lifters and another class dedicated to runners. These classes will have different traits, but they will still have things in common with the general user class, like name, height, etc. 

Instead of just rewriting these variables, you can have the CardioUSer inherit from the User class. There's a old way to inherit and a new way to inherit. If you've built a class using the old but still effective methods, you'll want to do a "prototypical inheritance." I've already [written an article that dives deeper into prototypes](https://www.howtocodejs.com/javascript-prototype-chain/). I'll just lay out an example of the old from of inheritance while you check out that article. 

```javascript

//constructor
function  User(construct){
  this.name = construct.name;
  this.height = construct.height;
  this.age = construct.age;
  this.weight = construct.weight;
}
//prototype
User.prototype.bmi = ()=>{
  return (this.weight / (this.height * this.height)) * 703;
}
  
//inheriting constructor
function CardioUser(object){
  User.call(this, object)
}
//prototypical inheritance
CardioUser.prototype = User.prototype;

let andy = new  CardioUser({name:"Joe", height:72, age: 30, weight: 200});
  
andy.bmi();

```
There's a lot going on that has to be broken down. I removed the bmi function from the class and assigned it to the prototype of User, which can then be handed down to CardioUser. This is the most functional way to create classes in JavaScript. The function itself only serves as a constructor while the prototype contains any dynamic function you wish to create.


Next, I inherited the constructor by using the call function on User. 

According to Mozilla, "with `call()`, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object." The first parameter accepts the "this" keyword and additional parameters used to assign value. 

In our case, we used an object, so we only need to assign object and that will be applied to our inherited constructor.

After that, I assigned the functions from User to CardioUSer and wala! CardioUser has now inherited both the constructor and the functions.

The new way of doing things is much more simple:
```javascript
  
class User {
  constructor(construct){
    this.name = construct.name;
    this.height = construct.height;
    this.age = construct.age;
    this.weight = construct.weight;
    }

    bmi(){
      return (this.weight / (this.height * this.height)) * 703;
    }
}


class CardioUSer extends User {
  constructor(object){
    super(object)
   }
}

let bob = new  CardioUSer({name:"Joe", height:72, age: 30, weight: 200});

bob.bmi();

```

You probably know what's happening just by reading the code. I extended the User class into Cardio. Rather than use call, I used super which only needs to accept whatever I want to assign to my inherited variables. In this case, we're using an object literal.


<h2>Getters and Setters</h2>

If all that prototype stuff freaks you out, you're probably better off using the new ES6 class.  It's admittedly cleaner and you can actually do things that are available in other scripting languages, like specifying getter and setter methods. As you saw before, the getters and setter were implied, but using the Es6 class we can explicitly set them. 
```javascript
set name (name) {  
this.name = name;  
}  
  
get name () {  
return this.name;  
}

```
This type of coding is good practise, though it may seem redundant. The old fashioned way to do this would be to write...

```javascript
let setName = (name)=> {  
this.name = name;  
}  
  
let getName = (name)=> {  
return this.name;  
}
```

<h2>Conclusion</h2>

We can go on and on about classes, but this should be enough for now. You know have the basic building blocks required to go make functional applications. But which method is better, you may ask. The old or the new. I find that the old method is really comfortable to use just because I don't feel like I'm restrained by the parameters set by ES6 classes. However, I do find ES6 classes a treat to look at, coming from a Ruby background where classes are compact and readable. 

I think one has to realize that JavaScript has always been a functional tool used to add some fancy attribute to an app. So the idea of creating large class structures wasn't present. The language designers just built as they went, not anticipating that JavaScript would ever be used for the back end. 

But now that JavaScript has been used in more and more areas, ES6 classes seems to have been designed to provide comfort to programmers coming from other scripting languages. It just so happens that newcomers might find the new ES6 classes easier to understand as well. In comparison, the old way of doing things seems a bit hacky. 

In the end, you should just choose whichever works best for you. As you become used to programming in JavaScript, you may find that using the old method is simply faster. Or you may not. That's the beauty of language. To each their own.
