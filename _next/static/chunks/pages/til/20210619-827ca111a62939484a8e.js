_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{Wa7B:function(n,e,t){"use strict";t.r(e);var r=t("nKUr"),a=t("8Ppc"),o=t.n(a),s=t("jHpe"),c=t("q1tI"),i=(t("y1X9"),t("QWvX"),t("tQ5z"));e.default=function(){var n=Object(c.useState)("class Human {\n    gender = 'male';\n\n    printGender = () => {\n      console.log(this.gender);\n    }\n  } \n  \n  class Person extends Human {\n    name = 'Max';\n    gender = 'female';\n\n    printMyName = () => {\n      console.log(this.name);\n    }\n  }\n  "),e=n[0],t=n[1],a=Object(c.useState)("\nconst oldArray = [0, 1];\nconst newArray = [...oldArray , 2, 3];  // [0, 1, 2, 3]\nconst person = {\n  name: 'Max'\n}\nconst newObject = [...person , age: 25]; // name: 'Max', age: 25\n  "),j=a[0],l=a[1],u=Object(c.useState)("\nconst filter = (...args) =>{\n  return args.filter(el => el === 1);\n}\n\nconsole.log(filter(1, 2, 3)); // [1]\n  "),h=u[0],g=u[1];return Object(r.jsxs)(i.a,{title:"JS",refList:["https://kimchanjung.github.io/programming/2020/07/05/typescipt-import-js-module-error/"],children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"let const"}),Object(r.jsx)("h3",{children:" ES6 Arrow Functions"}),Object(r.jsx)("h3",{children:" Exports & Imports"}),Object(r.jsx)("h3",{children:"ES6\ud615\ud0dc\ub85c \ud074\ub798\uc2a4 \uc791\uc131"}),Object(r.jsx)(o.a,{value:e,onValueChange:function(n){return t(n)},highlight:function(n){return Object(s.highlight)(n,s.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Spread Operation"}),Object(r.jsx)("p",{children:" Spraed Operation : \ubc30\uc5f4 Element | Object property\ub97c \ubd84\ud574 \ud560\ub54c \uc0ac\uc6a9"}),Object(r.jsx)(o.a,{value:j,onValueChange:function(n){return l(n)},highlight:function(n){return Object(s.highlight)(n,s.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Rest Operation"}),Object(r.jsx)("p",{children:" Rest Operation: argumentList\ub97c \ud558\ub098\ub85c \ud569\uce58\ub294\ub370 \uc774\uc6a9\ud560\uc218 \uc788\ub2e4."}),Object(r.jsx)(o.a,{value:h,onValueChange:function(n){return g(n)},highlight:function(n){return Object(s.highlight)(n,s.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Destructuring"}),Object(r.jsx)(o.a,{value:"const [a, b] = ['Max', 'Hong']  // a : Max, b: Hong\nconst { name } = {name:'Max', age: 28} //name : Max",onValueChange:function(n){return g(n)},highlight:function(n){return Object(s.highlight)(n,s.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"ts error"}),Object(r.jsx)("p",{children:"'prismjs/components/prism-core' \ubaa8\ub4c8 \ub610\ub294 \ud574\ub2f9 \ud615\uc2dd \uc120\uc5b8\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.ts(2307)ts\uc5d0\ub7ec, \uc6d0\uc778\uc740 \uae30\uc874 js \ud30c\uc77c\uc5d0\uc11c\ub9cc import \ud558\uc5ec \uc0ac\uc6a9\uac00\ub2a5\ud55c \ud615\ud0dc\ub9cc \uc9c0\uc6d0\ud558\uace0 npm\ubaa8\ub4c8\uc744 \ub9cc\ub4e0 \uac1c\ubc1c\uc790\uac00 typescript\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ucc98\ub9ac\ub97c \ud558\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."}),Object(r.jsx)(o.a,{value:"d.ts \ud30c\uc77c \uc0dd\uc131\n// @types/\ubaa8\ub4c8\uba85/index.d.ts \ndeclare module '\ubaa8\ub4c8\uba85'",onValueChange:function(n){return g(n)},highlight:function(n){return Object(s.highlight)(n,s.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("p",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Primitive, Reference Type"}),Object(r.jsx)("p",{children:"Reference type\uc744 \ubcf5\uc0ac\ud558\ub294 \ubc29\ubc95\uc740 property\ub4e4\uc744 \uce74\ud53c\ud558\ub294 \uac83\uc774\ub2e4. \uc804\uccb4 \uc624\ube0c\uc81d\ud2b8\ub97c \uadf8\ub300\ub85c \ud560\ub2f9\ud560 \uacbd\uc6b0 pointer\uac00 \ud560\ub2f9\ub428"}),Object(r.jsx)(o.a,{value:"const person = {\n          name: 'Max'\n        };\n\n        const secondPerson = person;\n        person.name = 'Manu';\n        console.log(secondPerson);  //\n      ",onValueChange:function(n){return g(n)},highlight:function(n){return Object(s.highlight)(n,s.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("p",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Array Function"}),Object(r.jsx)("p",{}),Object(r.jsx)(o.a,{value:"\n// 1. Array.map()\nconst numbers = [1, 2, 3];\nconst doubleNumArray = numbers.map((num) => {\n  return num * 2;\n})\n\nconsole.log(numbers); // 1,2,3\nconsole.log(doubleNumArray);  // 2,4,6        \n\narray.filter()\narray.find()\narray.findIndex();\narray.filter();\narray.reduce();\narray.concat();\narray.slice();\narray.splice();\n      ",onValueChange:function(n){return g(n)},highlight:function(n){return Object(s.highlight)(n,s.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(r.jsx)("p",{})]})}},gBwD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/til/20210619",function(){return t("Wa7B")}])}},[["gBwD",0,1,2]]]);