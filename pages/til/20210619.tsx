import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';
import { useState } from 'react';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import Post from '../../components/Post';

const FirstPage = () => {
  const [classCode, setClassCode] = useState<string>(`
class Human {
    gender = 'male';

    printGender = () => {
      console.log(this.gender);
    }
  } 
  
  class Person extends Human {
    name = 'Max';
    gender = 'female';

    printMyName = () => {
      console.log(this.name);
    }
  }
  `);

  const [spreadCode, setSpreadCode] = useState<string>(`
const oldArray = [0, 1];
const newArray = [...oldArray , 2, 3];  // [0, 1, 2, 3]
const person = {
  name: 'Max'
}
const newObject = [...person , age: 25]; // name: 'Max', age: 25
  `);

  const [restCode, setRestCode] = useState<string>(`
const filter = (...args) =>{
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3)); // [1]
  `);

  return (
    <Post
      title="JS"
      refList={[
        'https://kimchanjung.github.io/programming/2020/07/05/typescipt-import-js-module-error/',
      ]}
    >
      <>
        <br />
        <br />
        <br />
        <h3>let const</h3>
        <h3> ES6 Arrow Functions</h3>
        <h3> Exports & Imports</h3>

        <h3>ES6형태로 클래스 작성</h3>
        <Editor
          value={classCode}
          onValueChange={(value) => setClassCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        <br />
        <br />
        <h3>Spread Operation</h3>
        <p>
          {' '}
          Spraed Operation : 배열 Element | Object property를 분해 할때 사용
        </p>
        <Editor
          value={spreadCode}
          onValueChange={(value) => setSpreadCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        <br />
        <br />
        <h3>Rest Operation</h3>
        <p> Rest Operation: argumentList를 하나로 합치는데 이용할수 있다.</p>
        <Editor
          value={restCode}
          onValueChange={(value) => setRestCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        <br />
        <br />
        <h3>Destructuring</h3>
        <Editor
          value={`const [a, b] = ['Max', 'Hong']  // a : Max, b: Hong
const { name } = {name:'Max', age: 28} //name : Max`}
          onValueChange={(value) => setRestCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        <br />
        <br />
        <h3>ts error</h3>
        <p>
          'prismjs/components/prism-core' 모듈 또는 해당 형식 선언을 찾을 수
          없습니다.ts(2307)ts에러, 원인은 기존 js 파일에서만 import 하여
          사용가능한 형태만 지원하고 npm모듈을 만든 개발자가 typescript사용할 수
          있도록 처리를 하지 않았기 때문입니다.
        </p>
        <Editor
          value={`d.ts 파일 생성
// @types/모듈명/index.d.ts 
declare module '모듈명'`}
          onValueChange={(value) => setRestCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />

        <p />

        <br />
        <br />
        <h3>Primitive, Reference Type</h3>
        <p>
          Reference type을 복사하는 방법은 property들을 카피하는 것이다. 전체
          오브젝트를 그대로 할당할 경우 pointer가 할당됨
        </p>
        <Editor
          value={`const person = {
          name: 'Max'
        };

        const secondPerson = person;
        person.name = 'Manu';
        console.log(secondPerson);  //
      `}
          onValueChange={(value) => setRestCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />

        <p />

        <br />
        <br />
        <h3>Array Function</h3>
        <p />
        <Editor
          value={`
// 1. Array.map()
const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
  return num * 2;
})

console.log(numbers); // 1,2,3
console.log(doubleNumArray);  // 2,4,6        

array.filter()
array.find()
array.findIndex();
array.filter();
array.reduce();
array.concat();
array.slice();
array.splice();
      `}
          onValueChange={(value) => setRestCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />

        <p />
      </>
    </Post>
  );
};

export default FirstPage;
