---
layout: post
title: Wattpad is an Example of How Not to Code
tag: blog
---

Wattpad is an Example of How Not to Code
===========


When we first start learning to code, the impulse most of us have is to solve the problem in front of us and to move on. Oftentimes, this may be a necessary evil in order to save time. But solving short term problems without thinking about long term ramifications builds up technical debt. 

A coding instructor once told a story of how he created a hornets nest of mangled code because he would just hotwire fixes on the fly. Eventually, when it came time to audit the code, it cost the company he worked for a lot of time and resources to clean up the code. He ended up losing his job. 

Technical debt is no joke, because it's worse than being a junior dev staring at code you haven't written. Instead, you're starting at code that's poorly written and that doesn't scale. Any little fix will break something that you didn't expect to be broken because the code was not properly modularized. Modularization requires planning. 

Wattpad, a fiction writing website for teens is the latest victim of technical debt. This debt is so bad that their team of engineers have not been able to fix it for two years! For a company that recently received $51 million in funds, Wattpad should not have a ranking algorithm that has been broken for two years and running. 

The troubles began when Wattpad rolled out its new tag ranking system in March 2018. Before, Wattpad ranked books by pre-determined categories alone.

If you’re a problem-solver, you can probably start to see the problems that such a revamp can wreak on your code. My guess is that Wattpad engineers got away with writing shoddy code because the user categories were predictable. You can create a ranking algorithm that takes into consideration that there are only X amount of categories and that a user can only select X amount of categories. You don’t have to write code that is that dynamic.


However, once you start ranking by tags, you now introduce a host of other variables, variables that you may not have anticipated with the old ranking system. It seems like the devs Frankenstein-ed a tag ranking system atop their old code, creating a mangled mess.


Now, books that clearly don’t deserve #1 ranks have populated the “hot list.” Book rankings also do not update regularly. In short, the ranking algorithm is broken.


Wattpad’s PR acknowledged this in a [forum post](https://www.wattpadwriters.com/t/tag-rankings-all-you-wanted-to-know/142874) saying, ‘The code for tag rankings is quite old, from a couple of years ago and is a kind of Frankenstein code that’s been added to over and over again over the years, so it’s not super easy to work with.”

I don’t know how you can take money knowing that your ranking algorithm has been broken for so long. What I believe Wattpad has done is create a facade to hide their broken internals. Wattpad feels more and more like a store front designed to woo investors than one that caters to its core demographic: young readers looking to read free books.

Paid stories now line the front page of their redesigned website, walled gardens showcasing books that rose to the top when Wattpad’s ranking algorithm actually worked.

I’m not saying all of this to hate on Wattpad, but this is really a lesson in designing apps to scale rather than building haphazardly. Having to go back to rework your own legacy code must be a complete nightmare. Understandably, the team is taking their time and prioritizing other tasks. 

Luckily for Wattpad’s readers, there are tons of books floating in the ether, but none of them are available by a quick look at a list. You have to dig around and look at other people’s reading list.

The ranking algorithm actually hurts the writers more than Wattpad’s customers. For this reason, investors may turn a blind eye. But for a platform that is supposed to cater to its creators as well, Wattpad has certainly failed them due to a lack of oversight.

Many writers on the site have expressed their frustration, commenting on the length of time that the ranking algorithm has been broken and on their discouragement.

I observed the categories myself and was baffled at the lack of quality surfacing. I’d seen high quality covers and books just two or more years before. Top books had seen a lot of activity in reads and comments and there always seemed to be a new book rising to the top.

The fantasy genre in particular has been hit hard. Other genres like it are proverbial ghost towns. Even though some may classify Wattpad as a fan fic site, writers and artists collaborated to produce stunning fantasy covers. Here’s a sample from a web app I built that collected the top ranking fantasy books on Wattpad:

''![](https://cdn-images-1.medium.com/max/880/0*2guVPXEfmx3RuYt7.png)

These were the top fanatasy books before the algorithm was broken. Not bad for a site full of teen writers.

In the end, a normal reader will still be able to find their fan fiction fixes and their bodice-rippers, but from a technical standpoint Wattpad has to be the most broken VC-funded site out there.
