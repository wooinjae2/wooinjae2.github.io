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
    <Post
      title="React - The Complete Guide(Udemy)"
      refList={[
        'Udemy React - The Complete Guide (incl Hooks, React Router, Redux)강의',
      ]}
    >
      <br />

      <h3>React Basic</h3>
      <p>
        React는 복잡하고 interactive한 UI를 쉽게 만들수 있도록 해주는 JS
        라이브러리
      </p>
      <p>
        React는 UI의 모든것이 컴포넌트로 구성되어 있고, 여러개의 컴포넌트들을
        결합해서 하나의 UI를 만들게 된다.
        <br />
        <strong>
          <ol>
            <li>
              Reusability
              <p>
                {' '}
                - 똑같은 코드를 여러번 작성하지 않도록 재사용 가능한 형태의
                컴포넌트를 개발
                <br />
                props로 전달받는 값에 따라 하나의 컴포넌트에서 다른 형태의
                데이터, 모양을 보여줄 수 있다.
              </p>
            </li>
            <li>
              관심사 분리
              <p>
                {' '}
                - 너무 많은 것을 한곳에 넣지 않고, 각 컴포넌트가 각각의 관심사를
                해결하도록 한다.{' '}
              </p>
            </li>
          </ol>
        </strong>
        <br />
      </p>

      <p>
        jsx는 javascript + xml코드로 babel의 transpiling을 통해 브라우저에서
        동작하도록 만들어준다. 우리는 그래서 쓰기 쉬운 jsx 형태로 작성 할 수
        있다. jsx코드는 빌드 과정을 통해 통해 실제로 수행 가능한 복잡한 js코드로
        변환되어 실제로 동작한다. <br />
        아래와 같이 {`<p>This is also visible</p>`} 형태의 jsx를 만들기 위해
        태그를 생성하고 append하는 작업은 규모가 커질수록 복잡하고 번거로워 질
        수있다.
      </p>
      <Editor
        value={`
const para = document.createElement('p');
para.textContent = "This is also visible";
document.getElementById('root').append(para);

<p>This is also visible</p>`}
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
      <h3>React Component</h3>
      <p>
        React Component는 Function이다. 특별한 종류의 Function으로 이 함수가
        리턴하는것은 JSX Code이다.
        <br />
        Component 규칙 <br />
        1. Component는 대문자로 시작하도록 한다, 일반 html Element는 소문자로
        시작.
        <br />
        2. JSX는 반드시 한개의 루트Element를 리턴해야 한다.
      </p>
      <p />
    </Post>
  );
};

export default FirstPage;
