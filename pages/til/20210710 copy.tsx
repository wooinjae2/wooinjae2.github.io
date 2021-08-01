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
        <h2>React Ref</h2>
        <p>
          DOM element에 접근하기 위해 Reference를 통해 접근할수 있다.
          <br />
          ref props에 Ref엘리먼트를 할당받을 변수를 넘겨주면 react에서 render를
          실행하면서 해당하는 변수에 DOM element를 할당해주게 되고 이 할당받은
          ref를 통해 DOM Element에 접근할 수 있다.
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
          Controlled vs Uncotrolled Conompoent
          <br />
          input엘리먼트를 예로들면, input 컴포넌트는 브라우저에서 내부적으로
          state를 가지는 경향이 있고 user의 입력을 저장하고, 엘리먼트에 반영하는
          기능을 가지고 있다. 우리가 이런 컴포넌트를 리액트 앱에서 사용할때
          우리는 이걸 우리의 state에 연결하고 싶다. ref를 통해서 input의 value를
          접근하고, 제어하는것은 uncotrolled이다. 우리가 input element의 state를
          제어하지 않고, 브라우저가 직접 데이터를 저장하고 element의 입력에도
          반영하고 우리는 그 데이터를 참조해서 value만 사용하기 때문에 input의
          state를 직접 제어하지 않기 때문에 uncontrolled Component라고 한다.
          <Editor
            value={`
            //Controlled Component
            import React, {useRef} from 'react';

            const UncontrolledComponent = () => {
              const ageInputRef = useRef();
              

              const buttonClickHandler = () => {
                console.log(ageInputRef.current.value) 
                //우리는 input 엘리먼트의 값을 저장하거나 화면에 반영위한 코드를 작성하지 않았지만 
                //input element의 데이터는 브라우저에 의해 관리, 반영되고,
                //우리는 원하는 시점에 브라우저에 의해 관리되는 정보를 사용하기 위해
                //ref를 통해 DOM element에 접근해 사용하는 형태를 Uncontrolled Component라고 한다. 
              }

              return(
                <>
                  <input
                    id="age"
                    type="text"
                    ref={ageInputRef}
                  />
                  <button onClick={buttonClickHandler}>TestButton</button>
                </>
              )

            }
            
export default UncontrolledComponent;

`}
            onValueChange={(value) => console.log(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          <br />
          Controlled 우리가 직접 input의 키입력을 받을 때마다 state에 저장하고,
          그 데이터를 다시 input엘리먼트에 value prop에 넘겨줘서 엘리먼트에
          반영하고 하게 되는 형태 엘리먼트의 내부 state가 리액트에 의해 컨트롤
          되는 형태를 controlled 컴포넌트라고 한다.
          <br />
          <Editor
            value={`
            //Controlled Component
            import React, {useState} from 'react';

            const ControlledComponent = () => {
              const [enteredUserAge, setEnteredUserAge] = useState('');

              const userAgeChangeHandler = (e) => { 
                //input 엘리먼트에 key입력으로 change가 일어날 때마다 
                //state value에 반영하고, state value state가 바뀌면 다시 렌더링되어 input element의 value prop에 반영된다.
                setEnteredUserAge(e.target.value);
              }

              return(
                <input
                  id="age"
                  type="text"
                  value={enteredUserAge}
                  onChange={userAgeChangeHandler}
                />
              )

            }
            
export default ControlledComponent;

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
