(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{204:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(8),r=(a(0),a(269)),i=a(270),l={id:"lesson",title:"JavaScript Core III - 2",sidebar_label:"Lesson"},c={unversionedId:"js-core-3/week-2/lesson",id:"js-core-3/week-2/lesson",isDocsHomePage:!1,title:"JavaScript Core III - 2",description:"Learning Objectives",source:"@site/docs/js-core-3/week-2/lesson.md",slug:"/js-core-3/week-2/lesson",permalink:"/js-core-3/week-2/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/week-2/lesson.md",version:"current",sidebar_label:"Lesson",sidebar:"JavaScriptCore3",previous:{title:"Instructor Notes",permalink:"/js-core-3/week-1/instructors"},next:{title:"Coursework",permalink:"/js-core-3/week-2/homework"}},s=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"1. Debugging Quiz",id:"1-debugging-quiz",children:[]},{value:"2. How the web works - quick recap",id:"2-how-the-web-works---quick-recap",children:[{value:"Methods",id:"methods",children:[]},{value:"Headers",id:"headers",children:[]},{value:"Status codes",id:"status-codes",children:[]},{value:"Content type",id:"content-type",children:[]},{value:"Exercise",id:"exercise",children:[]}]},{value:"3. What are APIs and how to interact with them",id:"3-what-are-apis-and-how-to-interact-with-them",children:[{value:"Explanation",id:"explanation",children:[]},{value:"Exercise",id:"exercise-1",children:[]}]},{value:"4. How to use <code>fetch</code> to do network requests",id:"4-how-to-use-fetch-to-do-network-requests",children:[{value:"Explanation",id:"explanation-1",children:[]},{value:"How does fetch work?",id:"how-does-fetch-work",children:[]},{value:"Example",id:"example",children:[]},{value:"Error handling",id:"error-handling",children:[]}]},{value:"Coursework",id:"coursework",children:[]},{value:"Feedback",id:"feedback",children:[]}],b={toc:s};function p(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The learner should understand what the acronym API means"),Object(r.b)("li",{parentName:"ul"},"The learner can define what an API's purpose is and why it is useful"),Object(r.b)("li",{parentName:"ul"},"The learner should be able to edit the structure of a API URL and to change the data retrieved from the server"),Object(r.b)("li",{parentName:"ul"},"The learner should be able to define what a ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," is"),Object(r.b)("li",{parentName:"ul"},"The learner should understand what ",Object(r.b)("inlineCode",{parentName:"li"},"fetch")," is and what it is used for"),Object(r.b)("li",{parentName:"ul"},"The learner should be able to use ",Object(r.b)("inlineCode",{parentName:"li"},"fetch")," to retrieve ",Object(r.b)("inlineCode",{parentName:"li"},"JSON")," from an API"),Object(r.b)("li",{parentName:"ul"},"The learner should be able to parse the ",Object(r.b)("inlineCode",{parentName:"li"},"JSON")," and extract data from it"),Object(r.b)("li",{parentName:"ul"},"The learner should be able to use ",Object(r.b)("inlineCode",{parentName:"li"},"DOM")," manipulation to add content to the ",Object(r.b)("inlineCode",{parentName:"li"},"DOM")),Object(r.b)("li",{parentName:"ul"},"The learner should understand ",Object(r.b)("inlineCode",{parentName:"li"},"window.onload")," and ",Object(r.b)("inlineCode",{parentName:"li"},"document.onload")," and should be able to assign functions to run at specific life cycle events")),Object(r.b)("h2",{id:"agenda"},"Agenda"),Object(r.b)("p",null,"The purpose of this class is to introduce to the trainee:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Debugging Quiz"),Object(r.b)("li",{parentName:"ol"},"How the web works"),Object(r.b)("li",{parentName:"ol"},"What are ",Object(r.b)("inlineCode",{parentName:"li"},"APIs")," and how to interact with them"),Object(r.b)("li",{parentName:"ol"},"How to use the ",Object(r.b)("inlineCode",{parentName:"li"},"fetch")," API to do AJAX calls")),Object(r.b)("h2",{id:"1-debugging-quiz"},"1. Debugging Quiz"),Object(r.b)("p",null,"Let's see what you remember from last week!"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Answer in a thread on Slack")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"What are the four questions we ask ourselves in the Debugging Framework?"),Object(r.b)("li",{parentName:"ol"},"What are three of the tools we could use to debug our programs?"),Object(r.b)("li",{parentName:"ol"},"What is a ",Object(r.b)("inlineCode",{parentName:"li"},"syntax")," error?"),Object(r.b)("li",{parentName:"ol"},"What is a ",Object(r.b)("inlineCode",{parentName:"li"},"reference")," error?"),Object(r.b)("li",{parentName:"ol"},"What is a ",Object(r.b)("inlineCode",{parentName:"li"},"type")," error?")),Object(r.b)("h2",{id:"2-how-the-web-works---quick-recap"},"2. How the web works - quick recap"),Object(r.b)("p",null,"In this session we will look at how computer talk to each other using the web."),Object(r.b)("p",null,"At the core of the web is the URL, which stands for Uniform Resource Locator. We use the term resource to mean anything that a server might return such as webpage, CSS, JavaScript, image, data etc. A good way to think of a URL is as an address. It allows us to refer to webpages, images, data etc that is stored on servers elsewhere."),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("p",null,"The main methods used to send requests on the web are ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," and ",Object(r.b)("inlineCode",{parentName:"p"},"POST"),". However, later in the course when we look at building APIs using Node we will also look at other methods such as ",Object(r.b)("inlineCode",{parentName:"p"},"PUT"),", ",Object(r.b)("inlineCode",{parentName:"p"},"PATCH")," and ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE"),"."),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," method is a way of asking a server for a webpage, resource or a piece of data. For example, when we type a URL into a browser and submit it. The browser will send a ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," request."),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," method is used to send data to a server."),Object(r.b)("p",null,"The main difference between ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," and ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," is that a ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," method has a body, that is it can contain some data that we are sending. Whereas a ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," does not have a body since we use it to request data."),Object(r.b)("h3",{id:"headers"},"Headers"),Object(r.b)("p",null,"Each request and response sent has meta data, information about the data, at the beginning called a ",Object(r.b)("inlineCode",{parentName:"p"},"header"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"header")," contains information such as a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"status code indicating whether a request was successful"),Object(r.b)("li",{parentName:"ul"},"content type which indicates what the request or response contains")),Object(r.b)("p",null,"as well as lots of other things we won't cover here"),Object(r.b)("h3",{id:"status-codes"},"Status codes"),Object(r.b)("p",null,"Each response returned needs to contain a ",Object(r.b)("inlineCode",{parentName:"p"},"status")," code which tells the client whether the request was successful. If the request succeeded the response code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200"),". If the resource you tried to access was not found the response code used is ",Object(r.b)("inlineCode",{parentName:"p"},"404"),"."),Object(r.b)("p",null,"Some status codes you may have come across before are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"200")," ok. Request was successful"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"301")," moved permanently. Used to redirect request when moved permanently"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"401")," Unauthorised. User credentials were not supplied"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"404")," Not found"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"500")," Internal server error")),Object(r.b)("p",null,"The response codes can be grouped into categories"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"1xx: Informational"),Object(r.b)("li",{parentName:"ul"},"2xx: Success"),Object(r.b)("li",{parentName:"ul"},"3xx: Redirection"),Object(r.b)("li",{parentName:"ul"},"4xx: Client Error"),Object(r.b)("li",{parentName:"ul"},"5xx: Server Error")),Object(r.b)("p",null,"If you want a fun look at HTTP codes, take a look at ",Object(r.b)("a",{parentName:"p",href:"https://httpstatusdogs.com/"},"https://httpstatusdogs.com/")," or ",Object(r.b)("a",{parentName:"p",href:"https://http.cat/"},"https://http.cat/")," if you are cat person. For a technical perspective take a look at ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"),"."),Object(r.b)("h3",{id:"content-type"},"Content type"),Object(r.b)("p",null,"When sending data across the web, we need to specify in the header what the request or response contains. To do that, the ",Object(r.b)("inlineCode",{parentName:"p"},"content-type")," header is used. That way the receiver knows what to do with the data received."),Object(r.b)("p",null,"Common content types include"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"text/html")," - HTML web page"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"text/css")," - CSS"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"image/jpeg")," - JPEG image"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"application/javascript")," - JavaScript code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"application/json")," - JSON data")),Object(r.b)("h3",{id:"exercise"},"Exercise"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"In Slack post answers to the following\n\n- What can HTTP headers contain?\n- What is the purpose of status codes?\n- What can an HTTP message contain?\n")),Object(r.b)("h2",{id:"3-what-are-apis-and-how-to-interact-with-them"},"3. What are APIs and how to interact with them"),Object(r.b)("h3",{id:"explanation"},"Explanation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"API stands for ",Object(r.b)("inlineCode",{parentName:"li"},"Application Programming Interface")),Object(r.b)("li",{parentName:"ul"},"APIs are created by providers and used by consumers"),Object(r.b)("li",{parentName:"ul"},"It is a specific part of a larger system that can be contacted by other systems, for example from the internet."),Object(r.b)("li",{parentName:"ul"},"When we connect to an ",Object(r.b)("inlineCode",{parentName:"li"},"API")," we say that we are connecting to an ",Object(r.b)("inlineCode",{parentName:"li"},"Endpoint")),Object(r.b)("li",{parentName:"ul"},"Some well-known APIs are ",Object(r.b)("a",{parentName:"li",href:"https://developers.facebook.com/"},"Facebook APIs"),", ",Object(r.b)("a",{parentName:"li",href:"https://developer.twitter.com/en/docs"},"Twitter APIs"),", ",Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/maps/documentation"},"Maps APIs")," and many many more"),Object(r.b)("li",{parentName:"ul"},"In particular, an API doesn't care what language or technology is used in the consumer or the provider")),Object(r.b)("p",null,"An API is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it. An example of a server is the application on a computer hosting a website and an example of a client is the browser on the phone trying to access the website."),Object(r.b)("h4",{id:"why-do-we-need-apis"},"Why do we need APIs?"),Object(r.b)("p",null,"Imagine that I am a big social network and I want to give developers all over the world access to the data on the people on my website."),Object(r.b)("p",null,"What are some problems that I would have with sharing my data with everyone?"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Some of the information that I have is public (for example, peoples names) whilst other information I have is private (for example, email addresses). I want to make sure that I only ever give developers access to peoples names but never to their email addresses - otherwise they could send them spam email."),Object(r.b)("li",{parentName:"ol"},"I want to make sure that when developers ask for my data I can control who has access to it. I like that my users data is being used to make their lives better but I don't like it when companies try to sell them new stuff they don't need."),Object(r.b)("li",{parentName:"ol"},"Some developers might want to change some of the users details on my social network and this would get very messy quickly if people where allowed to change whatever they wanted")),Object(r.b)("p",null,"An API is a special type of program what acts as a ",Object(r.b)("strong",{parentName:"p"},"gatekeeper")," to all of this information. Having an API means that I can control which information is shared about my users and who it is shared with. Perfect!"),Object(r.b)("h4",{id:"types-of-apis"},"Types of APIs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Private: for employees only under a company network for internal use."),Object(r.b)("li",{parentName:"ul"},"Semi-private: for clients who paid for the API."),Object(r.b)("li",{parentName:"ul"},"Public: for everyone on the web (but may or may not need an account to use).")),Object(r.b)("h5",{id:"examples"},"Examples"),Object(r.b)("p",null,"Here is the API endpoint for Transport For London"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://api.tfl.gov.uk"},"https://api.tfl.gov.uk")),Object(r.b)("p",null,"The data from this endpoint will be used by many apps that you use every day - Google Maps and Citymapper to name two."),Object(r.b)("p",null,"This endpoint will get location of all of the Bikepoints in London."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://api.tfl.gov.uk/BikePoint"},"https://api.tfl.gov.uk/BikePoint")),Object(r.b)("p",null,"That's a lot of Bikes! It would be better if we could search for a location. Luckily this API let's us search for places."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://api.tfl.gov.uk/BikePoint/Search?query=Clerkenwell"},"https://api.tfl.gov.uk/BikePoint/Search?query=Clerkenwell")),Object(r.b)("p",null,"This API also has lots of other endpoints that we can use to get other data. For example, lets find the Air Quality of London."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://api.tfl.gov.uk/AirQuality"},"https://api.tfl.gov.uk/AirQuality")),Object(r.b)("p",null,"As you can see the URL changes the data that we get from the API. This can be broken down like this"),Object(r.b)("img",{src:a(477).default}),Object(r.b)("h3",{id:"exercise-1"},"Exercise"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Task (5 mins):")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Let's use the TFL API to get data about the London Underground\n\nhttps://api.tfl.gov.uk\n\n1.  Which endpoint would you use to find out if there is a disruption on the 'central' line? 2. Does the 'central' line have a disruption right now? Name another line that has a disruption on it.\n\nHint: Use your browser to access the endpoints\n")),Object(r.b)("h4",{id:"recap"},"Recap"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Question:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Which of the following statements below about APIs is false?\n\nA) Public APIs can be accessed by anyone on the Internet.\nB) You must use Javascript to access an API.\nC) APIs can control access to data or features of an application.\nD) You can change data via an API.\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Question:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Give an example of a company that uses an API to allow access to their data.\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Question:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"What is the `myapi/` part of a url called in this url?\nhttp://www.google.com/**myapi**/\n")),Object(r.b)("h2",{id:"4-how-to-use-fetch-to-do-network-requests"},"4. How to use ",Object(r.b)("inlineCode",{parentName:"h2"},"fetch")," to do network requests"),Object(r.b)("h3",{id:"explanation-1"},"Explanation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fetch is a function to request from other places on the web"),Object(r.b)("li",{parentName:"ul"},"Fetch is defined in the browser which means it can be used without using an external library (",Object(r.b)("inlineCode",{parentName:"li"},"window.fetch"),")"),Object(r.b)("li",{parentName:"ul"},"Fetch is available in nearly all browser but it's good to check which ones it won't work in",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"We can use this website to help us - ",Object(r.b)("a",{parentName:"li",href:"https://caniuse.com/#feat=fetch"},"caniuse.com"),")"))),Object(r.b)("li",{parentName:"ul"},"Fetch API documentations by Mozilla ",Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},"link"))),Object(r.b)("h3",{id:"how-does-fetch-work"},"How does fetch work?"),Object(r.b)("p",null,'Fetch uses a JavaScript pattern called "Promises" which has a very specific structure.'),Object(r.b)("p",null,"You can think of a Promise as you would think of a promise you make to another person - you make a promise that something will happen in the future. For example - I promise to call you later, I promise to go to the shops and buy milk later."),Object(r.b)("p",null,"Using Promises allows us to schedule functions to be called after some asynchronous code finishes running. We can specify different functions depending on whether the asynchronous code was successful or ran into an error."),Object(r.b)("p",null,"Promises can make it easier to split our code into small functions and make code easier to read. They also make it easier to handle errors."),Object(r.b)("p",null,"In this example we"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Get the ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," that we will get the milk from the shops (this could take a long time so it's good that it's a ",Object(r.b)("inlineCode",{parentName:"li"},"Promise"),"!)"),Object(r.b)("li",{parentName:"ol"},"When the milk has arrived from the shop ",Object(r.b)("inlineCode",{parentName:"li"},"then")," I should drink it and ",Object(r.b)("inlineCode",{parentName:"li"},"return")," the bottle so I can do something else with it"),Object(r.b)("li",{parentName:"ol"},"When I've drank the milk ",Object(r.b)("inlineCode",{parentName:"li"},"then")," I should recycle the bottle"),Object(r.b)("li",{parentName:"ol"},"If anything goes wrong with those steps I should ",Object(r.b)("inlineCode",{parentName:"li"},"catch")," the error and ",Object(r.b)("inlineCode",{parentName:"li"},"warn")," everyone what happened")),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"getMilkFromShops\n  .then((milk) => {\n    console.log(`I've got the milk`);\n    milk.drink();\n    return milk.bottle;\n  })\n  .then((bottle) => {\n    console.log(`I'm going to recycle the bottle`);\n    bottle.recycle();\n  })\n  .catch((error) => console.warn(\"Oh no, I dropped the milk\"));\n")),Object(r.b)("h4",{id:"example-1"},"Example 1"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Live Coding Exercise")),Object(r.b)("p",null,"Let's step through how the Fetch function is used and what it is comprised of"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'//Retrieve the JSON\nfetch("https://cat-fact.herokuapp.com/facts")\n  // Get the response and extract the JSON\n  .then(function (response) {\n    return response.json();\n  })\n  // Do something with the JSON\n  .then((headlines) => {\n    console.log(headlines);\n  })\n  // If something goes wrong\n  .catch((error) => console.log(error));\n')),Object(r.b)("h4",{id:"example-2"},"Example 2"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Live Coding Exercise")),Object(r.b)("p",null,"Wouldn't it be cool to make a new friend with just the click of a button?"),Object(r.b)("p",null,"Write a function that makes an API call using ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," to ",Object(r.b)("inlineCode",{parentName:"p"},"https://www.randomuser.me/api")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The function should make an API call to the given endpoint: ",Object(r.b)("inlineCode",{parentName:"li"},"https://www.randomuser.me/api")),Object(r.b)("li",{parentName:"ul"},"Log the received data to the console"),Object(r.b)("li",{parentName:"ul"},"Incorporate error handling"),Object(r.b)("li",{parentName:"ul"},"Show how you can build a profile page for the user using the DOM",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Add a name"),Object(r.b)("li",{parentName:"ul"},"Add a profile picture"),Object(r.b)("li",{parentName:"ul"},"Add some styling using CSS")))),Object(r.b)("h3",{id:"error-handling"},"Error handling"),Object(r.b)("p",null,"We saw earlier that each HTTP response contains an status code which indicates if our request was successful or not. If the our request failed we usually want to handle it appropriately."),Object(r.b)("p",null,"We can handle these errors gracefully in your code by checking the ",Object(r.b)("inlineCode",{parentName:"p"},"status")," and ",Object(r.b)("inlineCode",{parentName:"p"},"statusText")," value of the response:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'fetch("https://httpstat.us/500")\n  .then((response) => {\n    if (response.status >= 200 && response.status <= 299) {\n      return response.json();\n    } else {\n      throw new Error(\n        `Encountered something unexpected: ${response.status} ${response.statusText}`\n      );\n    }\n  })\n  .then((jsonResponse) => {\n    // do whatever you want with the JSON response\n  })\n  .catch((error) => {\n    // Handle the error\n    console.log(error);\n  });\n')),Object(r.b)("h4",{id:"exercise-2"},"Exercise"),Object(r.b)("p",null,"In groups the trainees should create a page of details about the United Kingdom."),Object(r.b)("p",null,"The API endpoint can be found ",Object(r.b)("a",{parentName:"p",href:"https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true"},"here")),Object(r.b)("p",null,"The website should include"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The name of the country"),Object(r.b)("li",{parentName:"ul"},"The country's capital city"),Object(r.b)("li",{parentName:"ul"},"An unordered list of the country's name in other all of the other returned languages")),Object(r.b)("h5",{id:"getting-started"},"Getting Started"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("a",{parentName:"li",href:"https://glitch.com/edit/#!/js3-2-country-exercise?path=README.md%3A3%3A80"},"this Glitch Project")),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Remix to Start")," to being working")),Object(r.b)("h5",{id:"steps"},"Steps"),Object(r.b)("p",null,"Example ",Object(r.b)("inlineCode",{parentName:"p"},"html")," and ",Object(r.b)("inlineCode",{parentName:"p"},"javascript")," files can be found in the section below"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a ",Object(r.b)("inlineCode",{parentName:"li"},"HTML"),", ",Object(r.b)("inlineCode",{parentName:"li"},"CSS")," and ",Object(r.b)("inlineCode",{parentName:"li"},"JavaScript")," file to hold different types of code"),Object(r.b)("li",{parentName:"ol"},"In your ",Object(r.b)("inlineCode",{parentName:"li"},"HTML")," file, write a simple basis for your website (e.g. ",Object(r.b)("a",{parentName:"li",href:"https://www.sitepoint.com/a-basic-html5-template/"},"this"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Make sure all of your ",Object(r.b)("inlineCode",{parentName:"li"},"HTML"),", ",Object(r.b)("inlineCode",{parentName:"li"},"CSS")," and ",Object(r.b)("inlineCode",{parentName:"li"},"JavaScript")," files are linked together!"))),Object(r.b)("li",{parentName:"ol"},"Write a function using fetch that retrieves the ",Object(r.b)("inlineCode",{parentName:"li"},"JSON")," from the ",Object(r.b)("em",{parentName:"li"},"Country API"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"To make sure it's working print the JSON to the console using ",Object(r.b)("inlineCode",{parentName:"li"},"console.log()")))),Object(r.b)("li",{parentName:"ol"},"Create a ",Object(r.b)("inlineCode",{parentName:"li"},"h1")," tag on the website using DOM manipulation and add the country's name inside it",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Go back to ",Object(r.b)("a",{parentName:"li",href:"/js-core-2/week-2/lesson"},"Week 5")," if you need a reminder"))),Object(r.b)("li",{parentName:"ol"},"Create a ",Object(r.b)("inlineCode",{parentName:"li"},"h2")," tag on the website using DOM manipulation and add the capital city's name inside it"),Object(r.b)("li",{parentName:"ol"},"Create a ",Object(r.b)("inlineCode",{parentName:"li"},"ul")," tag on the website using DOM manipulation",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For each of the translated names in the JSON, add a ",Object(r.b)("inlineCode",{parentName:"li"},"li")," tag"))),Object(r.b)("li",{parentName:"ol"},"Uncomment the lines inside ",Object(r.b)("inlineCode",{parentName:"li"},"onLoad()")," to load other countries details!")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Extra")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Load the country's flag into an ",Object(r.b)("inlineCode",{parentName:"li"},"img")," tag"),Object(r.b)("li",{parentName:"ul"},"Add CSS to make your website look really nice"),Object(r.b)("li",{parentName:"ul"},"Add other information from the JSON to your Country Details")),Object(r.b)("h5",{id:"finished-example"},"Finished Example"),Object(r.b)("p",null,"You can find the finished example of this website ",Object(r.b)("a",{parentName:"p",href:"https://codeyourfuture.github.io/completed-country-website/"},"here"),"."),Object(r.b)("h4",{id:"recap-1"},"Recap"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Question (5 mins):")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Complete the following sentence:\n\nFetch is a web API that allows you to **\\_** from **\\_**.\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Task (5 mins):")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Complete the rest of this code to connect to the following API: `https://dog.ceo/api/breeds/image/random`\n\n    fetch(_____)\n    .then(_____)\n    .then(body => console.log(body))\n    .catch(error => console.log(error));\n\n1. Post your code on Slack\n2. Post the image you retrieved on Slack\n")),Object(r.b)("h2",{id:"coursework"},"Coursework"),Object(r.b)("p",null,"Click ",Object(r.b)("a",{parentName:"p",href:"./homework"},"here")," to view the homework for this lesson."),Object(r.b)("h2",{id:"feedback"},"Feedback"),Object(r.b)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers."),Object(r.b)(i.a,{module:"JavaScript Core 3",week:"Week 2",mdxType:"Feedback"}))}p.isMDXComponent=!0},269:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(i,".").concat(u)]||p[u]||h[u]||r;return a?o.a.createElement(d,l(l({ref:t},s),{},{components:a})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),o=a.n(n);a(57);function r(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return o.a.createElement("div",{className:"feedback"},o.a.createElement("div",{className:"feedback__wrapper"},o.a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),o.a.createElement("center",null,o.a.createElement("p",null,"Not loading? Form can be found"," ",o.a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",o.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},477:function(e,t,a){"use strict";a.r(t),t.default=a.p+"d0825b367234d87595094acd4af9939b.png"}}]);