---
layout: post
title: Building a Game with JavaScript
description: Learn event-driven programming, closures, callbacks, and animation by building a game.
tag: beginner
---
Building a Game with JavaScript
==========

<h3>The Intro</h3>
The best way to learn a language is to speak it. If you've ever had a friend learning French for the first time, they've probably peppered you with a bevy of phrases in French. The same goes for medical students learning the language of medicine. Jargon is its own language. To learn it, you have to speak it.

Programming languages like JavaScript are special in that they help you communicate with your computer. The computer understands you through a third party called a compiler. So if JavaScript is a form of language, how do we speak it? We write it. Of course, you may say, "Okay, but how do we apply it?"

We build stuff.

Yes, the best way to learn JavaScript is to build cool things. I'm going to teach you gals/guys advanced functions, functional programming, and jQuery all in one article. That sounds like a lot, but the amount of code you'll be writing is minimal. These concepts alone can fill volumes, but we don't want to become professors, we just want to code.

<h3>The Build: Whack-a-Frump</h3>
We're going to be making a twist on the famous Whack-a-Mole game. Below is all of the code we're going to use to set up the game. This is just the boilerplate stuff.

Grab the full code on [CodePen](https://codepen.io/howtocodejs/pen/OZKRWb/) to follow along. Try to ignore the JavaScript if you want to follow along, but if you want to tinker with the code and improve it, then go ahead.

Keep in mind that we'll be making a very minimal version of this game. By the end, I'll provide a list of issues that you can fix and some features you can add.

<h3>Setting up jQuery</h3>

What we now have is a static game board. Nothing works. With this example alone, you can see that JavaScript is responsible for a ton of the interactivity you see on websites (although, CSS does play its part here and there).

In order to make our HTML elements "do things," we're going to have to write some JavaScript. There are two ways of doing this. 1) We can use plain JavaScript and traverse the DOM(Document Object Model) 2) Or we can use jQuery, which does the same as option 1 but in a more user-friendly way.

If you're unsure what "traversing the DOM" means, think of a marionette show. The puppeteer(JavaScript) moves his puppet(HTML). But he doesn't use magic to make it do things. He uses strings that are attached to the puppet's limbs.
We can divide the puppet up like so:
```
Body (parent of Head, Arm, Leg)
  Head
    eyes (child of head)
    mouth (child of head)
Right Arm
    hand(parent of fingers & child of right arm)
      fingers(child of hand)
  Right Leg
    foot(child of right leg)
 ```
 
Say we were building our own marionette and we wanted to attach a string to its right foot. We would pick up our string, find the body, move down from the head to the right leg(aha!), and, finally, we would attach the string to the right foot. That's DOM traversal marionette-style.

When you write up your HTML, it's important to keep in mind the relationships of your elements, because in order to move a certain element, we need to know where it is first. That's where jQuery comes in.

jQuery is a JavaScript library that helps us "query" (i.e. find) an element in the DOM so that we can make it do things with JavaScript. Before we can start using this library, we have to link it to our HTML file.

Stick the Google CDN(Content Distribution Network) into your <head> tag and make sure that it's placed above all other script tags:
```
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
```
Now, we can begin coding by writing our first line of jQuery:
```javascript
$(document).ready(function(){
//all our code goes in here
});
```
In English, the above line of code reads, "jQuery, find my entire HTML document. When, it's fully loaded, execute all of my code."
The funny symbol `$( )` is called a query selector. The dollar sign can be replaced with jQuery.
  
The `document` and the `ready()` function are built into jQuery, meaning that you can traverse your way to the jQuery docs to find all of its available methods. That's basically what a library is. A library of functions. Get it? No? Okay moving on…

<h3>Callback functions</h3>
Now's the perfect time to tackle callback functions. We're only going to explore one facet of callback functions to make things simple. Though, callbacks aren't as advanced as some would have you believe. You can certainly do cool things with them, so if advanced means cool, then,yes, callbacks are advanced.

Here's why:
See that `ready()` function? Well we've stuffed another function in the parameter. That means that ready() expects a function and once it receives it, it will execute it depending on certain conditions. That's a callback function.

We're almost at the cool part.

Normal functions are automatically executed, and then they're discarded.
Callback functions, like packages, can be saved and "opened" whenever we're ready to open them. It's because of callbacks that we can wait for the DOM to fully load before we query elements.

Still not sure about callbacks?

That's okay. Their power will make itself known the more you code. It also helps that they're present almost everywhere you turn. We'll cover closures fully another time.

<h3>Let's start jQuery-ing</h3>
Now that we have our marionette analogy down, let's attach a string to one of our HTML elements. In other words, let's query an element.
jQuery(and vanilla JS as well admittedly) makes querying easy because all we have to do is find class or id we've assigned to an element and plug it into the jQuery selector.

We'll start by querying one of the frumps. The selector is called .frmp-hd . You can go ahead and make your class/id selectors infinitely more readable than mine, if you want.

`$(.frmp-hd).`

You know what? Let's list all of the elements we're going to need and use console.log() each one of them.

```javascript
console.log($(".score"));
console.log($(".sandbox"));
```
`console.log()` prints data to the console. You can access your web browser's console with Right Click -> Inspect or CTRL+SHIFT+I. You may have to tab over to the console.

Once you're at the console, you will see the jQuery.fn.init object with a drop down arrow to the left. Click the arrow and you'll find your element. The arrow next to your element will list all the methods you can call on said element.

This information is gold. Not only do we know everything about our element from its position to its specific styling, we can access those properties simply by using the key names provided to us by the DOM API. By the way, that's where the Object in Document Object Model comes into play. Our HTML has been modeled in the form of an object that we can access with JavaScript.

So, `$("sandbox")[0].className` yields "sandbox."

Why the [0]?

The bracket([])notation is another way to access an object's value. Unfortunately, 0 is the key name given to our <div> element. The dot( . )notation isn't friendly with numbers so we have to use the bracket notation instead.
  
<h3>Variable Initialization</h3>

Are you tired of that jQuery selector yet? Dollar sign, parenthesis, quotations, periods, hashtags - man that's annoying to type out. Instead of reusing the notation, stick your query selector into a variable.

This is good:
```javascript
let sandbox = $(".sandbox");
```
This is better:
```javascript
let $sandbox = $(".sandbox")[0];
```
You can now access your element's methods without adding the ugly 0. The dollar variable is simply a convention to remind yourself and others that the variable is a special DOM variable.

<h3>Game Plan</h3>

Okay, breathe. I know we've covered quite a lot. Feel free to play around by testing your querying skills. Querying elements will become intuitive so keep practicing.

Now that we know a bit about accessing the DOM, we can start thinking about how we can make our creative Whack-a-Mole game. Whenever we want to build something, it's always best to plan. Ideally, the planning should occur before any code is written, but for the purpose of this article we'll start planning now that we've gotten our feet wet.

1)The mole has to appear and disappear.
2)The appearance of a mole has to occur at random.
3)When we hit the mole, we should get points.

