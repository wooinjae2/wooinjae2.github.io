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
        <h2>Finding & Fixing Errors</h2>
        <p>
          어떻게 스스로 에러를 찾고 해결하는지
          <ol>
            <li>에러메시지의 이해</li>
            <li>
              React앱의 디버깅과 분석 : chrome의 devtool이용 src에 break
              point사용하는법
            </li>
            <li>
              React DevTools 사용하기 : 크롬 확장프로그램 1. chromeDevTool의
              Element트리처럼 컴포넌트 트리 형태로 볼수 으며 props state등 확인
              가능 .
            </li>
          </ol>
        </p>
      </>
    </Post>
  );
};

export default FirstPage;
