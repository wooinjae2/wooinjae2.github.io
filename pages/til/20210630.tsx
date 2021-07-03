// import Editor from 'react-simple-code-editor';

// import { highlight, languages } from 'prismjs/components/prism-core';

// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';

import Post from '../../components/Post';

const FirstPage = () => {
  return (
    <Post
      title="React Complete Guide(Udemy)"
      refList={['React Complete Guide(Udemy)']}
    >
      <>
        <p>
          <ol>
            <li>child to parent component communication</li>
            <li>render list</li>
            <li>conditional render</li>
            <li>understanding keys</li>
            <p>
              첫번째 배열에 추가할 경우 key가 없으면 첫번째 component의 값이
              새로 추가한 값으로 변경되며, 밑의 모든 컴포넌트가 하나씩 다
              변경되고 마지막에 하나가 추가된다.
              <br />
              1.맨위에 하나만 추가되는것이 성능면에서 더 좋은데 key를 명시하지
              않아서 이런 현상이발생 성능이슈, 버그
              <br />
              2. 모든 아이템이 각각 state를 갖고 있는 경우 state는 보존되고
              props에서 넘어온 값만 바뀌게 될 경우 버그 발생(테스트 해보기)
            </p>
          </ol>
          <br />
        </p>
        <br />
      </>
    </Post>
  );
};

export default FirstPage;
