'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
*  Deps: ace, acorn, interpreter.js, esprima
**/

/*
*  Helpers
**/


var Node = function Node(el) {
  _classCallCheck(this, Node);

  this.element = el;
  this.next = null;
  this.previous = null;
  this.index = 0;
};

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.length = 0;
    this.tip = null;
    this.head = null;
    this.idxCnt = 0;
  }

  _createClass(LinkedList, [{
    key: "size",
    value: function size() {
      return this.length;
    }
  }, {
    key: "root",
    value: function root() {
      this.head = this.tip;
      return this.head;
    }
  }, {
    key: "current",
    value: function current() {
      return this.head;
    }
  }, {
    key: "add",
    value: function add(el) {
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
  }, {
    key: "next",
    value: function next() {
      if (this.head.next === null) {
        this.head = this.root();
        return this.head;
      }
      this.head = this.head.next;
      return this.head;
    }
  }, {
    key: "prev",
    value: function prev() {
      this.head = this.head.previous;
      return this.head;
    }

    /* Nodes are deleted by pointing prev node to next node */

  }, {
    key: "remove",
    value: function remove(el) {
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
  }, {
    key: "findAt",
    value: function findAt(idx) {
      var _this = this;
      this.root();
      if (idx === 0) {
        return this.root();
      } else if (idx >= this.length) {
        try {
          throw "the last index of this list is" + " " + (this.length - 1) + ".";
        } catch (e) {}
      } else {
        return _.last(_(idx).times(function () {
          return _this.next();
        }));
      }
    }
  }, {
    key: "index",
    value: function index() {
      return this.head.index;
    }
  }, {
    key: "spread",
    value: function spread() {
      var spreadR = this.idxCnt - 1 - this.head.index;
      var spreadL = this.head.index;
      return { right: spreadR, left: spreadL };
    }
  }]);

  return LinkedList;
}();

Array.prototype.copy = function (start, end) {
  return this.filter(function (el, idx) {
    if (idx < end && idx >= start) {
      return [el];
    }
  });
};
Array.prototype.replace = function (arr, start, end) {
  return this.map(function (el, idx, thisArr) {
    if (idx < end && idx >= start) {
      return thisArr[idx] = arr[idx - start];
    }
    return el;
  });
};
Array.prototype.chunk = function (group) {
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
Array.prototype.toGroupList = function (group) {
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
  function rootCheck(){
    if(window.location.pathname === '/')
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  if(rootCheck() === false){

  var editor = ace.edit("lex-editor");
  var $editor = $('#editor');
  var $content = $('#lex-content');
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
       answer: "Too slow. There are six: Numbers, Strings, and Booleans, Sytbols, undefined, and null",
       quip: "Bet you thought there were seven. Objects ain't primitive."
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


   //console.log definition
   var log = console.dir;
   log = function () {
      for (var i = 0; i < arguments.length; i++) {

          if(arguments[i].class  != undefined  && arguments[i].class  == 'Array'){
              $logger.append('<p>' + "[" + arguments[i] + "]" +'</p>');
           }else if(arguments[i].class  != undefined && arguments[i].class  == 'Function') {
              $logger.append('<p>' + "[" + 'Function: ' +  arguments[i].node.id.name + "]" + '</p>');
           }else if(arguments[i].class  != undefined && arguments[i].class  == 'Object') {
              $logger.append( '<p>' + JSON.stringify(arguments[i].properties) + '</p>');
           }
           else if (typeof arguments[i] == 'string') {
              $logger.append('<p>' +  "'" + arguments[i] + "'" + '</p>');
           }
           else if (typeof arguments[i] == 'number') {
              $logger.append('<p>' + arguments[i] + '</p>');
           }
      }
    }

 //Basic Interpreter.js config
  var myInterpreter;
  function initApi(interpreter, scope) {
     var wrapper = function(text){
       return prompt(arguments.length ? text : '');
     }
     interpreter.setProperty(scope, 'prompt',
         interpreter.createNativeFunction(wrapper));

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

          var wrapper = function(func, timer){
        // debugger
           return setTimeout(func, timer);
          }
          interpreter.setProperty(scope, 'setTimeout',
              interpreter.createAsyncFunction(wrapper));

    }

    function removeStrict() {
        return {
            visitor: {
                Program: {
                    exit: function exit(path) {
                        var list = path.node.directives;
                        for(var i=list.length-1, it; i>=0 ; i--){
                            it = list[i];
                            if (it.value.value==='use strict'){
                                list.splice(i,1);
                            }
                        }
                    }

                }
            }
        };
    }
    Babel.registerPlugin('removeStrict', removeStrict);

    function parse(code) {
      try{
        var code = code;
        var babelCode = Babel.transform(code,
           {plugins:[
             'removeStrict',
             'check-es2015-constants',
             'external-helpers',
             'inline-replace-variables',
             'syntax-async-functions',
             'syntax-async-generators',
             'syntax-class-constructor-call',
             'syntax-class-properties',
             'syntax-decorators',
             'syntax-do-expressions',
             'syntax-exponentiation-operator',
             'syntax-export-extensions',
             'syntax-flow',
             'syntax-function-bind',
             'syntax-function-sent',
             'syntax-jsx',
             'syntax-object-rest-spread',
             'syntax-trailing-function-commas',
             'transform-async-functions',
             'transform-async-to-generator',
             'transform-async-to-module-method',
             'transform-class-constructor-call',
             'transform-class-properties',
             'transform-decorators',
             'transform-decorators-legacy',
             'transform-do-expressions',
             'transform-es2015-arrow-functions',
             'transform-es2015-block-scoped-functions',
             'transform-es2015-block-scoping',
             'transform-es2015-classes',
             'transform-es2015-computed-properties',
             'transform-es2015-destructuring',
             'transform-es2015-duplicate-keys',
             'transform-es2015-for-of',
             'transform-es2015-function-name',
             'transform-es2015-instanceof',
             'transform-es2015-literals',
             'transform-es2015-object-super',
             'transform-es2015-parameters',
             'transform-es2015-shorthand-properties',
             'transform-es2015-spread',
             'transform-es2015-sticky-regex',
             'transform-es2015-template-literals',
             'transform-es2015-unicode-regex',
             'transform-es3-member-expression-literals',
             'transform-es3-property-literals',
             'transform-es5-property-mutators',
             'transform-eval',
             'transform-exponentiation-operator',
             'transform-export-extensions',
             'transform-flow-comments',
             'transform-flow-strip-types',
             'transform-function-bind',
             'transform-jscript',
             'transform-object-assign',
             'transform-object-rest-spread',
             'transform-object-set-prototype-of-to-assign',
             'transform-proto-to-assign',
             'transform-react-constant-elements',
             'transform-react-display-name',
             'transform-react-inline-elements',
             'transform-react-jsx',
             'transform-react-jsx-compat',
             'transform-react-jsx-self',
             'transform-react-jsx-source',
             'transform-regenerator',
             'transform-runtime',
           ]
          }).code
        myInterpreter = new Interpreter(babelCode, initApi);
        return true;
      } catch(e){
          $output.css({'color': '#ff2b18'})
          $output[0].innerHTML =  e.message;
          return false;
      }
    }

    function run(code) {
       //Run only if code passes initial parse
       if(parse(code)){
         try{myInterpreter.run();
            $output.css({'color': '#40b0fb'})
           if(myInterpreter.value != undefined && myInterpreter.value.class == 'Array'){
              $output[0].innerHTML = "[" + myInterpreter.value + "]";
           }else if(myInterpreter.value == undefined || myInterpreter.value == true || myInterpreter.value == false|| isNaN(myInterpreter.value) == false){
              $output[0].innerHTML = myInterpreter.value;
           }else if(myInterpreter.value != undefined && myInterpreter.value.class == 'Function') {
              $output[0].innerHTML = "[" + 'Function: ' +  myInterpreter.value.node.id.name + "]";
           }else if(myInterpreter.value != undefined && myInterpreter.value.class == 'Object') {
              $output[0].innerHTML = JSON.stringify(myInterpreter.value.properties);
           }
           else if(myInterpreter.value != undefined && typeof myInterpreter.value == 'string') {
              $output[0].innerHTML = "'" + myInterpreter.value + "'";
           }
         }
         catch(e){
          $output.css({'color': '#ff2b18'})
          $output[0].innerHTML = e.message;
         }
       }
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
  $('.run').on('click', function(){
    if (editorCache[0] == undefined){
      editorCache.push(editor.getValue())
       resetConsole();
       run(editorCache[0]);
    }else{
      editorCache[0] = editor.getValue()
      resetConsole();
      run(editorCache[0]);
    }
  });
  $runButton.on("click", function(){
    // debugger
    if (editorCache[0] == undefined){
      editorCache.push(editor.getValue())
       resetConsole();
       run(editorCache[0]);
    }else{
      editorCache[0] = editor.getValue()
      resetConsole();
      run(editorCache[0]);
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

/*
*   Ace Editor  configuration
**/
var classicView;
var $link = $('.link');
var $classicBtn = $('#classic');
var $codeBucket = $('.code-bucket');
var $lexBtn     = $('#lex');
var $lexEditor   = $('.lex-editor');
var $classicEditor   = $('.classic-editor');
var $fpContainer = $('.fp-container');
var $stickyNav = $('.s-nav');
var $wContainer  = $('.w-container');
var currentCode = '';
var margins = ['20px', '70px'];
var clicks = -1;
//Toggling Classic and Lex view
function bodyOrHtml(){
  if ('scrollingElement' in document) {
    return document.scrollingElement;
  }
  // Fallback for legacy browsers
  if (navigator.userAgent.indexOf('WebKit') != -1) {
    return document.body;
  }
  return document.documentElement;
}

function marginFix(arr){
    ++clicks;
    if(clicks > arr.length - 1){
      return arr[arr.length - 1];
    }
    return arr[clicks];
  }

  function classicDisplay(){
    $fpContainer.css({display: 'none'});
    $wContainer.css({display: 'block'});
    $stickyNav.css({position: 'fixed'});
    $lexBtn.css({display: 'block'});
    $codeBucket.css({'margin-top': marginFix(margins)});
    currentCode = editor.getValue();
    editor = ace.edit('classic-editor');
    $runButton = $('.run');
    $output  = $('.classic-output');
    setupEditor();
  }

  function lexDisplay(){
    bodyOrHtml().scrollTop = 0;
    $fpContainer.css({display: 'block'});
    $wContainer.css({display: 'none'});
    $stickyNav.css({position: 'relative'});
    $lexBtn.css({display: 'none'});
    currentCode = editor.getValue();
    editor = ace.edit('lex-editor');
    $runButton = $('#run');
    $output = $('.output');
    setupEditor();
  }

  $(window).on('load', function(){
    if(localStorage.getItem('classicView') === "true"){
      classicDisplay();
    }else {
      lexDisplay();
    }
  });
  // console.log($link)
  // $link.on('click', function(e){
  //   e.preventDefault();
  //   debugger
  // });

  $classicBtn.on('click', function(){
      localStorage.setItem('classicView',  'true');
      classicDisplay();
  });

  $lexBtn.on('click', function(){
      localStorage.setItem('classicView',  'false');
      lexDisplay();
  });

  function setupEditor(){
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setValue(currentCode, 1);
    editor.getSession().on('change', function(){
      update();
    });
    editor.focus();
    editor.setOptions({
      fontSize: '15pt',
      fontFamily: 'monospace',
      showLineNumbers: true,
      cursorStyle: "slim",
      useWrapMode: true,   // wrap text to view
      indentedSoftWrap: false,
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


/* toDo Draggable Interface */
//
// $editor.draggable({
//   cursor: 'move',
//   snap: true,
//   snapTolerance: 5,
//   stack: '#iframe, #lex-content'
// })
// $content.draggable({
//   cursor: 'move',
//   snap: true,
//   snapTolerance: 5,
//   stack: '#iframe, #editor'
// })
// $('#iframe').draggable({
//   cursor: 'move',
//   snap: true,
//   snapTolerance: 5,
//   stack: '#lex-content, #editor'
// });

    ready();
  }
})()
