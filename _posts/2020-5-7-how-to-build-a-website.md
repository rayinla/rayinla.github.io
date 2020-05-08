---
layout: post
title: How to Build a Website
tag: blog
---

How to Build a Website
===========

![wireframe](https://cdn-images-1.medium.com/max/800/1*eraUvzk7od7TIgy79IoS5A.jpeg)


When you want to get somewhere, you’re probably going to use a GPS or some other pathfinder. The same should apply to building a website for the first time. However, instead of telling you how to get there, many blog posts tell you what you need to get there. They’d list the technologies you need to know to build a website but they won’t show you the path. It’s like saying to get to Yellowstone National Park you need a car.

The purpose of this post is to show you the tools you need to build a website and how these tools will contribute to building your first website.

<h2> Let’s start off with the basics, shall we? </h2>

<h3>Text editor</h3>

![text editor](https://cdn-images-1.medium.com/max/800/0*t2H99g4RlyYR0TR5)

[pixabay](https://pixabay.com/en/text-editor-writing-document-text-1794110/)

Get a text editor and love it, because you’re going to be staring at it while gnashing your teeth at every new problem that arises. You can save a lot of trouble by becoming familiar with your editor’s quirks.

[Sublime](https://www.sublimetext.com/) and [Atom](https://atom.io/) are the best GUI options, in my opinion. Having used Sublime, I can tell you that the customization options are seemingly endless. Give it a go.

<h3> Command line</h3>

![CLI](https://cdn-images-1.medium.com/max/800/0*KvTmQ4-3xccAW46p)


No, hackers are not the only people who use command lines. Don’t run away from it. This black screen will become your closest virtual friend in due time.

Go through this painless tutorial [here](https://www.codecademy.com/courses/learn-the-command-line/lessons/navigation/exercises/your-first-command)

If you don’t need any hand holding, check out this [cheat sheet](https://www.git-tower.com/blog/command-line-cheat-sheet/)

<h2> Now, Let’s Learn Languages</h2>

![desk](https://cdn-images-1.medium.com/max/800/0*ZlXzlDe1X88qK0vB)


<h3> HTML</h3>

HTML helps form the skeleton of the website. Most website consist of a navigation bar, main content area, and a footer.

Learn Page Layout: [https://www.w3schools.com/html/html_layout.asp](https://www.w3schools.com/html/html_layout.asp)
```
<!Doctype html>  
<html>  
  <head>  
    <title>MY Website</title>  
  </head>  
  <body>  
    <! — Navigation section →  
    <header>  
      <h1>Home Page</h1>  
    </header>  
    <! — Main Content →  
     <section>  
     </section>  
     <! — Sidebar →  
     <aside>  
     </aside>  
     <! — Bottom →  
     <footer>  
     </footer>  
  </body>  
</html>
```
<h3>CSS</h3>

Now you have to make these elements look presentable. This isn’t as hard as it seems. Remember that every HTML element is a potential box. Look at your favorite websites. The most common shape is a quadrilateral, or a four sided figure. All of these quads are positioned nicely using a grid system. Colors and shadows and thingamabobs are then added to create a unique user experience. This is CSS in a nutshell.

Learn about [CSS selectors](https://www.w3schools.com/css/css_syntax.asp)

Learn the [Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

Learn about [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

Learn about [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for responsiveness and positioning

If you want to do cool things, like applying shadows, just ask Google.

<h3> JavaScript</h3>

Before you panic, you only need to learn the essentials of JavaScript which I’ll list below.

When you click a button, an event occurs. The specific library we use to create events is called jQuery.

Learn jQuery from scratch [here](https://css-tricks.com/lodge/learn-jquery/).

<h2>That’s all for the Front End</h2>

This is all you need to learn if you want to create a static website like a portfolio or a personal site. You can skip all of the server stuff. To host your site, you can use free hosting. One I’ve found to be user-friendly is [Github Pages](https://pages.github.com/). [Jekyll](https://jekyllrb.com/) is actually a really good static site builder you can use to get started right away.

But, if you want to make the next Facebook, you need to learn the back end.

<h2> The back end: Server-side Languages</h2>

Nodejs(server-side environment for JavaScript), Ruby, Python, PHP are the four primary server-side languages used to create dynamic websites. Anything that needs to be updated on a website requires the server. A log in attempt immediately triggers an exchange of information between the client and server.

I’m not going to dive into every single language. You have to pick one. Nodejs is hot right now, so if you feel comfortable with JavaScript, go for it. Ruby is easy to use and has superb documentation. Python has similar syntax, but less support than Ruby. PHP is widely used and relatively easy to learn.

After you pick your language, you need a database. **Server frameworks use databases to save, fetch, update, and delete data**. Keep that in mind as you read this guide.

[MongoDB](https://www.mongodb.com/), [PostgreSQL](https://www.postgresql.org/), and [MySQL](https://www.mysql.com/) are some of the database management systems that get thrown around every so often.



![](https://cdn-images-1.medium.com/max/800/0*wDrINmBd7KttYFWG)
Once you’ve picked your server-side language and database, try learning: 

<h3> A Server Framework</h3>

Frameworks make it easier to build web applications from scratch. Every language has its own particular framework. Mozilla breaks them down [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks)

<h3>The MVC File Structure</h3>

If you pick a framework, this is the way you should think about web programming from now on. Of course there are other structures, but this a good one to start out with for your first project.

 **Model:** Object Oriented Programming (OOP) in _insert language_

I know, I know. Wax on, wax off, right? How does OOP help? Well, in the back end, every form of data is an object. For example, every user on Medium is a user object.

In Ruby, using the Rails framework(this is a crude example), a user will look like this:

class User < ApplicationRecord  
#Lot of relationships goin’ on in here. More on that later.  
End

**Controller:** [Restful routing](https://codepen.io/urketadic/details/oZRdRN)

The controller is used to render HTML pages depending on the route. Within the route method, you can manipulate data from the database which would then be showed in the view.

I’ll pseudo code an example. Note that frameworks will abstract HTTP routing in their own way:

GET /users  
let users = User.findAll  
render the index.html.faketemplate  
  

**Routing doesn’t have to be hard at all.** We usually set up routs in a route folder or an equivalent folder. The basic aspect of routs is as follows: Create, Read, Update, and Destroy. You want to create a route where something is created, like when someone creates a new account; you want a route designated to adding a user to the database. You also want a lot of Read routes where you’re getting information from a database to populate a page. You want an update route in case a user wants to edit a page. Finally, you want a destroy route in the event that someone wants to delete something.

Here’s a good post about routing: [https://medium.com/fullstacked/restful-api-cheat-sheet-3f96fab970b8](https://medium.com/fullstacked/restful-api-cheat-sheet-3f96fab970b8)

**View:** [Templates](https://www.sitepoint.com/overview-javascript-templating-engines/)

Everything you learned about HTML applies, but now you can inject your server language in your HTML files to create dynamic content. If you have 10 users in your database, you can loop through all of the users we stored to the users variable in the controller and render them.

_#this is just pseudo code_

_index.html.faketemplate  
_{loop through users.each do}  
  <div class= ‘user-card’>  
    <p>{user.name}</p>  
    <p>{user.summary}</p>  
  </div>  
{end}

There are many templates to choose from. [Mustache](https://mustache.github.io/) is a popular one. Check it out.

<h3> How to integrate the database </h3>

If you look up at the template pseudo example, you’ll see that each user object has accessible attributes. These attributes are defined using what’s called a schema. Essentially, a schema is a fancy word for a table of organized data.

![](https://cdn-images-1.medium.com/max/800/0*ZcLikunHeCmeuDyS)

[http://db.lewagon.com/](http://db.lewagon.com/)

It’s best to plan how your database should look like before creating the database with a database language like SQL. You use a relational database management system to properly make use of the language. MySQL is an example of one such framework.

You can learn how to install MySQL here: [https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

You can learn how to use MySQL here: [https://www.mysqltutorial.org/mysql-create-database/](https://www.mysqltutorial.org/mysql-create-database/)

Once you’re done, you can access a cheat sheet here: [https://www.mysqltutorial.org/mysql-cheat-sheet.aspx](https://www.mysqltutorial.org/mysql-cheat-sheet.aspx).

If you’re using a framework, then you’ll see how the hard work of learning a framework’s nuances payoff here. When I pseudo coded User.findAll, “findAll” was an abstracted method.

The SQL equivalent would be SELECT * FROM users. “Users” is the table we would have created using a database language. Note how all tables are plural. Semantically, it’s the correct way to represent a data that will be available in multitudes.

Schemas are blueprints for SQL tables. Note that frameworks will use syntax from your chosen server-side language for table creation. Under the hood, SQL is driving everything.

Once you create a table with the aid of a framework or SQL, this table is mapped to an object. The object corresponds to the **Model** you create. In my case, its the User model. This is what Object Relational Mapping is all about(ORM). The relational aspect describes the relationship between objects.

Let me clarify that non definition with an example: a user can author many posts, but a post can only be authored by one user — a one-to-many relationship. This is just one of many relations that objects can have with one another.

For more examples of relations visit this [link](https://www.lifewire.com/database-relationships-p2-1019758)

**Note:** Non relational databases like MongoDB do not follow the relational paradigm per se, but if you read [MongoDB’s documentation](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/), there are ways around this restriction.

<h2>Let’s Put All Of This Together</h2>

![](https://cdn-images-1.medium.com/max/800/0*3uIjvHRRUPYz7QZY)

Before you begin, [wireframe](https://wireframe.cc/) your project. You should know what your site will look like and how it will function.

Once you have a wireframe, organize your schema. Both wireframe and schema will serve as a blue print for the front and back ends of your app.

1)  Initialize your MVC framework.

2) Start the development server that comes with your framework.

3) Code models based on your tables.

4)  Write HTML in view files.

5) Now its time to create database tables based on the schema.

6) In the controller file, use REST to create routes. Query the database if you need data and render the view pages.

7) Once your website is running and the routes are configured, start applying CSS.

8) Finally, go wild with JQuery.

<h2> One, Two, Three Lift Off! </h2>

Deploy your website to Heroku so that the world can see your hard work. To start your launch, click [here](https://devcenter.heroku.com/start).

![](https://cdn-images-1.medium.com/max/800/0*JOY_TYYVjenrd5_o)


<h2>Bonus tools </h2>

Once you’re more advanced, you should start using build systems like **Webpack** to package all your JavaScript files so your code runs faster.

You should also have a test suite set up; one that I’ve used for JavaScript is called **Jasmine**. There are different test suites for different languages. **Grunt** is a cool tool that can manage all of the tests you want to run. Beginning to see a pattern? There’s usually a framework for almost every level of development.

Want to be able to create CSS without having to think too hard about naming your styles? Then, use **Bootsrap**.

When you build a website with JavaScript, you’re going to want to use the cool features, but not all browsers support them; you’re going to want to use **Babel** to transpile your code back to the older version.

There are many other tools out there in the wild. But the one’s mentioned here are the barebones. Once you get your coding up to a certain level, you’re going to want to get in the habit of using production tools.

<h2> Final Words</h2>

This is a simplified overview of what goes into building a website. The point of this article was to help those who don’t have a clue as to how to get started building a website. The links provided are meant to show you a path towards success. The best way to make use of them is to go ahead and start attempting to build a website. The cheat sheets should help you if you get stuck. Plus, there’s Google.
