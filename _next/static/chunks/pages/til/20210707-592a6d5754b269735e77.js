(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{3035:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(5893),o=t(658),i=t.n(o);function s(n){return(0,r.jsxs)("div",{className:i().post,children:[(0,r.jsx)("div",{className:i().postTitle,children:(0,r.jsx)("h2",{children:n.title})}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:i().postBody,children:n.children}),n.refList?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:i().reference,children:[(0,r.jsx)("h2",{children:"\ucd9c\ucc98"}),n.refList&&n.refList.map((function(n){return(0,r.jsx)("div",{children:n},n)}))]})]}):null]})}},5856:function(n,e,t){"use strict";t.r(e);var r=t(5893),o=t(460),i=t(8325),s=(t(5433),t(9980),t(3035));e.default=function(){return(0,r.jsx)(s.Z,{title:"React Complete Guide(Udemy)",refList:["React Complete Guide(Udemy)"],children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"JSX Limitations Fragment, Portal, Ref"}),(0,r.jsxs)("p",{children:["JSX Limitation",(0,r.jsx)("br",{}),"\ud558\ub098\uc758 Root JSX Element\ub9cc \ub9ac\ud134\ud574\uc57c\ud558\uace0, \ubcc0\uc218\uc5d0 \uc800\uc7a5\ud560\ub54c\ub3c4 1\uac1c\uc758 \uc5d8\ub9ac\uba3c\ud2b8\ub9cc \uc800\uc7a5 \uac00\ub2a5\ud558\ub2e4.",(0,r.jsx)("br",{}),(0,r.jsx)(o.Z,{value:"\nreturn (\n  <h2>Hi there !</h2>\n  <p>This does not work </p>\n)\n\nreturn ( //Javascript\uc758 \ud55c\uacc4\uc640 \uac19\ub2e4. 2\uac1c\uc758 \uac12\uc744 \ub9ac\ud134\ud558\ub294\uac83\uacfc \uac19\ub2e4.\n  React.createElement('h2', {}, 'Hi there!' )\n  React.createElement('p', {}, 'This does not work' ) \n)\n\n//\ud574\uacb0\ubc95 1\n//div\ub098 \ub2e4\ub978 element\ub4e4\ub85c wrapping\ud560\uc218 \uc788\uc9c0\ub9cc \uc0c8\ub85c\uc6b4 \ubb38\uc81c\ub4e4\uc774 \ubc1c\uc0dd\ud55c\ub2e4.\n//\ud544\uc694\uc5c6\ub294 div\ub4e4\uc774 real DOM\uc5d0 \ubc18\uc601\ub418\uc5b4 \ub108\ubb34 \ub9ce\uc740 HTMLElement\ub97c \ub80c\ub354\ub9c1, app\uc744 \ub290\ub9ac\uac8c \ub9cc\ub4e0\ub2e4\n//\ub610\ud55c style\uc744\uc801\uc6a9\ud558\uae30 \uc704\ud574 \uc911\ucca9\ub41c \uc140\ub809\ud130\ub97c \uc774\uc6a9\ud574\uc57c \ud55c\ub2e4\uac70\ub098\n//\uc2a4\ud0c0\uc77c\uc744 \uae68\ub728\ub9b4\uc218 \uc788\ub2e4.\nreturn (\n  <div>\n    <h2>hi there!</h2>\n    <p>this does not work</p>\n  </div>\n)\n\n//\ud574\uacb0\ubc952\nreturn [\n  <div>test1</div>,\n  <div>test2</div>\n]\n\n//\ud574\uacb0\ubc953 \uc544\ubb34\uac83\ub3c4 rendering\ud558\uc9c0 \uc54a\ub294 \uc544\ub798\uc640 \uac19\uc740 wrapper component\ub97c \ub9cc\ub4e4\uc5b4 \ud56d\uc0c1 \ub8e8\ud2b8\ub85c \ub9ac\ud134\ud558\uac8c \ud558\uba74 1\uac1c\uc758 \ub8e8\ud2b8\ub97c \ub9ac\ud134\ud558\uac8c \ub41c\ub2e4.\n//\ud574\uacb0\ubc95 1\ucc98\ub7fc \ud544\uc694\ud558\uc9c0 \uc54a\uc740 element\ub4e4\uc744 \uc0dd\uc131\ud558\uc9c0 \uc54a\uc544\uc11c \ub354 \uc88b\ub2e4.\nconst Wrapper = props => {\n  return props.children;\n};\nexport default Wrapper;\n\n\n//\ud574\uacb0\ubc954 \ud574\uacb0\ubc95 3\uc744 React\uc5d0\uc11c \uc81c\uacf5\ud574 \uc8fc\ub294 Fragment\ub97c \uc774\uc6a9\ud55c\ub2e4.\n//<></> \ub610\ub294 <React.Fragment></React.Fragment>\ub97c \ub8e8\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\ub85c \ub454\ub2e4.\nreturn <>\n  <div>test1</div>\n</>\n________________________________________\n<React.Fragment>\n  <div>test1</div>\n</React.Fragment>\n\n",onValueChange:function(n){return console.log(n)},highlight:function(n){return(0,i.highlight)(n,i.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("p",{children:["Understanding React Portals",(0,r.jsx)("br",{}),"\ubaa8\ub2ec\uacfc \uc778\ud48b\uc774 \uac19\uc774 \uc788\ub294 \ud615\ud0dc\uac19\uc740 \uacbd\uc6b0 \uc758\ubbf8\ub860\uc801\uc73c\ub85c \uc774\uc0c1\uc801\uc774\uc9c0 \uc54a\ub2e4 side drawer\ub098 dialog \ub4f1\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\ub85c \uc804\uccb4 \ud398\uc774\uc9c0\ub97c \ub36e\uc5b4\ubc84\ub9ac\uae30 \ub54c\ubb38\uc5d0, \uae30\uc220\uc801\uc73c\ub85c\ub294 \ubb38\uc81c\uac00 \uc5c6\uc9c0\ub9cc \uc88b\uc740 \ucf54\ub4dc, \uad6c\uc870\ub294 \uc544\ub2c8\ub2e4. div\ub97c \ubc84\ud2bc\ucc98\ub7fc \uc2a4\ud0c0\uc77c\ub9c1\ud558\uace0, \uc774\ubca4\ud2b8\ub97c \ub2ec\uc544\uc8fc\ub294 \uac83\ucc98\ub7fc \uc798 \ub3d9\uc791\ud558\uc9c0\ub9cc \uc88b\uc740 \ucf54\ub4dc\ub294 \uc544\ub2c8\ub2e4.",(0,r.jsx)("br",{}),"ReactDOM.createElement($","<div></div>",", document.getElementById('#id'));",(0,r.jsx)("br",{}),"portal\uc744\uc774\uc6a9\ud574\uc11c HTML \ucee8\ud150\uce20\ub97c \uc6d0\ud558\ub294 \uc704\uce58\ub85c \uc774\ub3d9\ud560\uc218 \uc788\ub2e4.",(0,r.jsx)(o.Z,{value:'\n<section>\n  <h2>Some other content </h2>\n  <div class="my-modal">\n    <h2>A Modal Title!</h2>\n  </div>\n  <form>\n    <label>UserName</label>\n    <input type="text"/>\n  </form>\n</section>\n\n\n//\ubaa8\ub2ec\uc744 body \ubc11\uc73c\ub85c \uc62e\uae30\uace0 \uc2f6\uc744 \uacbd\uc6b0 \n//1.index.html\uc5d0 id\ub97c \uac00\uc9c4 div\ub97c \uc0dd\uc131\ud558\uace0,\n//index.html\n<body>\n  <div id="backdrop-root"></div>\n  <div id="overlay-root"></div>\n  <div id="root"></div>\n</body>\n\n\nTestComponent.js\nimport ReactDOM from \'react-dom\';\n\nconst TestComponent = () =>{\n  return (\n    <React.Fragment>\n      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById(\'backdrop-root\'))} //2\ubc88\uc9f8 \uc778\uc790\ub85c \uc9c0\uc815\ud55c backdrop-root id\ub97c \uac00\uc9c4 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uc0dd\uc131\ub428\n      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClose={props.onClose}/>, document.getElementById(\'overlay-root\'))}\n    </React.Fragment>\n  )\n}\n\nexport default TestComponent;\n\n',onValueChange:function(n){return console.log(n)},highlight:function(n){return(0,i.highlight)(n,i.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]})]})})}},9223:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/til/20210707",function(){return t(5856)}])},658:function(n){n.exports={post:"post_post__1w2T3",postTitle:"post_postTitle__1Xc4J",postBody:"post_postBody__2vtXs",reference:"post_reference__1-d9Y"}}},function(n){n.O(0,[774,806],(function(){return e=9223,n(n.s=e);var e}));var e=n.O();_N_E=e}]);