import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// import Image from 'next/image';
import Post from '../../components/Post';

const FirstPage = () => {
  return (
    <Post
      title="React Complete Guide(Udemy)"
      refList={['React Complete Guide(Udemy)']}
    >
      <>
        <ul>
          <li>Working With (Side)Effects</li>
          <li>Managing more Complex State with Reducers</li>
          <li>Managing App-Widte or Component-Wide State with Context</li>
        </ul>
        <p>
          <strong>(Side) Effect란 무엇인가</strong>
          useEffect hook은 두개의 파라미터와 함께 호출된다.
          <br />
          1번째는 함수, 2번째는 dependencies배열. 1 함수는 2번째 파라미터로
          명시된 디펜던시의 변경이 일어날 경우 호출되는 함수이고, 2번째 배열은
          첫번째 함수의 호출을 실행하기 위해 변경될 디펜던시
          <br />
          clean up function
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
          useReducer
          <br />
          state관리가 복잡할 경우 useReducer를 이용하면 state 관리를 더욱 편하게
          할수 있다. 하지만 useReducer 자체가 조금 복잡하고, 버그를 만들수 있기
          때문에 꼭 필요한 경우에 사용하는게 좋다.
          <br />
          {
            // "React Context is Not optimized for high frequency changes We'll explore a better tool for that, later."}
          }
          <br />
          {/**
             * React Context also shouldn't be used to replace ALL component 
          communication and props
          Component should still be configurable via props and short "prop chains" might not need any replacement
             * 
             */}
          <br />
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
          {/* <Image src="/portal.png" width="500" height="auto" /> */}
        </p>
        <p>
          Rules of Hooks
          <ul>
            <li>1. Only call React Hooks in React Function</li>
            <li>2. Only call React Hook</li>
            <li>
              3. useEffect : Always add everything you refer to inside of
              useEffect() as a dependency
            </li>
          </ul>
          <br />
          useImperativeHandle & forwardRef 부모에서 자식 컴포넌트의 ref의 접근이
          필요한 경우가 있는데 이를 사용하기 위한 hook
          <Editor
            value={`



            import React, { useRef, useImperativeHandle } from 'react';
            import classes from './Input.module.css';
            
            const Input = React.forwardRef((props, ref) => {
               const inputRef = useRef();
            
               const activate = () => {
                   inputRef.current.focus();
               }
            
               useImperativeHandle(ref, ()=>{
                   return {
                    activate: activate
                   }
               });
              return <div
              className={\`$\{classes.control} $\{
                props.isValid === false ? classes.invalid : ''
              }\`}
            >
              <label htmlFor={props.id}>{props.label}</label>
              <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
              />
            </div>
             
            
            })
            
            export default Input;
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