<h3>Time to Solve Some Problems</h3>
To solve our first problem, we know we need to animate the elements somehow. JavaScript has a ton of animation libraries. Let's choose animejs. We'll deal with the library later. For now, you can plug the source into the head of your HTML.

`https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js`

To solve our second problem, we may be able to take advantage of JavaScript's built in `Math.random()` function. We can then randomly select elements to animate.

But now we've encountered a hidden problem! We will need to trigger a new animation every time, otherwise our animation function will execute automatically and die. The animation should be packaged and ready to go when we want it to go. Sounds like the job of a callback, right?

Well, there's a built-in function called `setInterval(callback, 1000)` that takes a callback function and executes it after a specified period of time. Rinse and repeat. It's not the prettiest solution but it will work for our simple game.

Finally, we need to trigger an event when someone clicks on our "mole" so that we can add points to our score board.
Hmm…let's step back a bit because we're getting into the meat of JavaScript.

<h3>Event Driven Programming</h3>
Click send on your favorite messaging platform - you've just triggered an event. Every form of interaction can be considered an event. You can trigger an event by scrolling or by doing nothing for too long. Sometimes events are beyond your control. 

Other times, they're entirely predictable. Generally, there's a flow to these events. The user swipes his mouse over the menu button(trigger), triggers an event(likely a smooth animation) by clicking it, and the menu pops up. The event has been handled, thereby ending the event loop.

