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
        <h2>Conditional & Dynamic Styles</h2>
        <p>
          inlineStyle에 조건부로 데이터를 적용할수 있지만 기본 스타일보다
          우선순위가 높아 css에 정의한 스타일보다 우선순위가 높아 원하는대로
          동작하지 않을 가능성이 높기때문에 만족스럽지 못하다.
          <ol>
            <li>dynamic inline style</li>
            <li>dynamic css classes style</li>
            <li>
              styled component: 규모가 큰 프로젝트의 경우 같은 이름을 여러번
              사용할경우 global css를 사용하면 문제발생 가능성이 있다. 이를
              방지하기위해 사용가능
            </li>
          </ol>
          <Editor
            value={`
//1. dynamic inline style
const [isValid ,setIsValid] = useState(true);
<div style={{color: !isValid ? 'red' : 'blue'}}>test</div>

//2. dynamic classes
<div className={\`form-control \${!isValid && 'invalid'}\`}>

//3. styled component
import styled from 'styled-components';


const Button = styled.button\`

  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;


&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
\`
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
      </>
    </Post>
  );
};

export default FirstPage;
