'use strict';

/*
*  Deps: ace, acorn, interpreter.js, esprima
**/


/*
*  Helpers
**/
class Node {
    constructor(el) {
      this.element = el;
      this.next = null;
      this.previous = null;
      this.index = 0;
    }
  }
  class LinkedList {
    constructor() {
      this.length = 0;
      this.tip = null;
      this.head = null;
      this.idxCnt = 0;
    }

    size() {
      return this.length;
    }

    root() {
      this.head = this.tip;
      return this.head;
    }

    current() {
      return this.head;
    }

    add(el) {
      var node = new Node(el);
      var currentNode;
      if (this.tip === null) {
        this.tip = node;
        this.head = node;
      } else {
        currentNode = this.head;
        /* Hop to the last node */
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        // currentNode.prev = currentNode;
        node.index = this.idxCnt;
        node.previous = currentNode;
        currentNode.next = node;
        // previousNode.previous = previousNode;
      }
      this.idxCnt++;
      this.length++;
    }

    next() {
       if(this.head.next === null){
       this.head = this.root();
       return this.head;
     }
      this.head = this.head.next;
      return this.head;
    }

    prev() {
      this.head = this.head.previous;
      return this.head;
    }

    /* Nodes are deleted by pointing prev node to next node */
    remove(el) {
      var currentNode = this.head;
      var previousNode;
      if (currentNode.element === el) {
        currentNode.next = this.head;
      } else {
        while (currentNode.element !== el) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
      this.length--;
    }

    findAt(idx) {
      this.root();
      if (idx === 0) {
        return this.root();
      } else if (idx >= this.length) {
        try {
          throw "the last index of this list is" +
            " " +
            (this.length - 1) +
            ".";
        }catch(e){

        }
      } else {
        return _.last( _(idx).times(() => {
            return this.next();
          }));
      }
    }

    index(){
      return this.head.index;
    }

    spread(){
      var spreadR = (this.idxCnt - 1) - this.head.index;
      var spreadL = this.head.index;
      return {right: spreadR, left: spreadL};
    }
  }


  Array.prototype.copy = function(start, end) {
    return this.filter((el, idx) => {
      if (idx < end && idx >= start) {
        return [el];
      }
    });
  };
  Array.prototype.replace = function(arr, start, end) {
    return this.map((el, idx, thisArr) => {
      if (idx < end && idx >= start) {
       return thisArr[idx] = arr[idx - start] ;
      }
      return el;
    });
  };
  Array.prototype.chunk = function(group) {
    var narr = [];
    var count = 0;
    var groupcnt = group;

    while (count < this.length) {
      narr.push(this.copy(count, groupcnt));
      count = count + group;
      groupcnt = groupcnt + group;
    }
    return narr;
  };
  Array.prototype.toGroupList = function(group) {
    var count = 0;
    var groupcnt = group;
    var list = new LinkedList();
    while (count < this.length) {
      list.add(this.copy(count, groupcnt));
      count = count + group;
      groupcnt = groupcnt + group;
    }
    return list;
  };


(function(){


  var editor = ace.edit("editor");
  var $bugContainer = $('.bug-report');
  var $bugReport = $('.bug-report p');
  var $output  = $('.output');
  var $runButton = $('#run');
  var $talkButton = $('#talk');
  var $parseButton = $('#parse');
  var $speechBubble = $('.speech-bubble');
  var $speechText = $('.speech-bubble p')[0];
  var $logger = $('.log');
  var lexSpeech = {
    calls: [
      ["Hey, I wanna ask you something."],
      ["Wazzup, just your friendly neigborhood dog."],
      ["Hear me out, wide eyed explorer"],
      ["You're going to be a front end dev, ya know that?"],
      ["Hiya! I meant to say hi, not perform a karate chop."],
      ["You lookin' at me? You lookin' at me?"],
      ["Answer this before I open up a can of sardines."],
      ["I'm Groot...kidding I'm Lex."],
      ["I'm fluffy on the outside, smooth and cool on the inside"],
      //advanced speech pattern
      ["So, sky's pretty grey, me being color blind and all.",
      "Ok..that was bleak...",
       "anyways..."],
      ],
    variables: [
      {
       question: "How many primitive datatypes are there in Javascript?",
       answer: "Too slow. There are three: Numbers, Strings, and Booleans",
       quip: "Bet you didn't know that."
      },
      {
       question: "What type of data is object?",
       answer: "Composite data. Get it?",
       quip:"Got a bone or something? Cuz I ain't got one to give."

      },
      {
       question: "Riddle me this. What are two trivial data types in JS?",
       answer: "null and undefined",
       quip:"I don't speak human, so can't tell by our face if you knew that or not"

      },
       {
       question: "Does JavaScript make a big fuss over integers and floats?",
       answer: "Nah. All numbers float my boat.",
       quip:"Geez...tough crowd."
      },
      {
       question: "Does JavaScript make a big fuss over integers and floats?",
       answer: "Nah. All numbers float my boat.",
       quip:"Geez...tough crowd."
      },
      {
        question: "How do you initialize a variable?",
        answer: "var madMoney = 'baller'",
        quip: "Now that's what I'm talking about"
      },
      {
        question: "How do you initialize a variable?",
        answer: "var madMoney = 'baller'",
        quip: "Now that's what I'm talking about"
      },
       {
        question: "How do you declare a variable?",
        answer: "var I, Love, U;",
        quip: "Ain't that sweet. I declared variable Valentine."
      },
       {
        question: "Which one passes the sniff test? _12Code or 12Code?",
        answer: "_12Code does. Can't begin a variable with a number.",
        quip: "That underscore's still pretty funky huh? Ah well, that's JavaScript."
      },

      {
        question: "What's the difference between a global and local var?",
        answer: "I can't see your tush with you in your local bathroom, but you can see mine when I'm out in the street. Variables are the same.",
        quip: "Yeah this whole Facebook privacy thing's effecting us dogs too."
      },

    ],

    limit: 1,
  }
  var variablesQuiz = lexSpeech.variables;
  var groupSpeech = lexSpeech.variables.toGroupList(lexSpeech.limit);
  var groupCalls = lexSpeech.calls.toGroupList(1);

 //Run the instruction
  $talkButton.on("click", function(){
    speechInterval(2500,7000,12500,17000);
  });
  //Run the interpreter
  var editorCache = [];
  $runButton.on("click", function(){
    if (editorCache[0] == undefined){
      editorCache.push(editor.getValue())
       resetConsole();
       run();
    } else if(editorCache[0] == editor.getValue()) {
      return;
    } else{
      editorCache[0] = editor.getValue()
      resetConsole();
      run();
    }


  });

  function resetConsole(){
    $logger[0].innerHTML = '';
  }
 //Switches speech types every few seconds
  function speechInterval(qtime,atime,ktime,fintime ){
    $speechText.innerHTML = groupCalls.head.element[0][0];
    $speechBubble.toggle();
    setTimeout(function(){
     $speechText.innerHTML = groupSpeech.head.element[0].question;
    }, qtime);
    setTimeout(function(){
     $speechText.innerHTML = groupSpeech.head.element[0].answer;
    }, atime);
    setTimeout(function(){
     $speechText.innerHTML = groupSpeech.head.element[0].quip;
    }, ktime);
    setTimeout(function(){
      groupCalls.next();
      groupSpeech.next();
      $speechText.innerHTML = '';
      $speechBubble.toggle();
    },fintime);
  }

  //Update esprima with new data to parse on user input
  function update() {
    try{
      esprima.parseScript(editor.getValue());
      if($bugContainer.css('display') != 'none'){
        $bugContainer.css({'display': 'none'})
      }
    }catch(e){
      $bugReport[0].innerHTML = e.message;
      $bugContainer.css({'display': 'flex'})
    }
  }

//Basic Ace JavaScript configuration
  function setupEditor(){
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setValue(`var java = "noob"`, 1);
    editor.getSession().on('change', function(){
      update();
    });
    editor.focus();
    editor.setOptions({
      fontSize: '15pt',
      showLineNumbers: true,
      cursorStyle: "slim",
      useSoftTabs: true,
      tabSize: 20,
        navigateWithinSoftTabs: true
    });
  }

  function ready(){
    setupEditor();
    update();
  }

  const customStringify = function (v) {
  const cache = new Map();
  return JSON.stringify(v, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.get(value)) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our map
      cache.set(value, true);
    }
    return value
  });
};

   var log = console.dir

   log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            var obj = customStringify(arguments[i])
            var nobj = JSON.parse(obj);
            var prop = nobj.properties
            $logger[0].innerHTML += customStringify(prop);
        } else {
            $logger.append('<p>' + arguments[i] + '</p>');        
        }
      }
    }

 //Basic Interpreter.js config
  var myInterpreter;

   function initApi(interpreter, scope) {
      var wrapper = function(text) {
        return alert(arguments.length ? text : '');
      };
      interpreter.setProperty(scope, 'alert',
          interpreter.createNativeFunction(wrapper));

       var wrapper = function(text) {
        return log(arguments.length ? text : '');
      };

       interpreter.setProperty(scope, 'log',
          interpreter.createNativeFunction(wrapper));
    }

    function parse() {
      try{
        var code = editor.getValue();
        myInterpreter = new Interpreter(code, initApi);

        return true;
      } catch(e){
          $output.css({'color': '#ff2b18'})
          $output[0].innerHTML =  e.message;
          return false;
      }
    }

    function run() {

       var re =  /(,)+/;

       var arrReg = new RegExp(re);
       //Run only if code passes initial parse
       //Improve output by checking type
       if(parse()){
         try{myInterpreter.run();
            $output.css({'color': '#40b0fb'})
           if(arrReg.test(myInterpreter.value)){
              $output[0].innerHTML = "[" + myInterpreter.value + "]";
           }else if(myInterpreter.value == undefined || myInterpreter.value == true || myInterpreter.value == false|| isNaN(myInterpreter.value) == false){
              $output[0].innerHTML = myInterpreter.value;
           }else {
              $output[0].innerHTML = "'" + myInterpreter.value + "'";
           }
         }
         catch(e){
          $output.css({'color': '#ff2b18'})
          $output[0].innerHTML = e.message;
         }
       }
    }

    ready();

})()
