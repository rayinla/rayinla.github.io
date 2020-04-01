---
layout: post
title: JavaScript's V8 Engine
description: JavaScript's V8 Engine is explained with lovely cartoons.
tag: advanced
---

JavaScript's V8 Engine
===========


[In the first chapter](https://www.howtocodejs.com/what-is-javascript), we detailed how JavaScript’s engine works in terms of event execution and briefly mentioned compilation. Yes, you read that correctly. JavaScript is compiled, though unlike other language compilers that have build stages that allow for early optimization, JavaScript’s compilers are forced to compile the code at the last second — literally. The technology used to compile JavaScript is aptly named Just-In-Time(JIT). This “compilation on the fly” has appeared in modern JavaScript engines to speed up the browsers that implement them.

It can get a bit confusing when developers call JavaScript an interpreted language. That’s because JavaScript engines have, until recently, always been associated with an interpreter. Now, with engines like Google’s [V8](https://v8project.blogspot.bg/2017/05/launching-ignition-and-turbofan.html)  engine, developers can have their cake and eat it too — an engine can have both an interpreter and a compiler.


We’re going to show you how JavaScript code is processed using one of those new-fangled JIT compilers. What we’re not going to show you is the complex mechanisms by which these new JavaScript engines optimize code. These mechanisms include techniques like inlining(removing white space), taking advantage of hidden classes, and eliminating redundancy. Instead, this article will graze the broad concepts of compilation theory to give you an idea of how JavaScript’s modern engines work internally.

Disclaimer: you might become a code-vegan.

<h3> Language and Code </h3>

![](https://lh6.googleusercontent.com/cBv6r_QGMLELtArn5T9tT_35fU3vi16-SOhEUfWfgDsaW3O7MStr2tZ9wgvhCVRPjvWcXjyh8tnCOiYp478xnQ418rA_XBV4h_bW7zJ87EjIB0llH6-Ua8UjGtUKdbpktQ7cNdry)

In order to grok how a compiler reads code, it is helpful to think of the language you’re using to read this article: English. We’ve all encountered the glaring red SyntaxError in our development consoles, but as we’ve scratched our heads, searching for the missing semicolon, we’ve

probably never stopped to think about Noam Chomsky. Chomsky defines syntax as:

>“the study of principles and processes by which sentences are constructed in particular languages.”

We’ll call our “built-in” `simplify()` function on Noam Chomsky’s definition.
```javascript
simplify(quote, "grossly")
//Result: Languages order their words differently.
```
Of course, Chomsky was referring to languages like German and Swahili rather than JavaScript and Ruby. Nevertheless, high level programming languages are patterned off of the languages we speak. Essentially, JavaScript compilers have been “taught” to read JavaScript by savvy engineers, just as our parents and teachers have trained our brain to read sentences.

There are three areas of linguistic study that we can observe in relation to compilers: lexical units, syntax, and semantics. In other words, the study of the meaning of words and their relations, the study of the arrangement of words, and the study of sentence meanings(we’ve limited the definition of semantics to suit our purpose).

Take this sentence: We  ate beef.

#### lexical unit

Notice how each word in the sentence can be broken down into units of lexical meaning: We/ate/beef

#### syntax

That basic sentence syntactically follows the Subject/Verb/Object agreement. Let us assume that this is how every English sentence must be constructed. Why? Because compilers must work according to strict guidelines in order to detect syntax errors. So, Beef we ate, though understandable, will be incorrect in our oversimplified English.

#### semantics

Semantically, the sentence has proper meaning. We know that multiple people have eaten beef in the past. We can strip it of meaning by rewriting the sentence as, We+ beef ate.

Now, let’s translate our original English sentence into a JavaScript expression.
```javascript
let sentence = “We ate beef”;
```
#### lexical unit

Expressions can be broken down into lexemes: let/sentence/=/ “We ate beef”/;

#### syntax

Our expression, like a sentence, must be syntactic. JavaScript, along with most other programming languages, follows the (Type) /Variable/ Assignment/Value order. Type is applicable based on context. If you’re as bothered as we are by the looseness of type declaration, you can simply add “use strict”; to the global scope of your program. “use strict”; is an overbearing grammarian that enforces JavaScript’s syntax. The benefits of using it outweigh the nuisances. Trust us.

#### semantics

Semantically, our code has meaning that our machines will eventually understand via the compiler. In order to achieve semantic meaning from code, the compiler must read code. We’ll delve into that in the next section.

Note: Context differs from scope. Explaining further would go beyond the “scope” of this article.

### LHS/RHS

We read English from left to right while the compiler reads code in both directions. How? With Left -Hand-Side(LHS) look-ups and Right-Hand-Side (RHS) look-ups. Let’s break them down.

LHS look-ups focus are the “left hand side” of an assignment. What this really means is that it is responsible for the target of the assignment. We should conceptualize target rather than position because an LHS look-up’s target can vary in its position. Also, assignment does not explicitly refer to the assignment operator.


Check out the example below for clarification:
```javascript
function square(a){
  return a*a;
}
square(5);
```
  
The function call triggers an LHS lookup for a. Why? Because passing 5 as an argument implicitly assigns value to a. Notice how the target can’t be determined by positioning at first glance and must be inferred.

Conversely, RHS look-ups focus on the values themselves. So if we go back to our previous example, an RHS lookup will find the value of a in the expression a*a.

It is important to keep in mind that these look-ups occur in the last phase of compilation, the code-generation phase. We’ll elaborate further once we get to that stage. For now, let’s explore the compiler.

<h2> The Compiler </h2>

Think of the compiler as a meat processing plant with several mechanisms that grind the code into a package that our computer deems edible or executable. In this example, we will be processing Expression.

![](https://lh6.googleusercontent.com/GMzJu1TubVb_t6gxQw0JyihmBemEeTfiu6z8nB6veoi-z5CDjjRwwnh4m0ml8aySBk70qWjR0ZzR9MKRcAD-Up3K10A6Xt1Yu7dWkfca7mEQv5TEBv73aLnYOVH0BPZqe-t-WLRM)

<h3> Tokenizer </h3>

First, the tokenizer dissects code into units called tokens.

![](https://lh3.googleusercontent.com/wtBhuVrkKCehldP-P3_l-ymqOtvQ4en5JLOk09lwrMa3QYtUwqxfrvS2e2Q71kfzia1cMCZX1f3sgXDJhRF-peZNwHTB6zOuD8o-bWvlIQ6Uz4UuuIBZH358ZXAlprp5pzg-cF5U)

These tokens are then identified by the tokenizer. A lexical error will occur when the tokenizer finds an “alphabet” that does not belong to the language. Remember, this is different from a syntactical error.

 For example, if we had used an @ symbol instead of an assignment operator, the tokenizer would’ve seen that @ symbol and said, “Hmmm…This lexeme is not found within JavaScript’s lexicon… SHUT EVERYTHING DOWN. CODE RED.”

 
>Note: If this same system is able to make associations between one token and another token, and then group them together like a parser, it will be considered a lexer.

![](https://lh6.googleusercontent.com/15Rq8K70WhkPbGTXkLIGWbWbFWxawHU4jgjQatI5Kq4rqWnonYvuufJC7lGvdlAyyKFowwdN4s_Aw2YUgNU96Jg4uw4wAmelu6HiAlG3BD37QnmXjWpJBO6fks49pbjP1LPRQ1DW)

<h3>  Parser </h3>

The parser looks for syntactical errors. If there are no errors, it packages the tokens into a data structure called a Parse Tree. At this point in the compilation process, the JavaScript code is considered to be parsed and is then semantically analyzed. Once again, if the rules of JavaScript are followed, a new data structure called an Abstract Syntax Tree(AST) is produced.

![](https://lh6.googleusercontent.com/wHBbaqTJFujOZbwy1lL2GwCZ1N3iJyolUaSjc53O_v0IFlEaO-bE1Ks_fZ9IeS8Rq3EWPOpN6Jp0xV5wcqAGjHFDYs2-KBe8Wl0HwWztuqtK6IEgJSwNeI43JZBQQ0E_sTaGxlyC)

 

There is an intermediary step where the source code is transformed into intermediate code — usually bytecode — by an interpreter, statement by statement. The bytecode is then executed within a virtual machine.

Afterwards, the code is optimized. This involves the removal of white space, dead code, and redundant code, among many other optimization processes.

 
<h3> Code-Generator </h3>

Once the code is optimized, the code-generator’s job is to take the intermediate code and turn it into a low level assembly language that a machine can readily understand. At this juncture, the generator is responsible for:

(1) making sure that the low level code retains the same instructions as the source code

(2) mapping bytecode to the target machine

(3) deciding whether values should be stored in register or memory and where values should be retrieved.

Here is where a code-generator performs LHS and RHS look-ups. Simply put, an LHS look-up writes to memory the target’s value and an RHS look-up reads value from memory.

If a value is stored in both cache and register, the generator will have to optimize by taking the value from register. Taking values from memory should be the least preferred method.

(4) And deciding the order in which instruction should be executed.

![](https://lh3.googleusercontent.com/rE_MGLF7TdQq06JZNUDozCNLthGZFXfZg0DqoybHbOV4JMuONRoFWYdyvIKDrhEMnbXYCj0lM99HwZEiACKxNkqIXup671FxBkX6eVW7sFeeDMtaO2bxv3oXbiUxOrefytntBWU9)

<h3> Final Thoughts </h3>

One other way to understand JavaScript’s engine is to look at your [brain](https://www.brainson.org/books-how-theyre-made-and-how-your-brain-reads-them/). As you’re reading this, your brain is fetching data from your retina. This data, transferred by your optic nerve, is an inverted version of this web page. Your brain compiles the image by flipping it so that it is interpretable.


Beyond just flipping images and colorizing them, your brain can fill in blank spaces based on its ability to recognize patterns, like a compiler’s ability to read values from cached memory.

So if we write, please give us a round of ______,you should easily be able to execute that code.
