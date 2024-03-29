import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';
import { useState } from 'react';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import Post from '../../components/Post';

const FirstPage = () => {
  const [classCode, setClassCode] = useState<string>('');
  console.log(classCode);
  return (
    <Post
      title="Closure"
      refList={[
        '생활코딩',
        'http://conceptf1.blogspot.com/2013/11/javascript-closures.html',
      ]}
    >
      <>
        <br />

        <h3>Closure</h3>
        <p>
          Lexical scope
          <br />
          Scope란 프로그래밍에서 변수의 유효 범위를 나타내는 용어이다.
          <br />
          Javascript는 Lexical Scope를 따른다. Lexical Scope란 무엇일까?
          <br />
          함수를 어디에 선언하였는지에 따라 상위 스코프를 결정하는 것 여기서
          중요한 것은 함수의 호출이 아니라 함수의 선언에 따라 결정된다.
          <Editor
            value={`
var number = 1;
function a() {
  var number = 10;
  b();
}
function b() {
  console.log(number);
}
a(); // ?
b(); // ?
`}
            onValueChange={(value) => setClassCode(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          의 결과는 ?
          <Editor
            value={`
1//a() 결과
1//b() 결과
`}
            onValueChange={(value) => setClassCode(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </p>
        <p>
          Closure는 inner function 에서 외부의 모든 변수에 접근이 가능하다는
          개념.
          <br />
          내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다.
          Closure란 자신이 생성된 시점의 환경을 기억하는 함수
          <br />
          외부 함수 호출이 종료되었음에도 외부함수의 변수 or 인자에 접근 할 수
          있는 함수.
          <br />
          Javascript는 Lexical Scope를 사용하며 이는 Scope를 선언된 위치를
          기준으로 정한다고 위에서 말했습니다. 선언된 위치를 기준으로, 함수
          내부에 선언된 inner 함수는 자신의 scope {'>'} 자신을 포함하는 외부
          함수 scope(예제에선 outer) {'>'} 전역 scope 순으로 변수를 찾게됩니다.
          따라서 x는 2의 값을 가지고 있습니다.
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
          생을 마감했음에도 불구하고, 리턴한 내부함수는 외부함수에 접근을
          시도하고 성공적인 접근을 하고 있다. <br />
          내부함수는 외부함수의 지역변수에 접근할 수 있는데 외부함수의 실행이
          끝나고 소멸된 이후에도 내부함수가 외부함수의 변수에 접근할 수 있다.
          이런 메커니즘을 클로저 라고 한다.
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
          소프트웨어가 커지다보면 많은 사람의 손을 타고, 미래의 나, 과거의 나
          등. 소프트웨어가 망가질 위험이 크다.
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

---------------------------------------------
var funcArray = [];
for(var i = 1; i < 6; i++){
  funcArray[i] = function (idx){
      return function(){
        return idx;
      }
  }(i);
}


for(var index in funcArray){
    console.log(funcArray[index]());
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
          이렇게 하면 0,1,2,3,4가 아니라 5만 5번 출력되게 되는데, i의 값이
          각각의 루프에서 변하며, 최종적으로 루프가 끝난뒤에 5라는 값을 가지고
          있다. <br />
          그리고 return된 함수에서는 외부 스코프의 var키워드로 선언한 변수 i
          참조하고 있기 때문이다. <br />
          <br />
          var 키워드로 선언한 i는 function scope이고 여기서는전역 변수로
          선언되었고 이후 계속 참조를 하고 있기 때문에 이런 문제가 발생하며,
          <br />
          <br />
          해결을 위해 아래 코드처럼 i값을 파라미터로 전달하여 함수의 copy된 로컬
          변수로써 이용할 수 있다.
          <br />
          또는 for문의 i값을 블록스코프를 갖는 let 키워드를 통해 선언
        </p>
      </>
    </Post>
  );
};

export default FirstPage;
