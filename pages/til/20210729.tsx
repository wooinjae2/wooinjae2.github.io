import React from 'react';
import Post from '../../components/Post';

const Page = () => {
  console.log();

  return (
    <Post
      title="React Complete Guide(Udemy) Custom Hooks"
      refList={['React Complete Guide(Udemy)']}
    >
      <>
        <h2>Custom Hooks</h2>
        <p>
          Custom Hooks란 무엇인가? 재사용 가능한 stateful 함수
          <br />
          일반 함수들과는 다르게 다른 react hooks와 react state를 활용할 수
          있다.
          <br />
          예를들어 2개의 컴포넌트가 있을때 하나의 컴포넌트는 +를 보여주고,
          하나는 -를 보여줄때 그 두개의 로직은 +, -부분만 다르고 나머지 부분은
          똑같을 것이다.
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

export default Page;
