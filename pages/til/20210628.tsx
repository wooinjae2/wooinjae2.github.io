import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import Post from '../../components/Post';

const FirstPage = () => {
  return (
    <Post
      title="React Complete Guide(Udemy)"
      refList={['React Complete Guide(Udemy)']}
    >
      <>
        <h2>JSX</h2>
        1.React는 선언적인(Declarative) 코딩을 해야한다. 내가 원하는 결과를
        작성해 두면 React Library가 이해하고 세부 단계를 진행한다. 예를들어
        getElementById와 addEventListener를 통해 이벤트를 달아주지 않고 onClick
        attribue를 통해 더 쉽게 가능
        <br />
        반대는 명령형(Imperative)로 내가 원하는 결과를 만들기 위해 수행해야할
        명령 각각을 순서대로 작성
        <br />
        2.React Component는 Javascript function으로 디스플레이 되어야할
        JSX(HTML)코드를 리턴한다.
        <br />
        3. React에서 하나의 루트를 가진 컴포넌트 트리를 만든다. 컴포넌트 트리의
        루트노드는 하위에 여러개의 컴포넌트를 가질수 있으며, custom HTML
        attribue를 통해 데이터를 전달한다.
        <p>
          <Editor
            value={`
return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses}/>
    </div>
)

JSX를 사용하지 않을경우 
3개의 아규먼트를 받는 React.createElement()를 통해 생성경우 아래와 같은 코드를 통해 같은 작업이 가능하고 상당히 복잡하다.
React에서 위처럼 JSX로 작성한 코드가 바벨을 통해 아래와 같은 형태로 변환되어 실행되게 된다.
    'div', // 1. Element
    {}, // 2. Property
    React.createElement('h2', {}, "Let's get started!"), //3. child
    React.createElement(Expenses, {item: expenses}); //3. child
)
return React.createElement('div', {}, React)

2. 하나의 wrapper react Element만 리턴해야 하는 이유도 아래와 같이 2개를 리턴할수 없기 때문이다
    return React.createElement('h2', {}, "Let's get started!"), //3. child
    React.createElement(Expenses, {item: expenses}); //3. child
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
        <hr />
        <br />
        <p>
          React가 어떻게 JSX를 스크린에 가져오는가? Functional Component에서
          컴포넌트는 JSX를 리턴하는 특별한 function이다. 누군가 이 function을
          콜해야 하지만 우리는 이 function들을 call하지 않는다.
          <br />
          대신 우리는 html과 같이 Component Function들을 JSX코드 안에 작성한다.
          JSX로 코드에서 Component를 사용하면, React가 Component function을
          인식하게 된다. 그리고 평가할때마다 이런 Component Function을
          호출하게된다.
          <br />이 Component Function을 트리거 하기 위해 특별한 변수 props,
          state를 Update를 통해
        </p>
        <Editor
          value={`
onClick={clickHandler()} //이렇게 함수를 전달할 경우 문제, js가 구문분석될때 실행되고, click Event발생시 실행되지 않는다.
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
