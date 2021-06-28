import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import Post from '../../components/Post';

const FirstPage = () => {
  return (
    <Post
      title="let, const, var"
      refList={[
        'https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/',
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
          끌어올려지게 되고, undefined로 초기화까지 되지만 , let, const는
          scope의 top위치로 hoisting되지만 초기화 되지 않아서 초기화 시점 이전에
          변수를 사용할 경우 Reference Error가 발생한다.
          <Editor
            value={`
console.log(test); // undefined
var test= 1;
console.log(test); //1

console.log(test2) // Reference Error.
let test2 = 1;
console.log(test2);
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

        <p>
          4. let과 const은 둘 다 재 선언이 불가능 하지만 let은 새로운 값으로
          update가 가능하고, const는 선언 시점에 초기화 해야 하고, 그 이후에는
          업데이트가 불가능하다.
          <Editor
            value={`
let letTest = '1';
letTest = '2';
let letTest = '3'; // error: Identifier 'letTest' has already been declared

const constTest = '1';
constTest = '2'; // error: Assignment to constant variable. 
const constTest = '3'; // error: Identifier 'constTest' has already been declared

const constObj = {name: 'test'}; //const 로 Object형태로 선언할 경우 properties는 에러 없이 업데이트 가능하다.
constObj.name = 'value';
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

        <br />
        <p>
          전체 요약
          <br />
          1.var는 function scope, let, const는 block scope <br />
          2.var변수는 수정과 재선언이 둘다 가능하고, let은 수정은 가능, 재선언은
          불가능, const는 수정과 재선언이 둘다 불가능 하다.
          <br />
          3. 3가지 키워드 모두 scope의 상단으로 hoist되고, var은 undefined로
          초기화 되지만, let과 const는초기화 되지 않는다.
          <br />
          4.var과 let은 초기값 없이 선언이 가능하고, const는 선언시점에 초기화
          되어야 한다.
        </p>
      </>
    </Post>
  );
};

export default FirstPage;
