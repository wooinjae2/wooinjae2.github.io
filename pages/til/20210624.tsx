import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';
import { useState } from 'react';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// import './prism.css';

import Post from '../../components/Post';

const FirstPage = () => {
  const [classCode, setClassCode] = useState<string>('');
  console.log(classCode);
  return (
    <Post title="생활코딩 Closure" refList={['생활코딩']}>
      <br />

      <h3>Closure</h3>
      <p>
        javascript를 이용하는 고난이도의 테크닉을 구사하는데 필수적인 개념으로
        활용된다.
      </p>
      <Editor
        value={`
function outter(){
  var title = 'coding everybody';
  return function (){
    alert(title);
  }
}
inner = outter();
inner();
`}
        onValueChange={(value) => setClassCode(value)}
        highlight={(value) => highlight(value, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
      <p>
        outter 함수는 한번 호출 되고 난후 내부함수를 리턴하고 생을 마감했다.
        생을 마감했음에도 불구하고, 리턴한 내부함수는 외부함수에 접근을 시도하고
        성공적인 접근을 하고 있다. <br />
        내부함수는 외부함수의 지역변수에 접근할 수 있는데 외부함수의 실행이
        끝나고 소멸된 이후에도 내부함수가 외부함수의 변수에 접근할 수 있다. 이런
        메커니즘을 클로저 라고 한다.
        <br />
        클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는
        외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는
        <br />
        조금 더 실용적인 예제
        <br />
        <Editor
          value={`
function factory_movie(title){
  return {
    get_title: function (){
      return title; //매개변수는 함수안에서 지역변수로 사용되기 때문에 접근이 가능하다.
    },
    set_title: function(_title){
      title = _title;
    }
  }
  
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());
`}
          onValueChange={(value) => setClassCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        클로저의 이러한 특성을 사용해 Private한 속성을 사용할 수 있도록 한다.
        소프트웨어가 커지다보면 많은 사람의 손을 타고, 미래의 나, 과거의 나 등.
        소프트웨어가 망가질 위험이 크다.
        <ul>
          <li>
            1. title이라는 변수를 다른사람이 어떤 의미로 외부에서 사용하던, 이
            내부변수에 영향을 줄 수 없다.
          </li>
          <li>
            2. set title을 통해 값을 수정하려고 할경우 조건을 검사할수있다.
            없다.
          </li>
        </ul>
        <Editor
          value={`
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
`}
          onValueChange={(value) => setClassCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        이렇게 하면 0,1,2,3,4가 아니라 5만 5번 출력되게 되는데 이것은 i의 값이
        우리가 정의한 함수의 외부 변수의 값이 아니기 때문이다
      </p>
    </Post>
  );
};

export default FirstPage;