That loop is exactly what we're looking for in our whack-a-mole game. In order to "catch" the event of a click, we need to have someone listening for it. That someone is an event listener. Event listeners wait for a specific event to occur before executing any code(event handler). And, as you may be thinking, that code lying in wait is our dear old callback function.

jQuery provides us with a bevy of event listeners. Here's a list of them: `https://api.jquery.com/category/events/`

For our game, we need to listen for a click. It may be tempting to choose `.click()` from the library, but you're actually better off choosing `.on()`. The main difference between the two is flexibility you get by writing `.on("click", fn)` vs `.click(fn)` 

<h3>Let's Create an Event</h3>
So if we want to change the score when someone clicks on a frump, we write:
```javascript
$frump.on("click", function() {
    $score = Number($score) + 10;
    $newScore.innerHTML = $score + "";
  });
```
What I did was convert our string into a number, add 10 and assign the new number to the $score variable. The new score is then forced into a string again.

<h2>Putting It All Together</h2>
In the first part of this series, we went through some of the basics of JavaScript. By the end, we were creating events to ensure that the score would change once you hit a frump.Now that we've got a handle on some of our problems, we're ready to piece together our game. In this part, we'll start by getting a handle on our animation.
<h3>Animation</h3>
```javascript
var el = document.getElementsByClassName("frmp-hd")[0];
 anime({
 targets: el,
 left: "-40px",
 direction: "reverse"
 });
 ```
This is a really simple animation. All I did here was shift the position of the first frump head to the left. Then, I allowed the animation to play in the opposite direction to hide the frump head. All of these options are baked into the animejs library. Check out the amazing documentation right here.
  
Now that we've animated our frump, we need to randomize its appearance.
<h3>Randomization</h3>
Wrapping `Math.random()` in `Math.floor()` will allow us to randomize our array of frumps. Below, I've created a function that will return a random number.
```javascript
function rand() {
 return Math.floor(Math.random() * 7);
 }
```
Because we have 6 frumps, we need to multiply `Math.random()` by 7. That gives us a range of random numbers from 0 to 6. You can practise generating your own range of random numbers at W3schools.

Now we can plug our `rand()` function into the bracket notation. Remember, all our function does is output a random number. Every time we reload the browser, we should see a random frump appearing.
```javascript
var el = document.getElementsByClassName("frmp-hd")[rand()];
```
<h3>Animation Loop</h3>
`setInterval()` will be a suitable tool for our simple game. It takes a callback function and an integer. The integer that we'll put in the parameter is in the form of milliseconds. 5000 milliseconds equals 5 seconds.

> Warning: Due to JavaScript's event loop, `setInterval()` may not work as you expect. You might find that instead of 2 seconds, it may take 4 seconds for your code to execute.

```javascript
setInterval(function() {
 // We can plug our animation in setInterval() to loop the animation
 },5000);
```
Now frump heads will appear every five seconds. Play around with the intervals of this extremely basic animation setup to get familiar with setInterval. If you want a more in depth explanation, check out JavaScript.info's animation article.

<h3>Conclusion</h3>

That's it for this part of the tutorial. Animations are a crucial part of gaming. Without them, games are drained of what makes them so fun. Hopefully this section has taught you a bit about how JavaScript can be used beyond websites. Until next time, keep coding.
