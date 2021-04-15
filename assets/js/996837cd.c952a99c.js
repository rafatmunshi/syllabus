(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),r=(n(0),n(269)),c=n(270),l={id:"lesson",title:"JavaScript Core II - 3",sidebar_label:"Lesson"},s={unversionedId:"js-core-2/week-3/lesson",id:"js-core-2/week-3/lesson",isDocsHomePage:!1,title:"JavaScript Core II - 3",description:"Contents",source:"@site/docs/js-core-2/week-3/lesson.md",slug:"/js-core-2/week-3/lesson",permalink:"/js-core-2/week-3/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-2/week-3/lesson.md",version:"current",sidebar_label:"Lesson",sidebar:"JavaScriptCore2",previous:{title:"Instructor Notes",permalink:"/js-core-2/week-2/instructors"},next:{title:"Coursework",permalink:"/js-core-2/week-3/homework"}},i=[{value:"Contents",id:"contents",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Synchronous and Asynchronous programming",id:"synchronous-and-asynchronous-programming",children:[{value:"A real life example",id:"a-real-life-example",children:[]},{value:"A Javascript example",id:"a-javascript-example",children:[]},{value:"Exercise (1)",id:"exercise-1",children:[]}]},{value:"The Callstack",id:"the-callstack",children:[]},{value:"Callbacks",id:"callbacks",children:[{value:"Exercise (2)",id:"exercise-2",children:[]},{value:"Exercise (3)",id:"exercise-3",children:[]}]},{value:"How does the web work?",id:"how-does-the-web-work",children:[{value:"Client/Server architecture",id:"clientserver-architecture",children:[]},{value:"HTTP Requests",id:"http-requests",children:[]},{value:"The Network Tab",id:"the-network-tab",children:[]}]},{value:"Coursework",id:"coursework",children:[]},{value:"JavaScript 2 Quiz",id:"javascript-2-quiz",children:[]},{value:"Feedback",id:"feedback",children:[]}],b={toc:i};function u(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"contents"},"Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#synchronous-and-asynchronous-programming"},"Synchronous and Asynchronous programming"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#a-real-life-example"},"A real life example")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#a-javascript-example"},"A Javascript example")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#the-callstack"},"The Callstack")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#callbacks"},"Callbacks"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#exercise-1"},"Exercise (1)")))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#how-does-the-web-work"},"How does the web work?"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#clientserver-architecture"},"Client/Server architecture")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#http-requests"},"HTTP Requests"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#exercise-2"},"Exercise (2)"))))))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("p",null,"By the end of this lesson trainees should be able to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define the difference between synchronous and asynchronous code"),Object(r.b)("li",{parentName:"ul"},"Describe why writing asynchronous code is important when working with the internet"),Object(r.b)("li",{parentName:"ul"},"Write code that is able to pass a function to another function as a parameter and run it"),Object(r.b)("li",{parentName:"ul"},"Use callbacks to run code at some point in the future"),Object(r.b)("li",{parentName:"ul"},"Define a client's and server's role in the client/server architecture"),Object(r.b)("li",{parentName:"ul"},"Describe the difference between a GET and POST request"),Object(r.b)("li",{parentName:"ul"},"Explain how resources are loaded on the internet using GET and POST"),Object(r.b)("li",{parentName:"ul"},"List the steps that a browser does when loading a website from the internet")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"synchronous-and-asynchronous-programming"},"Synchronous and Asynchronous programming"),Object(r.b)("p",null,"In a synchronous programming model, tasks run one at a time. When a long running action starts, the program waits for it to finish and return the result before it moves to the next action."),Object(r.b)("p",null,"Asynchronous programming allows multiple actions to happen at the same time. When a long running action starts, the program can continue to run. When the action finishes the program will get notified and get access to the result returned."),Object(r.b)("img",{src:n(470).default}),Object(r.b)("h3",{id:"a-real-life-example"},"A real life example"),Object(r.b)("p",null,"An example of this in real life, are phone calls and text messages."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Phone calls are ",Object(r.b)("inlineCode",{parentName:"li"},"synchronous")," because you can't (really) do anything while the\nother person is speaking. You are always waiting for your turn to respond"),Object(r.b)("li",{parentName:"ul"},"Text messages are ",Object(r.b)("inlineCode",{parentName:"li"},"asynchronous"),". When you send a text, you can go away and do\nsomething else, until the other person responds.")),Object(r.b)("h3",{id:"a-javascript-example"},"A Javascript example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'//synchronous\nconsole.log("First action");\nconsole.log("Second action");\nconsole.log("Third action");\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'//asynchronous\nconsole.log("First action");\nsetTimeout(function () {\n  console.log("Second action");\n}, 1000);\nconsole.log("Third action");\n')),Object(r.b)("h3",{id:"exercise-1"},"Exercise (1)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const greekGods = [\n  "Aphrodite",\n  "Ares",\n  "Artemis",\n  "Athena",\n  "Poseidon",\n  "Zeus",\n];\n\n// before running the code in your browser, discuss the expected order of each loop\n\n// synchronous - loop through the array of greek gods and print the index numbers and values to the console, e.g. \'1. Ares\'\n\n// asynchronous - same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()\n')),Object(r.b)("h2",{id:"the-callstack"},"The Callstack"),Object(r.b)("p",null,"How does JavaScript 'know' what order its code should be run in?"),Object(r.b)("p",null,"JavaScript is a single-threaded language, which means that normally it can handle one task at a time or a piece of code at a time. It orders what it needs to do using something called the ",Object(r.b)("inlineCode",{parentName:"p"},"call stack"),"."),Object(r.b)("p",null,'The call stack is a data structure that works by the "Last in, First out" principle (LIFO) to store and run functions. Whenever you call a function, it gets pushed onto the stack, and when the function returns, it is popped off of the call stack.'),Object(r.b)("p",null,"This is why when you get an error in Javascript, you may see multiple lines with line numbers in the error, like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ node my.js\n/home/dwh/my.js:2\n    console.log(message);\n                ^\n\nReferenceError: message is not defined\n    at logSomething (/home/dwh/my.js:2:17)\n    at computeSomething (/home/dwh/my.js:6:5)\n    at Object.<anonymous> (/home/dwh/my.js:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)\n    at startup (internal/bootstrap/node.js:266:19)\n")),Object(r.b)("p",null,"This error happened because of a problem in the ",Object(r.b)("inlineCode",{parentName:"p"},"logSomething")," function on line 2, which was called by the ",Object(r.b)("inlineCode",{parentName:"p"},"computeSomething")," function on line 6, and so on. Each line represents one entry on the call stack."),Object(r.b)("p",null,"Since there is only one call stack in Javascript, function execution is done one at a time from top to bottom. This means that the last function that gets pushed into the call stack is always the one to be executed when the call stack is popped. Think of it like pushing to, and popping from, an array; it's always the last item of the array that is affected."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"http://latentflip.com/loupe/"},"Let's use this tool to see how the Callstack works!"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"So, how to the ",Object(r.b)("inlineCode",{parentName:"p"},"call stack")," and ",Object(r.b)("inlineCode",{parentName:"p"},"asynchronous")," work together? Asynchronous programming essentially helps us to make JavaScript act like a multi-threaded language -- although JavaScript only has a single call stack managing function execution, coding our JavaScript asynchronously means that we can have several functions executing at the same time.")),Object(r.b)("h2",{id:"callbacks"},"Callbacks"),Object(r.b)("p",null,"We have already seen callback functions - in the Array methods ",Object(r.b)("inlineCode",{parentName:"p"},"forEach"),", ",Object(r.b)("inlineCode",{parentName:"p"},"map"),", ",Object(r.b)("inlineCode",{parentName:"p"},"filter")," etc. They are functions that are passed as parameter to another function."),Object(r.b)("p",null,"In order to achieve asynchronicity, callbacks can be passed on functions that perform a slow action. By doing so, the callback function can be called with the result.\nThis allows you to run some other code while you're waiting for something to finish."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function finished() {\n  console.log(\"The task has finished\");\n}\n\nfunction thingThatTakesALongTime(callbackFunction) {\n  //... Task that takes a long time to complete\n\n  callbackFunction(); // This is where the 'console.log' happens\n}\n\n// Pass the function to 'thingThatTakesALongTime' just like a normal variable\nthingThatTakesALongTime(finished);\n")),Object(r.b)("p",null,"A simple example of an asynchronous function is ",Object(r.b)("inlineCode",{parentName:"p"},"setTimeout"),". This allows you to run a function after a given time period. The first argument is the function you want to run, the second argument is the ",Object(r.b)("inlineCode",{parentName:"p"},"delay")," (in milliseconds)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'// Separate function definition\nfunction myCallbackFunction() {\n  console.log("Hello world!");\n}\nsetTimeout(myCallbackFunction, 1000);\n\n// Inline function\nsetTimeout(function () {\n  console.log("Hello world!");\n}, 500);\n')),Object(r.b)("p",null,"Now let's use a timeout and a callback function together:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'function mainFunction(callback) {\n  console.log("Starting!");\n  setTimeout(function () {\n    callback();\n  }, 1000);\n  console.log("Continuing!");\n}\nfunction myCallbackFunction() {\n  console.log("Finished!");\n}\nmainFunction(myCallbackFunction);\n')),Object(r.b)("h3",{id:"exercise-2"},"Exercise (2)"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds)."),Object(r.b)("li",{parentName:"ul"},"Update your code to make the colour change ",Object(r.b)("em",{parentName:"li"},"every")," 5 seconds to something different. Hint: try searching for ",Object(r.b)("inlineCode",{parentName:"li"},"setInterval"),".")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("img",{parentName:"p",src:"http://g.recordit.co/g2EqBccNzh.gif",alt:null})),Object(r.b)("p",{parentName:"blockquote"},"Complete the exercises in this ",Object(r.b)("a",{parentName:"p",href:"https://codepen.io/makanti/pen/abOreLg?editors=1011"},"CodePen"))),Object(r.b)("h3",{id:"exercise-3"},"Exercise (3)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Complete the exercises in this ",Object(r.b)("a",{parentName:"p",href:"https://codepen.io/textbook/pen/MWwMgmW?editors"},"CodePen")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"You are given a list of movie objects to work with",Object(r.b)("br",null)),Object(r.b)("li",{parentName:"ul"},"Use setTimeout to imitate that some actions take time"),Object(r.b)("li",{parentName:"ul"},"Remember that setTimeout behaves asynchronously")),Object(r.b)("p",{parentName:"blockquote"},"All set, go! Work on the tasks given. Your result html will look like this:"),Object(r.b)("img",{alt:"preview-exercise-2-result",src:"https://i.imgur.com/wbrtLNL.png",width:"500"})),Object(r.b)("h2",{id:"how-does-the-web-work"},"How does the web work?"),Object(r.b)("h3",{id:"clientserver-architecture"},"Client/Server architecture"),Object(r.b)("img",{src:n(471).default}),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Client")," is the typical web user's internet-connected devices and apps. This can be a web browser, a Slack app, your phone, etc."),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Server")," is a computer or program that manages access to resources such as webpages, sites, or apps."),Object(r.b)("p",null,"There are database servers, mail servers, game servers, etc. The vast majority of these servers are accessed over the internet. They can take the form of industrial server farms that provide a service to millions of users (used by Facebook, Google, etc.), to personal servers for storing your files."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"server")," communicates with ",Object(r.b)("strong",{parentName:"p"},"clients"),"."),Object(r.b)("p",null,"Client\u2013server systems use the ",Object(r.b)("strong",{parentName:"p"},"request\u2013response")," model: a client sends a request to the server, which performs some action and sends a response back to the client, typically with a result or acknowledgement."),Object(r.b)("img",{src:n(472).default}),Object(r.b)("h3",{id:"http-requests"},"HTTP Requests"),Object(r.b)("p",null,"A server stores the data, and the client (other programs or computers) requests data or sends some of its own. But how do they talk to each other?"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For the client and the server to communicate they need an established language (a protocol)"),". Which is what HTTP (Hypertext Transfer Protocol) is for. It defines the methods you can use to communicate with a server and indicate your desired actions on the resources of the server."),Object(r.b)("p",null,"There are two main types of requests: ",Object(r.b)("strong",{parentName:"p"},"GET")," and ",Object(r.b)("strong",{parentName:"p"},"POST"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Request type"),Object(r.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"GET"),Object(r.b)("td",{parentName:"tr",align:"center"},"Ask for a specified resource (e.g. show me that photo)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"POST"),Object(r.b)("td",{parentName:"tr",align:"center"},"Send content to the server (e.g. post a photo)")))),Object(r.b)("p",null,"HTTP is the language of the internet. In our case we're using Javascript, but you can send HTTP requests with other languages as well."),Object(r.b)("h3",{id:"the-network-tab"},"The Network Tab"),Object(r.b)("p",null,"The network tab is a useful tool that helps us understand how content is loaded on a website."),Object(r.b)("p",null,"You can view it by ",Object(r.b)("inlineCode",{parentName:"p"},"Right Click")," > ",Object(r.b)("inlineCode",{parentName:"p"},"Inspect")," > ",Object(r.b)("inlineCode",{parentName:"p"},"Network"),"."),Object(r.b)("p",null,"Take some time to look at the network tab when we open ",Object(r.b)("a",{parentName:"p",href:"/js-core-2/week-3/lesson"},"this lesson"),"."),Object(r.b)("p",null,"The important parts of the the Network Tab are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/network#load"},"Network Log")),Object(r.b)("li",{parentName:"ul"},"Timeline View"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/network#details"},"Resource Details"))),Object(r.b)("h4",{id:"exercise---get-requests"},"Exercise - GET Requests"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Let's take a look at GET requests in the Browser."),Object(r.b)("p",{parentName:"blockquote"},"Look at this repository here:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/CodeYourFuture/Network-Tab-Example"},"https://github.com/CodeYourFuture/Network-Tab-Example"))),Object(r.b)("p",{parentName:"blockquote"},"In your groups, you should try to work out what you expect to see in the Network tab when we look at it. You should create a list of the requests that will be made in this format."),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"You are not allowed to open the website in a browser")),Object(r.b)("p",{parentName:"blockquote"},"e.g."),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"GET index.html"),Object(r.b)("li",{parentName:"ol"},"GET format.de"),Object(r.b)("li",{parentName:"ol"},"GET otherfile.se"),Object(r.b)("li",{parentName:"ol"},"...")),Object(r.b)("p",{parentName:"blockquote"},"When you have completed the list you should share it on Slack"),Object(r.b)("p",{parentName:"blockquote"},"You can see the website online here"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://codeyourfuture.github.io/Network-Tab-Example/"},"https://codeyourfuture.github.io/Network-Tab-Example/"))),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Extra")),Object(r.b)("p",{parentName:"blockquote"},"Go to your favorite website and take a look at the Network tab. Can you work out what each (or any) of the requests are doing?"),Object(r.b)("p",{parentName:"blockquote"},"Warning! There will be ",Object(r.b)("strong",{parentName:"p"},"a lot")," of requests made on complicated websites.")),Object(r.b)("h4",{id:"exercise---post-requests"},"Exercise - POST Requests"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Let's take a look at POST requests in the Browser."),Object(r.b)("p",{parentName:"blockquote"},"You can see the website online here"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://codeyourfuture.github.io/Network-Tab-Example/"},"https://codeyourfuture.github.io/Network-Tab-Example/"))),Object(r.b)("p",{parentName:"blockquote"},"At the bottom of the page you will see a series of buttons. When you click a button on the website it will send a POST request to a server."),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Using only the Network tab")," work out which button is sending a post request."),Object(r.b)("li",{parentName:"ol"},"What is in the ",Object(r.b)("inlineCode",{parentName:"li"},"body")," of the post request?")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Extra")),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"Did the ",Object(r.b)("inlineCode",{parentName:"li"},"POST")," request succeed?"),Object(r.b)("li",{parentName:"ol"},"Using the Details Panel, can you work out why?"))),Object(r.b)("h2",{id:"coursework"},"Coursework"),Object(r.b)("p",null,"Click ",Object(r.b)("a",{parentName:"p",href:"./homework"},"here")," to view the coursework for this lesson."),Object(r.b)("h2",{id:"javascript-2-quiz"},"JavaScript 2 Quiz"),Object(r.b)("p",null,"An optional quiz can be found ",Object(r.b)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSfMCZZkEWexs_7PbuRMpUPXqjjyXv814mhl3OikBv39QsqKSg/viewform"},"here")," which can be used to test trainees understanding. This can be done in class or set as homework."),Object(r.b)("h2",{id:"feedback"},"Feedback"),Object(r.b)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers."),Object(r.b)(c.a,{module:"JavaScript Core 2",week:"Week 3",mdxType:"Feedback"}))}u.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?o.a.createElement(m,l(l({ref:t},i),{},{components:n})):o.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a);n(57);function r(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return o.a.createElement("div",{className:"feedback"},o.a.createElement("div",{className:"feedback__wrapper"},o.a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),o.a.createElement("center",null,o.a.createElement("p",null,"Not loading? Form can be found"," ",o.a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",o.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},470:function(e,t,n){"use strict";n.r(t),t.default=n.p+"683b9851f8ff4dc34c7d2107c81780e0.jpg"},471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"6f0fd584d2a54e3bcc0eb596fbcf903b.png"},472:function(e,t,n){"use strict";n.r(t),t.default=n.p+"5eec6ea6ea398c7721c1ab3664804ef2.png"}}]);