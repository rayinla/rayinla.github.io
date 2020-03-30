
---
layout: post
title: JavaScript What Are You? 

---


JavaScript What Are You?
===========

<h2>Intro</h2>

So, you want to learn JavaScript, huh? Before diving into this strange and beautiful language, it's a good idea to know exactly what you're diving into. Kind of like how you'd want to know know someone before marrying them. 


You probably know that there are many memes and jokes floating about the interweb, hinting at JavaScript's flaws. Some of these have to do with geeky performance issues, but others have to do with the nuances of the language itself. The keyword here is nuance. Things don't always work like you expect them to sometimes, especially if you don't know what's going on under the hood. 


See, JavaScript, unlike other scripting languages, interfaces directly with the browser. Ideally, we want code to be warm and snug under layers of obscurity, dealing with the heart of an app(the server, database, etc). We don't want code running wild, just a layer away from access. But if we want objects on a web page to move, sing, and dance, we need good ol' JavaScript or something equivalent to it. 


The moving, singing, and dancing you see on web pages are a result of functions that wait for you to activate them. Imagine tiny magical elves lying in wait, listening for your key press or the hovering of your keyboard. These elves spring to action once they hear a specific "event" ie. a click. 


The tiny elves(ie. event functions) then go to a specific HTML element that they've been assigned to and make it move, sing--or whatever they were told to make it do. This doesn't happen all at once. The tiny elves wait for one event at a time. So, each elf corresponds to a specific event and they have to wait for their turn in a line. 


This line is called a single thread; JavaScript is a single-threaded language. But the analogy above doesn't exactly do this concept justice. Let's dive deeper, shall we?


<h2>What is a single-threaded language?</h2>

Simply put, a single threaded language uses a single call stack, meaning that it can only fire one event at a time. If you’re not exactly sure how to conceptualize a call stack, just picture a Jenga stack.


Say you’ve written a list of functions. JavaScript's runtime would then compile the script you’ve written and sequentially stack the functions like blocks within its call stack. Afterwards, each function that executes is taken from the top of the stack until it reaches the bottom of the stack. There is only one stack. This, ladies and gentlemen, is single-threading.

<h2>What is non-blocking, asynchronicity, and concurrency?</h2>

Well,  let us try to understand what blocking is first. In a nutshell, blocking is the traffic caused by too many synchronous calls. Imagine a narrow exit that funnels drivers into a single lane road. That road is guarded by a traffic police who only allows one car at a time to go beyond his stop sign.


Now imagine the headache you’d have if you’re the fifteenth car in line and you have to get to the emergency room. Similarly, websites coded with blocking code make for a clunky user interface.


So we understand what blocking is. Non-blocking is the complete opposite of blocking. Instead of making synchronous calls, a non-blocking language like JavaScript uses asynchronous calls, or, in other words, an emergency lane that allows for a breakup of sequential order so that you can get to the hospital on time.

<h2>Here’s where things get really interesting</h2>

By wrapping a JavaScript function within a Web API function like  `setTimeout()`, we can let the “secret underworld” of the browser handle this function without forcing it onto the stack. This works because Web APIs are independent of JavaScript's runtime. This concept of having a third party handle code is what concurrency is all about.  We use callbacks to make our programs dynamic and prevent the event loop from clogging up.


We’ve mentioned Web APIs and an event loop. There’s also a callback queue. If you’re getting slightly confused, don’t panic. The comic will explain everything.

<h2>Roles</h2>

-   **JavaScript runtime:**  a single customer service call operator. He reads from a script, makes the call, and files it onto the stack.
-   **Web APIs**: a third party data store that holds a message for however long it is instructed to hold it.
-   **The callback queue:**  a loading dock for calls
-   **The event loop:**  a little green droid with one simple job — check if the stack is empty. If it’s empty, take an event from the queue and place it onto the stack. Continue to do so while the condition is true.

<h2>The Comic</h2>

![call stack](images/webapicomic.png)


On a very synchronous day, the data flow is restricted. The “call operator” or the JavaScript runtime has to manually log all of the calls. The call operator has no time to get to the more important functions, like calling his wife or rendering a web page.


On a very asynchronous day, all the call operator has to do is load all of the Web API functions, then he can leave the task to both the Web APIs and the mini droid aka the event loop. The Web APIs store the callbacks until they are ready to be staged onto the call back queue. All the event loop (mini droid) has to do is check if the stack is empty and place the callback onto the stack. Meanwhile, the call operator can focus on more important functions, like dinner with the wife.

<h2>Conclusion</h2>

You can see why JavaScript devs make a big fuss about callbacks. No one wants their runtime environment to be preoccupied with too many tasks. You can think of callbacks as Gwen Stefani’s “Hollaback Girl.” JavaScript's runtime sends a shout out to the Web APIs and performs other tasks while waiting for the hollaback, or, in our case, a callback.

We'll deal with callabcks more when we get to functions. Till then, stay coding.

[Vector images created by Freepik](https://www.freepik.com/free-vector/a-person-working-in-support_956765.htm#term=call%20operator&page=1&position=4)
