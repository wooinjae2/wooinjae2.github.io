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
      title="Jest "
      refList={[
        '생활코딩',
        'http://conceptf1.blogspot.com/2013/11/javascript-closures.html',
      ]}
    >
      <>
        <br />
        <h3>Jest로 간단한 Counter앱 테스트 하기</h3>
        <p>
          Counter App과 테스트 코드 작성해보기
          <ol>
            <li>
              npx create-react-app [project name]을 통해 프로젝트를 생성하고,
            </li>
            <li>cd [project name], npm run test를 실행한다.</li>
            <li>src 밑에 Counter.js와 Counter.test.js파일을 생성</li>
          </ol>
          <br />
          1. 처음 Counter Component에 0출력 여부 테스트 코드를 작성한다.
          <br />
          <Editor
            value={`

//Counter.js 
import React from 'react';

const Counter = () => {
    return <></>
}

export default Counter;

//Counter.test.js
import React from 'react';
import Counter from './Counter';
import { render } from '@testing-library/react';

describe('<Counter /> ' () => {
    it('1이 화면에 출력된다.', () => {
        const { container, getByText } = render(<Counter/>)
        expect(getByText('0')).toBeInTheDocument(); //test 실패
    })
})


`}
            onValueChange={(value) => setClassCode(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          Counter Component에서 0을 화면에 출력하지 않기 때문에 0을
          Doucument에서 찾는 test가 실패 하게 된다.
          <br />
          테스트를 통과하기 위해 0을 출력하게 하면 테스트를 통과.
          <Editor
            value={`

//Counter.js 
import React from 'react';

const Counter = () => {
    return <div>0</div>
}

export default Counter;
`}
            onValueChange={(value) => setClassCode(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          <br />
          2. Plus 버튼 클릭이 일어날 때마다 Counter Component의 출력값이 1씩
          증가하도록 테스트 작성.
          <Editor
            value={`


//Counter.test.js 파일에 추가
it('Plus 버튼클릭시 1이 증가합니다.', () => {
    const {container, getByText} = render(<Counter />)
    fireEvent.click(getByText('Plus')) //Plus 버튼을 찾아 click 이벤트를 trigger한다. 
    //지금은 Plus 버튼을 만들지 않은 상태이므로 Unable to find an element with the text: Plus.에러 발생
    expect(getByText('1')).toBeInTheDocument() //클릭이후 1이 Counter Component에 출력되었는지 확인.
    fireEvent.click(getByText('Plus')) // 다시 plus 버튼 클릭
    expect(getByText('2')).toBeInTheDocument() //클릭 이후 2가 Counter Component에 출력되었는지 확인.
})
`}
            onValueChange={(value) => setClassCode(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          테스트를 통과시키 위해 Counter 컴포넌트를 수정한다.
          <Editor
            value={`


//Counter 컴포넌트 수정
import { useState } from "react";


const Counter = () => {

    const [count, setCount] = useState(0); //1. count 값이 변화할때 렌더되도록 하기 위해 state로 사용한다.

    const plusClickHandler = () => { //2. count값을 증가시키는 핸들러를 만든다.
        setCount(prevCount => prevCount+1);
    }

    return <div>{count}
        <button onClick={plusClickHandler}>Plus</button> //3. 버튼 엘리먼트를 생성하고, 버튼 클릭시 plusClickHandler를 호출하도록 한다.
    </div>

}

export default Counter;
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
        위와 같이 Counter Component를 수정하면 버튼 클릭이벤트가 일어나고, count
        state를 1씩 증가시키면서 화면에 출력되기 때문에 테스트가 통과한다.
        <br />
        <br />
        3. Plus와 비슷하게 minus테스트 코드도 작성한다.
        <Editor
          value={`


////Counter.test.js 파일에 단위 테스트 추가
it('Minus 버튼클릭시 1이 감소합니다.', () => {
    const {container, getByText} = render(<Counter />)
    fireEvent.click(getByText('Minus')) // Unable to find an element with the text: Minus. // 마이너스 버튼이 아직 없기 때문에 에러 발생
    expect(getByText('-1')).toBeInTheDocument()
    fireEvent.click(getByText('Minus'))
    expect(getByText('-2')).toBeInTheDocument()
    fireEvent.click(getByText('Minus'))
    fireEvent.click(getByText('Minus'))
    fireEvent.click(getByText('Minus'))
    fireEvent.click(getByText('Minus'))
    expect(getByText('-6')).toBeInTheDocument()
})

// Counter.js 파일 수정
import { useState } from "react";
const Counter = () => {

    const [count, setCount] = useState(0);

    const plusClickHandler = () => {
        setCount(prevCount => prevCount+1);
    }

    const minusClickHandler = () => { //이전 count 값에서 -1하도록 추가
        setCount(prevCount => prevCount-1);
    }

    return<div>{count}
        <button onClick={plusClickHandler}>Plus</button>
        <button onClick={minusClickHandler}>Minus</button> // Minus 버튼 추가
    </div>
}

export default Counter;
`}
          onValueChange={(value) => setClassCode(value)}
          highlight={(value) => highlight(value, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        이렇게 Plus버튼과 Minus버튼을 통해 Count값이 1씩 증가, 감소 되어
        Document에 반영되는 부분까지 테스트를 작성해보았다.
      </>
    </Post>
  );
};

export default FirstPage;
