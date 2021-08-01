import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import Image from 'next/image';
// import portalImg from '../../public/portal.png';
import Post from '../../components/Post';

const FirstPage = () => {
  return (
    <Post
      title="React Complete Guide(Udemy)"
      refList={['React Complete Guide(Udemy)']}
    >
      <>
        <h2>JSX Limitations Fragment, Portal, Ref</h2>
        <p>
          JSX Limitation
          <br />
          하나의 Root JSX Element만 리턴해야하고, 변수에 저장할때도 1개의
          엘리먼트만 저장 가능하다.
          <br />
          <Editor
            value={`
return (
  <h2>Hi there !</h2>
  <p>This does not work </p>
)

return ( //Javascript의 한계와 같다. 2개의 값을 리턴하는것과 같다.
  React.createElement('h2', {}, 'Hi there!' )
  React.createElement('p', {}, 'This does not work' ) 
)

//해결법 1
//div나 다른 element들로 wrapping할수 있지만 새로운 문제들이 발생한다.
//필요없는 div들이 real DOM에 반영되어 너무 많은 HTMLElement를 렌더링, app을 느리게 만든다
//또한 style을적용하기 위해 중첩된 셀렉터를 이용해야 한다거나
//스타일을 깨뜨릴수 있다.
return (
  <div>
    <h2>hi there!</h2>
    <p>this does not work</p>
  </div>
)

//해결법2
return [
  <div>test1</div>,
  <div>test2</div>
]

//해결법3 아무것도 rendering하지 않는 아래와 같은 wrapper component를 만들어 항상 루트로 리턴하게 하면 1개의 루트를 리턴하게 된다.
//해결법 1처럼 필요하지 않은 element들을 생성하지 않아서 더 좋다.
const Wrapper = props => {
  return props.children;
};
export default Wrapper;


//해결법4 해결법 3을 React에서 제공해 주는 Fragment를 이용한다.
//<></> 또는 <React.Fragment></React.Fragment>를 루트 엘리먼트로 둔다.
return <>
  <div>test1</div>
</>
________________________________________
<React.Fragment>
  <div>test1</div>
</React.Fragment>

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
        <hr />
        <p>
          Understanding React Portals
          <br />
          모달과 인풋이 같이 있는 형태같은 경우 의미론적으로 이상적이지 않다
          side drawer나 dialog 등도 마찬가지로 전체 페이지를 덮어버리기 때문에,
          기술적으로는 문제가 없지만 좋은 코드, 구조는 아니다. div를 버튼처럼
          스타일링하고, 이벤트를 달아주는 것처럼 잘 동작하지만 좋은 코드는
          아니다.
          <br />
          ReactDOM.createElement(${`<div></div>`},
          document.getElementById('#id'));
          <br />
          portal을이용해서 HTML 컨텐츠를 원하는 위치로 이동할수 있다.
          <Editor
            value={`
<section>
  <h2>Some other content </h2>
  <div class="my-modal">
    <h2>A Modal Title!</h2>
  </div>
  <form>
    <label>UserName</label>
    <input type="text"/>
  </form>
</section>


//모달을 body 밑으로 옮기고 싶을 경우 
//1.index.html에 id를 가진 div를 생성하고,
//index.html
<body>
  <div id="backdrop-root"></div>
  <div id="overlay-root"></div>
  <div id="root"></div>
</body>


TestComponent.js
import ReactDOM from 'react-dom';

const TestComponent = () =>{
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))} //2번째 인자로 지정한 backdrop-root id를 가진 엘리먼트에 생성됨
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClose={props.onClose}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default TestComponent;

`}
            onValueChange={(value) => console.log(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          {/* <Image src={portalImg} width="500" height="auto" /> */}
        </p>
      </>
    </Post>
  );
};

export default FirstPage;
