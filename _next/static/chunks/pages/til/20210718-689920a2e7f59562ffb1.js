(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{3035:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var o=t(5893),r=t(658),a=t.n(r);function s(e){return(0,o.jsxs)("div",{className:a().post,children:[(0,o.jsx)("div",{className:a().postTitle,children:(0,o.jsx)("h2",{children:e.title})}),(0,o.jsx)("hr",{}),(0,o.jsx)("div",{className:a().postBody,children:e.children}),e.refList?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:a().reference,children:[(0,o.jsx)("h2",{children:"\ucd9c\ucc98"}),e.refList&&e.refList.map((function(e){return(0,o.jsx)("div",{children:e},e)}))]})]}):null]})}},7111:function(e,n,t){"use strict";t.r(n);var o=t(5893),r=t(460),a=t(8325),s=(t(5433),t(9980),t(3035));n.default=function(){return(0,o.jsx)(s.Z,{title:"React Complete Guide(Udemy)",refList:["React Complete Guide(Udemy)"],children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"151.How React Really Works**"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"1. \ub9ac\uc561\ud2b8\uc758 \ubcfc\uc218\uc5c6\ub294 \uc791\uc5c5"}),(0,o.jsx)("li",{children:"understanding the virtual DOM & DOM Updates"}),(0,o.jsx)("li",{children:"Understanding State & State Updates"})]}),(0,o.jsx)(r.Z,{value:"\nreturn (\n  <h2>Hi there !</h2>\n  <p>This does not work </p>\n)\n\nreturn ( //Javascript\uc758 \ud55c\uacc4\uc640 \uac19\ub2e4. 2\uac1c\uc758 \uac12\uc744 \ub9ac\ud134\ud558\ub294\uac83\uacfc \uac19\ub2e4.\n  React.createElement('h2', {}, 'Hi there!' )\n  React.createElement('p', {}, 'This does not work' ) \n)\n\n//\ud574\uacb0\ubc95 1\n//div\ub098 \ub2e4\ub978 element\ub4e4\ub85c wrapping\ud560\uc218 \uc788\uc9c0\ub9cc \uc0c8\ub85c\uc6b4 \ubb38\uc81c\ub4e4\uc774 \ubc1c\uc0dd\ud55c\ub2e4.\n//\ud544\uc694\uc5c6\ub294 div\ub4e4\uc774 real DOM\uc5d0 \ubc18\uc601\ub418\uc5b4 \ub108\ubb34 \ub9ce\uc740 HTMLElement\ub97c \ub80c\ub354\ub9c1, app\uc744 \ub290\ub9ac\uac8c \ub9cc\ub4e0\ub2e4\n//\ub610\ud55c style\uc744\uc801\uc6a9\ud558\uae30 \uc704\ud574 \uc911\ucca9\ub41c \uc140\ub809\ud130\ub97c \uc774\uc6a9\ud574\uc57c \ud55c\ub2e4\uac70\ub098\n//\uc2a4\ud0c0\uc77c\uc744 \uae68\ub728\ub9b4\uc218 \uc788\ub2e4.\nreturn (\n  <div>\n    <h2>hi there!</h2>\n    <p>this does not work</p>\n  </div>\n)\n\n//\ud574\uacb0\ubc952\nreturn [\n  <div>test1</div>,\n  <div>test2</div>\n]\n\n//\ud574\uacb0\ubc953 \uc544\ubb34\uac83\ub3c4 rendering\ud558\uc9c0 \uc54a\ub294 \uc544\ub798\uc640 \uac19\uc740 wrapper component\ub97c \ub9cc\ub4e4\uc5b4 \ud56d\uc0c1 \ub8e8\ud2b8\ub85c \ub9ac\ud134\ud558\uac8c \ud558\uba74 1\uac1c\uc758 \ub8e8\ud2b8\ub97c \ub9ac\ud134\ud558\uac8c \ub41c\ub2e4.\n//\ud574\uacb0\ubc95 1\ucc98\ub7fc \ud544\uc694\ud558\uc9c0 \uc54a\uc740 element\ub4e4\uc744 \uc0dd\uc131\ud558\uc9c0 \uc54a\uc544\uc11c \ub354 \uc88b\ub2e4.\nconst Wrapper = props => {\n  return props.children;\n};\nexport default Wrapper;\n\n\n//\ud574\uacb0\ubc954 \ud574\uacb0\ubc95 3\uc744 React\uc5d0\uc11c \uc81c\uacf5\ud574 \uc8fc\ub294 Fragment\ub97c \uc774\uc6a9\ud55c\ub2e4.\n//<></> \ub610\ub294 <React.Fragment></React.Fragment>\ub97c \ub8e8\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\ub85c \ub454\ub2e4.\nreturn <>\n  <div>test1</div>\n</>\n________________________________________\n<React.Fragment>\n  <div>test1</div>\n</React.Fragment>\n\n",onValueChange:function(e){return console.log(e)},highlight:function(e){return(0,a.highlight)(e,a.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("p",{children:["React\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uac00\uc7a5 \uc911\uc694\ud558\ub2e4. \uc6b0\ub9ac\ub294 ui\ub97c \ub9cc\ub4e4\ub54c Component\ub97c \uc0ac\uc6a9\ud558\uba70 \ub9ac\uc561\ud2b8\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ucee8\uc149\uc744 \ud3ec\uc6a9\ud55c\ub2e4(embrace)? screen\uc5d0 \ubcf4\uc5ec\uc9c0\uac8c \ud558\ub294\uac83\uc740 React\uac00 \uc544\ub2cc ReactDOM\uc758 \uc5ed\ud560\uc774\ub2e4. React\ub294 Component\uc5d0 \ub300\ud574\uc11c\ub9cc \uad00\ub9ac\ub97c \ud558\uace0, Props, State, \ubd80\ubaa8\uc640 \uc790\uc2dd\uad00\uc758 \uc0c1\ud0dc\uad00\ub9ac, Context(component-wide data)\uac00 React\uc758 \uc8fc\uc694 feature\uc774\uba70, Props, State, Context\uac00 \ubcc0\uacbd\ub420\uacbd\uc6b0 \uc774 \ucee8\uc149\uc744 \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \ub9ac\uc561\ud2b8\uc5d0 \uc758\ud574 \uc5c5\ub370\uc774\ud2b8 \ub420\uac83\uc774\uace0,\ub9ac\uc561\ud2b8\ub294 \uc774 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0c8\ub85c\uc6b4\uac83\uc744 \uc2a4\ud06c\ub9b0\uc5d0 draw\ud558\uae38 \uc6d0\ud558\ub294\uc9c0 \uccb4\ud06c\ub97c \ud558\uac8c \ub41c\ub2e4. \ub9cc\uc57d \uc0c8\ub85c\uc6b4\uac83\uc774 \uadf8\ub824\uc838\uc57c \ud55c\ub2e4\uba74, React\ub294 ReactDOM\uc5d0\uac8c ReactDOM\uc740 new Thing, new component\ub97c \uc2a4\ud06c\ub9b0\uc5d0 \ucd9c\ub825\ud560 \ud544\uc694\uac00 \uc788\ub294\uac83\ub4e4\uc744 \uc54c\ub824\uc904 \uac83\uc774\ub2e4.",(0,o.jsx)("br",{}),"React determines how the component tree looks like and what it should look like",(0,o.jsx)("br",{}),"ReactDOM receives the differences and manipulates the real DOM",(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),"Re-Evaluating Components !== Re-Rendering the DOM",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Component"}),(0,o.jsx)("th",{children:"Real DOM"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Re-evaluated whenever props"}),(0,o.jsx)("td",{children:"Changes to the real DOM are only made for differences between evaluations"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"React excutes component functions"}),(0,o.jsx)("td",{})]})]})]}),(0,o.jsxs)("p",{style:{display:"hidden"},children:["React\uac00 JavaScript \ub77c\uc774\ube0c\ub7ec\ub9ac\ub77c\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9d0\uc790 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud55c \uac83\uc785\ub2c8\ub2e4. \uadf8\uac8c \ub0b4\uac00 \ucc98\uc74c\uc5d0 \ub108\uc5d0\uac8c \uac00\ub974\uce5c \uac83\uc774\ub2e4. \ubb3c\ub860 \uc774 \uacfc\uc815\uc740 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub3c4 \ubc30\uc6b0\uace0 \ubcf4\uace0, React\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uad00\ud55c \uac83\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc774\ub7ec\ud55c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 Component\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. React\ub294 \uc774 Component \uac1c\ub150\uc744 \uc218\uc6a9\ud569\ub2c8\ub2e4. Component\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \uad6c\uc131\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8\uac83\uc740 Component\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. \uc911\uc694\ud55c \uba54\ubaa8\uac00 \ud558\ub098 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ub610\ud55c \uc774 ReactDOM\uc744 \ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uacb0\uad6d ReactDOM\uc740 \uc6f9\uc5d0 \ub300\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4. React \uc790\uccb4, React.js\ub294 \uc6f9\uc744 \ubaa8\ub985\ub2c8\ub2e4.",(0,o.jsx)("br",{}),"\uacb0\uad6d \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub300\ud574 \uc544\ubb34\uac83\ub3c4 \ubaa8\ub985\ub2c8\ub2e4. React\ub294 \ubc29\ubc95\uc744 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. Component\uc640 \ud568\uaed8 \uc791\ub3d9\ud558\uc9c0\ub9cc \ud574\ub2f9 Component\uac00 HTML \uc694\uc18c\ub97c \ud3ec\ud568\ud558\uac70\ub098 \uc644\uc804\ud788 \uac00\uc0c1\uc758 \uc694\uc18c\ub97c \ud3ec\ud568\ud558\ub294 \uacbd\uc6b0 \uadf8\uac83\uc740 React\uc5d0 \uc911\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc911\uc694\ud55c \uac83\uc740 ReactDOM\uc785\ub2c8\ub2e4. \uad81\uadf9\uc801\uc73c\ub85c \uc2e4\uc81c HTML \uc694\uc18c\ub97c \ud654\uba74. \uadf8\ub7ec\ub098 React\ub294 Component\ub97c \uad00\ub9ac\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc77c \ubfd0\uc785\ub2c8\ub2e4. \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uace0 \ub2e4\ub978 Component \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uba70 Component\ub97c \ubcc0\uacbd\ud574\uc57c \ud558\ub294 \ubc29\ubc95\uacfc \ucc28\uc774\uc810\uc744 \ucc3e\uc2b5\ub2c8\ub2e4. Component\uc758 \uc774\uc804 \uc0c1\ud0dc\uc640 \ube44\uad50\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac \uc0c1\ud0dc. \uadf8\ub9ac\uace0 React\ub294 \ubb34\uc5c7\uc5d0 \uad00\ud55c \ubaa8\ub4e0 \uc815\ubcf4\ub97c \uc5b4\ub5a4 \ud654\uba74\uc774\ub4e0 \ud654\uba74\uc5d0 \ud45c\uc2dc\ub418\uc5b4\uc57c \ud558\ub294 \ub0b4\uc6a9\uacfc \ubcc0\uacbd\ub428 \uc989, \uc791\uc5c5 \uc911\uc778 \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"\uc608\ub97c \ub4e4\uc5b4, ReactDOM\uc774 \uc791\uc5c5\uc744 \ub2f4\ub2f9\ud558\uae30 \ub54c\ubb38\uc5d0 ReactDOM\uc73c\ub85c \ub118\uc5b4\uac11\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc758 \uc77c\ubd80\uc778 \uc2e4\uc81c DOM\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c ReactDOM\uc740 \ubb34\uc5b8\uac00\ub97c \uac00\uc838\uc62c \ucc45\uc784\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ubcfc \uc218 \uc788\ub294 \ud654\uba74\uc785\ub2c8\ub2e4. React\ub294 \uad00\uc2ec\ub9cc \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. Component. \uae30\ubcf8\uc801\uc73c\ub85c \uc804\ub2ec\ud558\ub294 \ub370\uc774\ud130\uc778 props\uc5d0 \uad00\uc2ec\uc774 \uc788\uc2b5\ub2c8\ub2e4. Component\ub97c \uad6c\uc131 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4e4\uace0 \ubd80\ubaa8-\uc790\uc2dd\uc744 \ud65c\uc131\ud654\ud558\ub294 Component, Component \ud1b5\uc2e0. React\ub294 \ub0b4\ubd80 \uc0c1\ud0dc\ub97c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud569\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubd80\uc758 \ub370\uc774\ud130. \uadf8\ub9ac\uace0 React\ub294 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud569\ub2c8\ub2e4. Component \uc804\uccb4 \ub370\uc774\ud130. \ubb3c\ub860 React\uc5d0\ub294 \uba87 \uac00\uc9c0 \ub2e4\ub978 \uae30\ub2a5\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uae30\ub2a5\ub3c4 \ub0b4\uc7a5\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\uac83\uc774 \ud575\uc2ec \uae30\ub2a5\uc785\ub2c8\ub2e4.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"props, state \ub610\ub294 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc774\ub97c \uc0ac\uc6a9\ud558\ub294 Component \uac1c\ub150\uc740 React\uc5d0 \uc758\ud574 \uc5c5\ub370\uc774\ud2b8\ub418\uace0 React\ub294 \uc774 Component\uac00 \uc774\uc81c \ud654\uba74\uc5d0 \uc0c8\ub85c\uc6b4 \uac83\uc744 \uadf8\ub9ac\ub824\uace0 \ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8\uac83\uc774 \uc788\uc5b4\uc57c\ud55c\ub2e4\uba74 \uc774 \uacbd\uc6b0 React\ub294 ReactDOM\uc5d0 \uc774\uc5d0 \ub300\ud574 \uc54c\ub824\uc11c ReactDOM\uc774 \uc0c8 \ud654\uba74, \uc0c8 \uad6c\uc131 \uc694\uc18c, \uc0c8 \ucd9c\ub825\uc744 \ud654\uba74. \ub530\ub77c\uc11c \ud574\ub2f9 Component\ub97c \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uba74 \uc5ec\uae30\uc5d0\uc11c \uc2e4\uc81c DOM \ud1b5\uc2e0\uc5d0 \ub300\ud55c \uc9c8\ubb38\uc740 \ubb3c\ub860 \uc774\uac83\uc774 \uc791\ub3d9\ud569\ub2c8\uae4c? \ub0b4\uac00 \uc5b8\uae09\ud588\ub4ef\uc774 React\ub294 Component\uc5d0 \uad00\uc2ec\uc774 \uc788\uc2b5\ub2c8\ub2e4. React\uac00 \uacb0\uad6d \ud558\ub294 \uc77c\uc740 \uac00\uc0c1 DOM. \uc571\uc774 \uc5b4\ub5a4 Component \ud2b8\ub9ac\uc778\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4. \uacb0\uad6d \uac74\ubb3c\uc744 \uc9d3\uace0 \ubaa8\ub4e0 Component \uc790\uccb4\uc5d0\ub294 \ubb3c\ub860 \ud558\uc704 \ud2b8\ub9ac, \ud574\ub2f9 Component\uc5d0\uc11c \ubc18\ud658\ud55c JSX \ucf54\ub4dc.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"\ud574\ub2f9 Component \ud2b8\ub9ac\uac00 \ud604\uc7ac \uc5b4\ub5bb\uac8c \ubcf4\uc774\ub294\uc9c0\uc640 \uc608\ub97c \ub4e4\uc5b4 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ud6c4\uc640 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8 \uadf8\ub7f0 \ub2e4\uc74c \uc815\ubcf4\ub294 \uc774\uc81c ReactDOM\uc5d0 \ub300\ud574 \uc54c\uace0 \uc788\ub294 ReactDOM\uc73c\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4. \ucc28\uc774\uc810\uacfc \uc2e4\uc81c DOM\uc744 \uc870\uc791\ud558\ub294 \ubc29\ubc95\uc744 \uc544\ub294 \uac83 \ud574\ub2f9 \uac00\uc0c1 DOM\uacfc \uc77c\uce58\uc2dc\ud0a4\uae30 \uc704\ud574 React\uac00 \ud30c\uc0dd\ud55c \uac00\uc0c1 \uc2a4\ub0c5\uc0f7 Component \ud2b8\ub9ac. \uadf8\ub9ac\uace0 \uc774\uc640 \uad00\ub828\ud558\uc5ec \uc911\uc694\ud55c \uac83\uc774 \ud558\ub098 \uc788\uc2b5\ub2c8\ub2e4. \ucc38\uace0\ub85c. \uc774 \uacfc\uc815\uc744 \ud1b5\ud574 \ub098\ub294 \uc885\uc885 React\uac00 Component\ub97c \uc7ac\ud3c9\uac00\ud558\ub294 Component \uae30\ub2a5\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc2e4\uc81c\ub85c, \uc55e\uc11c \uc5b8\uae09\ud588\ub4ef\uc774 state props\ub098 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc788\uc744 \ub54c\ub9c8\ub2e4 Component\uac00 \ubcc0\uacbd\ub418\uba74 \ud574\ub2f9 \uad6c\uc131 \uc694\uc18c \uae30\ub2a5\uc774 \ub2e4\uc2dc \uc2e4\ud589\ub429\ub2c8\ub2e4. \uadf8 \ucef4\ud3ec\ub10c\ud2b8\ub294 React\uc5d0 \uc758\ud574 \uc7ac\ud3c9\uac00\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc8fc\ubaa9\ud560 \uac00\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4. Component\ub97c \uc7ac\ud3c9\uac00\ud558\ub294 \uac83\uc740 DOM\uc744 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ud558\ub294 \uac83\uacfc \ub3d9\uc77c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ud568\uc218\uac00 React\uc5d0 \uc758\ud574 \uc7ac\uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c \uc2e4\uc81c DOM\uc758 \ud574\ub2f9 \ubd80\ubd84\uc774 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub418\uac70\ub098 \uc7ac\ud3c9\uac00\ub428. \ub300\uc2e0 Component\ub97c \uad6c\ubcc4\ud574\uc57c \ud569\ub2c8\ub2e4. \ubd80\ubd84, React \ubd80\ubd84 \ubc0f \uc2e4\uc81c DOM. \ubc29\uae08 \ub9d0\ud588\ub4ef\uc774 \uc6b0\ub9ac\uc758 Component\ub294 props, state \ub610\ub294 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc7ac\ud3c9\uac00\ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c \ubc18\uc751 \uadf8\ub7f0 \ub2e4\uc74c \ud574\ub2f9 Component \uae30\ub2a5\uc744 \ub2e4\uc2dc \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774\uc81c \uc2e4\uc81c DOM\uc5d0\uc11c \ubc18\uba74\uc5d0 \ubcc0\uacbd\ud574\uc57c \ud558\ub294 \uc704\uce58\uc5d0\uc11c\ub9cc \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4. React\uc758 \uc774\uc804 \uc0c1\ud0dc \uc0ac\uc774\uc5d0\uc11c \ud30c\uc0dd\ub41c \uadf8 \ucc28\uc774\ub97c \uae30\ubc18\uc73c\ub85c Component \ubc0f \ud574\ub2f9 \ud2b8\ub9ac \ubc0f state prop \uc774\ud6c4\uc758 \ud604\uc7ac \uc0c1\ud0dc \ub610\ub294 \ucee8\ud14d\uc2a4\ud2b8 \ubcc0\uacbd. \ub530\ub77c\uc11c \uc2e4\uc81c DOM\uc740 \ud56d\uc0c1 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub4dc\ubb3c\uac8c \ud544\uc694\ud560 \ub54c\ub9cc \ubcc0\uacbd\ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8\uac83\uc740 \uc911\uc694\ud569\ub2c8\ub2e4 \uc131\ub2a5\uc740 \uc774\uc804 \uc81c\ud488\uacfc \uac00\uc0c1 \ube44\uad50\ub97c \uc218\ud589\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0c1\ud0dc \ubc0f \ud604\uc7ac \uc0c1\ud0dc, \uc774\ub294 \uc0c1\ub2f9\ud788 \uc800\ub834\ud558\uace0 \uc218\ud589\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4. \uadf8 \uba54\ubaa8\ub9ac\uc5d0\uc11c\ub9cc \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ub80c\ub354\ub9c1\ub41c \uc2e4\uc81c DOM\uc5d0 \uc811\uadfc \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc131\ub2a5 \uad00\uc810\uc5d0\uc11c \ubcf4\uba74 \uaf64 \ube44\uc2f8\ub2e4. \uc2e4\uc81c DOM\uc73c\ub85c \uc791\uc5c5\ud558\ub294 \uac83\uc740 \uc131\ub2a5\uc73c\ub85c \ud310\uba85\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc9d1\uc911\uc801 \uc778 \uc791\uc5c5. \ubb3c\ub860 \ud55c\uacf3\uc5d0\uc11c \uc791\uc740 \ubcc0\ud654\ub294 \uc544\ub2c8\uc9c0\ub9cc, \ud56d\uc0c1 \ub9ce\uc740 \uc7a5\uc18c\uc5d0\uc11c \uc791\uc740 \ubcc0\uacbd\uc744 \uc218\ud589\ud55c \ub2e4\uc74c \ud398\uc774\uc9c0 \uc2e4\uc81c DOM\uc73c\ub85c \ub108\ubb34 \ub9ce\uc774 \uc791\uc5c5\ud558\uae30 \ub54c\ubb38\uc5d0 \ub290\ub824\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub0b4 React\ub294 \uac00\uc0c1 \ube44\uad50\ub97c \uc218\ud589\ud558\ub294 \uad6c\uc870\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \uac00\uc0c1 DOM\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub9c8\uc9c0\ub9c9 \uc2a4\ub0c5\uc0f7\uacfc \uc2e4\uc81c DOM\uc5d0 \ub300\ud55c \ud604\uc7ac \uc2a4\ub0c5\uc0f7.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"\uc774\uac83\uc774 React\uac00 \uc5ec\uae30\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc774 \uac00\uc0c1 DOM \ube44\uad50, \ucc3e\uae30\ub97c \uc218\ud589\ud569\ub2c8\ub2e4. \ub450 \uc2a4\ub0c5\uc0f7\uc758 \ucc28\uc774\uc810\uc744 \uc54c\uc544\ub0c5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc2e4\uc81c \uc608\ub97c \ubcf4\ub824\uba74, \uc774\ub807\uac8c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \ubaa8\ub4e0 Component\ub97c \uc6b0\ub9ac\ub77c\uace0 \uac00\uc815 \ud574 \ubd05\uc2dc\ub2e4. \uc774\uc804 \ud3c9\uac00 \uacb0\uacfc. \ub530\ub77c\uc11c Component \ud568\uc218\uac00 \uc2e4\ud589\ub420 \ub54c \uc774\ubc88\uc774 \ub9c8\uc9c0\ub9c9\uc785\ub2c8\ub2e4. \uc774\uc81c \uc77c\ubd80 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uace0 \uac11\uc790\uae30 \uc0c8 \ub2e8\ub77d\uc744 \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc774 \uc6b0\ub9ac\uc758 \ud604\uc7ac \ud3c9\uac00 \uacb0\uacfc\uc785\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 React\ub294 \ub458 \uc0ac\uc774\uc758 \ucc28\uc774\uc810\uc744 \uacb0\uc815\ud560 \uac83\uc785\ub2c8\ub2e4. \uc2a4\ub0c5\uc0f7\uc740 \uc774 \ub2e8\ub77d\uc774\uba70 \ub2e4\uc74c\uc73c\ub85c \ubcc0\uacbd \uc0ac\ud56d\uc744 \ubcf4\uace0\ud569\ub2c8\ub2e4. ReactDOM\uc774 \uc2e4\uc81c DOM\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \uc774\uac83\uc744 \uc0bd\uc785\ud560 \uc218 \uc788\ub3c4\ub85d ReactDOM \uc808. ReactDOM\uc740 \uc804\uccb4 DOM\uc744 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"\uc774 \uae30\uc874 h1 \ub610\ub294 div \uc694\uc18c\ub97c \uac74\ub4dc\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\uac83\uc740 \ub2e8\uc9c0 div \ub0b4\ubd80\uc758 h1 \uc694\uc18c \ub4a4\uc5d0 \ub2e8\ub77d\uc744 \uc0bd\uc785\ud569\ub2c8\ub2e4. \uadf8\uac74 React\uac00 \uc774\uba74\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \ubc29\uc2dd\uc744 \uac04\ub2e8\ud788 \ub9d0\ud574\uc11c. \uc774\uc81c \uc774\uac83\uc744 \ubd05\uc2dc\ub2e4. \uc2e4\uc81c \ucf54\ub4dc\ub85c \uc791\uc5c5\uc744 \uc218\ud589\ud558\uace0 \uc870\uae08 \uc6b0\ub9ac\uac00 \uc774\uac83\uc5d0 \ub300\ud55c \ub290\ub08c\uc744 \uc5bb\uace0 \uc6b0\ub9ac \ubaa8\ub450\uac00 \ubc29\ubc95\uc744 \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \uc774\uac83\uc740 \ubaa8\ub450 \ub3d9\uc791\ud558\uace0 props \ubc0f state\uac00 \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud14d\uc2a4\ud2b8 \ubc0f \uad00\ub828\ub41c \ub2e4\ub978 Component\uc5d0 \ub300\ud574 \uc774\uac83\uc744 \uc774\ud574\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."]}),(0,o.jsx)(r.Z,{value:"\n// * Virtual DOM Diffing\n//1. Previous Evaluation result\n<div>\n  <h1>Hi there!</h1>\n</div>\n\n\n//2. Current Evaluation result\n<div>\n  <h1>Hi there!</h1>\n  <p>This is new!</p> // p\ud0dc\uadf8\uac00 DOM\uc5d0 \ucd94\uac00\ub418\uace0 \ub098\uba38\uc9c0\ub294 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uace0 \uc720\uc9c0\ub420 \uac83\uc774\ub2e4.\n</div>\n",onValueChange:function(e){return console.log(e)},highlight:function(e){return(0,a.highlight)(e,a.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),"s Component\uac00 Re-Evaluation\ub418\ub294\uac74 \uc131\ub2a5\uc801\uc73c\ub85c \ub0ad\ube44\uc778\ub370 \ubd80\ubaa8\uac00 \uad00\ub9ac\ud558\ub294 Data\uac00 \ubcc0\uacbd\ub418\uba74 \ubaa8\ub4e0 props\uc640 state\uac00 \ubcc0\uacbd\ub418\ub294\uacbd\uc6b0 \ubaa8\ub4e0 \uc790\uc2ddcomponent\uac00 \uc7ac\uc2e4\ud589 \ub41c\ub2e4. \uc774\ub7f0\uac78 \ub9c9\uae30 \uc704\ud574 \uc5b4\ub5bb\uac8c \ud558\ub294\uac00 ?"," ",(0,o.jsx)("strong",{children:"React.meno"})]})]})})}},5234:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/til/20210718",function(){return t(7111)}])},658:function(e){e.exports={post:"post_post__1w2T3",postTitle:"post_postTitle__1Xc4J",postBody:"post_postBody__2vtXs",reference:"post_reference__1-d9Y"}}},function(e){e.O(0,[774,806],(function(){return n=5234,e(e.s=n);var n}));var n=e.O();_N_E=n}]);