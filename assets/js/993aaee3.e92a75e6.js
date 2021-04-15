(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(269)),i=n(270),c={id:"lesson",title:"Node - 3",sidebar_label:"Lesson"},l={unversionedId:"node/week-3/lesson",id:"node/week-3/lesson",isDocsHomePage:!1,title:"Node - 3",description:"Learning Objectives",source:"@site/docs/node/week-3/lesson.md",slug:"/node/week-3/lesson",permalink:"/node/week-3/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/node/week-3/lesson.md",version:"current",sidebar_label:"Lesson",sidebar:"Node",previous:{title:"Instructor Notes",permalink:"/node/week-2/instructors"},next:{title:"Coursework",permalink:"/node/week-3/homework"}},s=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"1) Presentations",id:"1-presentations",children:[]},{value:"2) CRUD Review",id:"2-crud-review",children:[{value:"2.1) Using Update",id:"21-using-update",children:[]}]},{value:"3) Heroku",id:"3-heroku",children:[]},{value:"4) City Guide and Paired Programming",id:"4-city-guide-and-paired-programming",children:[]},{value:"Feedback",id:"feedback",children:[]}],b={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(o.b)("p",null,"By the end of this lesson trainees should be able to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Process an PUT request using Express and Node to update data in memory"),Object(o.b)("li",{parentName:"ul"},"Upload their node app to the internet so it can be accessed anywhere using Heroku")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"1-presentations"},"1) Presentations"),Object(o.b)("p",null,"As part of last weeks homework we asked you to prepare a very short presentation on what you learnt last week."),Object(o.b)("p",null,"Split into groups of 2-4 people and present what you have learnt. Remember, your whole presentation should be no more than 120 seconds!"),Object(o.b)("h2",{id:"2-crud-review"},"2) CRUD Review"),Object(o.b)("p",null,"So what will we build? we will build a ",Object(o.b)("strong",{parentName:"p"},"CRUD")," API. CRUD stands for Create, Retrieve, Update, Delete. If you think about it, this is what most applications do:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Create some "resources"'),Object(o.b)("li",{parentName:"ul"},"Retrieve them (GET them)"),Object(o.b)("li",{parentName:"ul"},"Update them"),Object(o.b)("li",{parentName:"ul"},"Delete them")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Which of these have we learnt so far?")),Object(o.b)("h3",{id:"21-using-update"},"2.1) Using Update"),Object(o.b)("p",null,"This is an Teacher led exercise which can be used to show how we might retrieve an element by ID using a GET request."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Teacher-Led Live Coding")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("h4",{parentName:"div",id:"objective"},"Objective"),Object(o.b)("p",{parentName:"div"},"Change a quote API server to allow updating a quote according to the given ID."),Object(o.b)("p",{parentName:"div"},"The route should use the HTTP method PUT and should use the URL:"),Object(o.b)("blockquote",{parentName:"div"},Object(o.b)("p",{parentName:"blockquote"},"/quotes")),Object(o.b)("p",{parentName:"div"},"You should use the starting project: ",Object(o.b)("a",{parentName:"p",href:"https://glitch.com/~cyf-quotes-id-start"},"cyf-quotes-id-start"),". This is because this project has quotes with IDs."),Object(o.b)("p",{parentName:"div"},"When you remix the starting project, immediately rename it as your own."))),Object(o.b)("h4",{id:"22-workshop-updating-data"},"2.2 Workshop: Updating Data"),Object(o.b)("p",null,"Lets look back at our original objectives."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"PUT /albums/:albumId")," should update the album (that matches the passed albumId)")),Object(o.b)("p",null,"This means that ",Object(o.b)("inlineCode",{parentName:"p"},"PUT /albums/2")," should update an album with the id ",Object(o.b)("inlineCode",{parentName:"p"},"2")," and return ",Object(o.b)("inlineCode",{parentName:"p"},"200")," with JSON ",Object(o.b)("inlineCode",{parentName:"p"},"{ success: true }")," to the user."),Object(o.b)("p",null,"The code will look like this"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'// notice .put\napp.put("/albums/:albumID", function (req, res) {\n  console.log("PUT /albums route");\n});\n')),Object(o.b)("p",null,"Remember, you have got to ",Object(o.b)("strong",{parentName:"p"},"update")," the album, not add it to the list"),Object(o.b)("h2",{id:"3-heroku"},"3) Heroku"),Object(o.b)("p",null,"We use can use Heroku to host our APIs online (similar in the way you might have used Netlify in the past)."),Object(o.b)("p",null,"This can be a little tricky however the documentation is good."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs"},"https://devcenter.heroku.com/articles/getting-started-with-nodejs")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Work in pairs and with Teaching Assistants to get your homework from the previous two weeks working online."),Object(o.b)("p",{parentName:"div"},"You should complete all of the following sections:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Introduction"),Object(o.b)("li",{parentName:"ul"},"Set up"),Object(o.b)("li",{parentName:"ul"},"Deploy the app"),Object(o.b)("li",{parentName:"ul"},"View logs"),Object(o.b)("li",{parentName:"ul"},"Define a Procfile"),Object(o.b)("li",{parentName:"ul"},"Run the app locally")),Object(o.b)("p",{parentName:"div"},"Now when you use"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"git push heroku master\n")),Object(o.b)("p",{parentName:"div"},"After making a ",Object(o.b)("inlineCode",{parentName:"p"},"commit")," your updated website with my made available online."))),Object(o.b)("h2",{id:"4-city-guide-and-paired-programming"},"4) City Guide and Paired Programming"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exercise")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For this exercises you should split into groups of two or three people."),Object(o.b)("p",{parentName:"div"},"This challenge should be completed in a Pair Programming style."),Object(o.b)("p",{parentName:"div"},"You can find the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/CodeYourFuture/cyf-node-challenges/tree/master/challenge-london-mini-guide"},"challenge")," here."),Object(o.b)("h4",{parentName:"div",id:"rules"},"Rules"),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"One of you will be leading on building the React (Client) application"),Object(o.b)("li",{parentName:"ol"},"One of you will be leading on building the Node.js (Node) Application"),Object(o.b)("li",{parentName:"ol"},"It is ",Object(o.b)("strong",{parentName:"li"},"very important")," that you do not move onto the next level of the challenge until ",Object(o.b)("strong",{parentName:"li"},"both")," of you have completed the level.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"e.g. Both of you have to finish Level 100 before continuing onto Level 200."),Object(o.b)("li",{parentName:"ul"},"If one of you gets stuck - help each other!")))))),Object(o.b)("h2",{id:"feedback"},"Feedback"),Object(o.b)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers."),Object(o.b)(i.a,{module:"Node",week:"Week 3",mdxType:"Feedback"}))}d.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);n(57);function o(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return r.a.createElement("div",{className:"feedback"},r.a.createElement("div",{className:"feedback__wrapper"},r.a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),r.a.createElement("center",null,r.a.createElement("p",null,"Not loading? Form can be found"," ",r.a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",r.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}}}]);