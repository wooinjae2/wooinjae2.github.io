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
    <Post title="20210626" refList={['https://htglss.tistory.com/31']}>
      <>
        <br />

        <h3>css 줄바꿈</h3>
        <p>
          글자에 띄어쓰기가 없어서 element width를 영역을 넘어가도 줄바꿈이 되지
          않을 경우 css에서 아래와 같이 할경우 단어 중간에서도 줄바꿈이
          가능하다.
        </p>
        <Editor
          value={`
.selector {word-break:break-all;}
`}
          onValueChange={(value) => setClassCode(value)}
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
