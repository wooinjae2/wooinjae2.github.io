import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';
import { useState } from 'react';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import Post from '../../components/Post';

const FirstPage = () => {
  return (
    <Post
      title="JS"
      refList={[
        'https://kimchanjung.github.io/programming/2020/07/05/typescipt-import-js-module-error/',
      ]}
    >
      <>
        <h2>let, const, var 차이</h2>
        <p>
          1. scope let, const는 block 스코프를 갖고, var는 function 스코프를
          갖는다
          <br />
          2. var 키워드는 같은 이름의 변수명을 사용해서 재선언이 가능하지만,
          let, const키워드로 선언할경우 재 선언은 불가능하다.
          <Editor
            value={`
var test = 'test';
var test = 'test2';

let test2 = 'test2';
let test2 = 'test2'; //Uncaught SyntaxError: Identifier 'test2' has already been declared 이미 이 식별자는 선언되었다는 에러 발생으로 같은 변수명을 중복으로 쓰는 문제 상황을 예방할수있다.
`}
            onValueChange={(value) => console.log(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          3. hoisting var 로 선언한 변수는 스코프의 최상단으로 선언부가
          끌어올려지게 되고, undefined로 초기화 된다.
          <Editor
            value={`
console.log(test); // undefined
var test= 1;
console.log(test); //1
`}
            onValueChange={(value) => console.log(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </p>

        <Editor
          value={`
.selector {word-break:break-all;}
`}
          onValueChange={(value) => console.log(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </>
    </Post>
  );
};

export default FirstPage;
