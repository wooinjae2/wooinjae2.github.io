_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"8Ppc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("q1tI"));function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var l=90,c=219,u=222,d=192,h=100,p=3e3,f="navigator"in e&&/Win/i.test(navigator.platform),g="navigator"in e&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),m="npm__react-simple-code-editor__textarea",y=function(e){function t(){var e,n,a;o(this,t);for(var i=arguments.length,m=Array(i),y=0;y<i;y++)m[y]=arguments[y];return n=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(m))),a.state={capture:!0},a._recordCurrentState=function(){var e=a._input;if(e){var t=e.value,n=e.selectionStart,r=e.selectionEnd;a._recordChange({value:t,selectionStart:n,selectionEnd:r})}},a._getLines=function(e,t){return e.substring(0,t).split("\n")},a._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a._history,i=n.stack,o=n.offset;if(i.length&&o>-1){a._history.stack=i.slice(0,o+1);var s=a._history.stack.length;if(s>h){var l=s-h;a._history.stack=i.slice(l,s),a._history.offset=Math.max(a._history.offset-l,0)}}var c=Date.now();if(t){var u=a._history.stack[a._history.offset];if(u&&c-u.timestamp<p){var d=/[^a-z0-9]([a-z0-9]+)$/i,f=a._getLines(u.value,u.selectionStart).pop().match(d),g=a._getLines(e.value,e.selectionStart).pop().match(d);if(f&&g&&g[1].startsWith(f[1]))return void(a._history.stack[a._history.offset]=r({},e,{timestamp:c}))}}a._history.stack.push(r({},e,{timestamp:c})),a._history.offset++},a._updateInput=function(e){var t=a._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,a.props.onValueChange(e.value))},a._applyEdits=function(e){var t=a._input,n=a._history.stack[a._history.offset];n&&t&&(a._history.stack[a._history.offset]=r({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),a._recordChange(e),a._updateInput(e)},a._undoEdit=function(){var e=a._history,t=e.stack,n=e.offset,r=t[n-1];r&&(a._updateInput(r),a._history.offset=Math.max(n-1,0))},a._redoEdit=function(){var e=a._history,t=e.stack,n=e.offset,r=t[n+1];r&&(a._updateInput(r),a._history.offset=Math.min(n+1,t.length-1))},a._handleKeyDown=function(e){var t=a.props,n=t.tabSize,r=t.insertSpaces,i=t.ignoreTabKey,o=t.onKeyDown;if(!o||(o(e),!e.defaultPrevented)){27===e.keyCode&&e.target.blur();var s=e.target,h=s.value,p=s.selectionStart,m=s.selectionEnd,y=(r?" ":"\t").repeat(n);if(9===e.keyCode&&!i&&a.state.capture)if(e.preventDefault(),e.shiftKey){var v=a._getLines(h,p),b=v.length-1,x=a._getLines(h,m).length-1,_=h.split("\n").map((function(e,t){return t>=b&&t<=x&&e.startsWith(y)?e.substring(y.length):e})).join("\n");if(h!==_){var j=v[b];a._applyEdits({value:_,selectionStart:j.startsWith(y)?p-y.length:p,selectionEnd:m-(h.length-_.length)})}}else if(p!==m){var k=a._getLines(h,p),w=k.length-1,F=a._getLines(h,m).length-1,O=k[w];a._applyEdits({value:h.split("\n").map((function(e,t){return t>=w&&t<=F?y+e:e})).join("\n"),selectionStart:/\S/.test(O)?p+y.length:p,selectionEnd:m+y.length*(F-w+1)})}else{var S=p+y.length;a._applyEdits({value:h.substring(0,p)+y+h.substring(m),selectionStart:S,selectionEnd:S})}else if(8===e.keyCode){var E=p!==m;if(h.substring(0,p).endsWith(y)&&!E){e.preventDefault();var C=p-y.length;a._applyEdits({value:h.substring(0,p-y.length)+h.substring(m),selectionStart:C,selectionEnd:C})}}else if(13===e.keyCode){if(p===m){var A=a._getLines(h,p).pop().match(/^\s+/);if(A&&A[0]){e.preventDefault();var P="\n"+A[0],$=p+P.length;a._applyEdits({value:h.substring(0,p)+P+h.substring(m),selectionStart:$,selectionEnd:$})}}}else if(57===e.keyCode||e.keyCode===c||e.keyCode===u||e.keyCode===d){var L=void 0;57===e.keyCode&&e.shiftKey?L=["(",")"]:e.keyCode===c?L=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===u?L=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==d||e.shiftKey||(L=["`","`"]),p!==m&&L&&(e.preventDefault(),a._applyEdits({value:h.substring(0,p)+L[0]+h.substring(p,m)+L[1]+h.substring(m),selectionStart:p,selectionEnd:m+2}))}else!(g?e.metaKey&&e.keyCode===l:e.ctrlKey&&e.keyCode===l)||e.shiftKey||e.altKey?(g?e.metaKey&&e.keyCode===l&&e.shiftKey:f?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===l&&e.shiftKey)&&!e.altKey?(e.preventDefault(),a._redoEdit()):77!==e.keyCode||!e.ctrlKey||g&&!e.shiftKey||(e.preventDefault(),a.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),a._undoEdit())}},a._handleChange=function(e){var t=e.target,n=t.value,r=t.selectionStart,i=t.selectionEnd;a._recordChange({value:n,selectionStart:r,selectionEnd:i},!0),a.props.onValueChange(n)},a._history={stack:[],offset:-1},s(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=t.style,o=t.padding,s=t.highlight,l=t.textareaId,c=t.textareaClassName,u=t.autoFocus,d=t.disabled,h=t.form,p=t.maxLength,f=t.minLength,g=t.name,y=t.placeholder,b=t.readOnly,x=t.required,_=t.onClick,j=t.onFocus,k=t.onBlur,w=t.onKeyUp,F=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),O=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),S={paddingTop:o,paddingRight:o,paddingBottom:o,paddingLeft:o},E=s(n);return i.createElement("div",r({},O,{style:r({},v.container,a)}),i.createElement("textarea",{ref:function(t){return e._input=t},style:r({},v.editor,v.textarea,S),className:m+(c?" "+c:""),id:l,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:_,onKeyUp:w,onFocus:j,onBlur:k,disabled:d,form:h,maxLength:p,minLength:f,name:g,placeholder:y,readOnly:b,required:x,autoFocus:u,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),i.createElement("pre",r({className:F,"aria-hidden":"true",style:r({},v.editor,v.highlight,S)},"string"===typeof E?{dangerouslySetInnerHTML:{__html:E+"<br />"}}:{children:E})),i.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"}}))}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}}]),t}(i.Component);y.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t.default=y;var v={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}}).call(this,n("ntbh"))},QWvX:function(e,t){Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Wa7B:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("8Ppc"),i=n.n(a),o=n("jHpe"),s=n("q1tI"),l=(n("y1X9"),n("QWvX"),n("tQ5z"));t.default=function(){var e=Object(s.useState)("class Human {\n    gender = 'male';\n\n    printGender = () => {\n      console.log(this.gender);\n    }\n  } \n  \n  class Person extends Human {\n    name = 'Max';\n    gender = 'female';\n\n    printMyName = () => {\n      console.log(this.name);\n    }\n  }\n  "),t=e[0],n=e[1],a=Object(s.useState)("\nconst oldArray = [0, 1];\nconst newArray = [...oldArray , 2, 3];  // [0, 1, 2, 3]\nconst person = {\n  name: 'Max'\n}\nconst newObject = [...person , age: 25]; // name: 'Max', age: 25\n  "),c=a[0],u=a[1],d=Object(s.useState)("\nconst filter = (...args) =>{\n  return args.filter(el => el === 1);\n}\n\nconsole.log(filter(1, 2, 3)); // [1]\n  "),h=d[0],p=d[1];return Object(r.jsxs)(l.a,{title:"JS",refList:[],children:[Object(r.jsx)("h3",{children:"ES6\ud615\ud0dc\ub85c \ud074\ub798\uc2a4 \uc791\uc131"}),Object(r.jsx)(i.a,{value:t,onValueChange:function(e){return n(e)},highlight:function(e){return Object(o.highlight)(e,o.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Spread Operation"}),Object(r.jsx)("p",{children:" Spraed Operation : \ubc30\uc5f4 Element | Object property\ub97c \ubd84\ud574 \ud560\ub54c \uc0ac\uc6a9"}),Object(r.jsx)(i.a,{value:c,onValueChange:function(e){return u(e)},highlight:function(e){return Object(o.highlight)(e,o.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Rest Operation"}),Object(r.jsx)("p",{children:" Rest Operation: argumentList\ub97c \ud558\ub098\ub85c \ud569\uce58\ub294\ub370 \uc774\uc6a9\ud560\uc218 \uc788\ub2e4."}),Object(r.jsx)(i.a,{value:h,onValueChange:function(e){return p(e)},highlight:function(e){return Object(o.highlight)(e,o.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Destructuring"}),Object(r.jsx)(i.a,{value:"const [a, b] = ['Max', 'Hong']  // a : Max, b: Hong\nconst { name } = {name:'Max', age: 28} //name : Max",onValueChange:function(e){return p(e)},highlight:function(e){return Object(o.highlight)(e,o.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"ts error"}),Object(r.jsx)("p",{children:"prismjs\uc0ac\uc6a9\uc911 \uc5d0\ub7ec, \uc6d0\uc778\uc740 \uae30\uc874 js \ud30c\uc77c\uc5d0\uc11c\ub9cc import \ud558\uc5ec \uc0ac\uc6a9\uac00\ub2a5\ud55c \ud615\ud0dc\ub9cc \uc9c0\uc6d0\ud558\uace0 npm\ubaa8\ub4c8\uc744 \ub9cc\ub4e0 \uac1c\ubc1c\uc790\uac00 typescript\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ucc98\ub9ac\ub97c \ud558\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."})]})}},Z2IJ:function(e,t,n){e.exports={post:"post_post__1w2T3",postTitle:"post_postTitle__1Xc4J",postBody:"post_postBody__2vtXs",reference:"post_reference__1-d9Y"}},gBwD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/til/20210619",function(){return n("Wa7B")}])},jHpe:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i;switch(n=n||{},r.util.type(t)){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var o in a={},n[i]=a,t)t.hasOwnProperty(o)&&(a[o]=e(t[o],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(a=[],n[i]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var c=a[e];return a[e]=o,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,a,i){i=i||{};var o=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var l=t[s],c=r.util.type(l);"Object"!==c||i[o(l)]?"Array"!==c||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,o=0;i=a.elements[o++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(n,a,i){var o=r.util.getLanguage(n),s=r.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:s,code:n.textContent};function u(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),i&&i.call(c.element)}if(r.hooks.run("before-sanity-check",c),!c.code)return r.hooks.run("complete",c),void(i&&i.call(c.element));if(r.hooks.run("before-highlight",c),c.grammar)if(a&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(r.highlight(c.code,c.grammar,c.language));else u(r.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var a=new s;return l(a,a.head,e),o(e,a,t,a.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(a)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:a};function a(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function i(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,t,n,s,u,d){for(var h in n)if(n.hasOwnProperty(h)&&n[h]){var p=n[h];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(d&&d.cause==h+","+f)return;var g=p[f],m=g.inside,y=!!g.lookbehind,v=!!g.greedy,b=g.alias;if(v&&!g.pattern.global){var x=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,x+"g")}for(var _=g.pattern||g,j=s.next,k=u;j!==t.tail&&!(d&&k>=d.reach);k+=j.value.length,j=j.next){var w=j.value;if(t.length>e.length)return;if(!(w instanceof a)){var F,O=1;if(v){if(!(F=i(_,k,e,y)))break;var S=F.index,E=F.index+F[0].length,C=k;for(C+=j.value.length;S>=C;)C+=(j=j.next).value.length;if(k=C-=j.value.length,j.value instanceof a)continue;for(var A=j;A!==t.tail&&(C<E||"string"===typeof A.value);A=A.next)O++,C+=A.value.length;O--,w=e.slice(k,C),F.index-=k}else if(!(F=i(_,0,w,y)))continue;S=F.index;var P=F[0],$=w.slice(0,S),L=w.slice(S+P.length),z=k+w.length;d&&z>d.reach&&(d.reach=z);var K=j.prev;$&&(K=l(t,K,$),k+=$.length),c(t,K,O),j=l(t,K,new a(h,m?r.tokenize(P,m):P,b,P)),L&&l(t,j,L),O>1&&o(e,t,n,j.prev,k,{cause:h+","+f,reach:z})}}}}}function s(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function c(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=r,a.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),r.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,o=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),o&&e.close()}),!1),r):r;var u=r.util.currentScript();function d(){r.manual||r.highlightAll()}if(u&&(r.filename=u.src,u.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var h=document.readyState;"loading"===h||"interactive"===h&&u&&u.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return r}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n)}).call(this,n("ntbh"))},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={exports:{}},i=!0;try{e[t](a,a.exports,r),i=!1}finally{i&&delete n[t]}return a.exports}return r.ab=t+"/",r(149)}()}).call(this,"/")},tQ5z:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),a=n("Z2IJ"),i=n.n(a);function o(e){return Object(r.jsxs)("div",{className:i.a.post,children:[Object(r.jsx)("div",{className:i.a.postTitle,children:Object(r.jsx)("h2",{children:e.title})}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:i.a.postBody,children:e.children}),e.refList?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:i.a.reference,children:[Object(r.jsx)("h2",{children:"\ucd9c\ucc98"}),e.refList&&e.refList.map((function(e){return Object(r.jsx)("div",{children:e})}))]})]}):null]})}},y1X9:function(e,t){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}},[["gBwD",0,1]]]);