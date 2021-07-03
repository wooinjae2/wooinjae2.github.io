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
        <h2>State Update 관련</h2>
        <Editor
          value={`
const [userInput, setUserInput] = useState({
  enteredTitle: '', 
  enteredAmount: '',
  enteredDate:'', 
})

const changeNameHandler = (event) =>{
  setUserInput({...userInput, enteredTitle: event.target.value})
} //state의 업데이트는 스케줄되어 이루어 지고 많은 state가 동시에 업데이트 될경우 이런 방식을 통해 state를 업데이트 하는것은 
//스케줄된 state가 반영되기 전에 일어날 경우 이전 state가 반영될 수 있기 때문에 좋은 방식이 아니다.

//아래와 같은 방식으로 이전의 state를 받아와서 사용할 경우 가장 최신 state를 반영하는것이 보장되므로 위의 방식보다 더 안전하다.
const changeNameHandler = (event) =>{ //
  setUserInput((prevState)=>{ return {
    ...prevState, enteredTitle: event.target.value
  }
})

// 1. 이렇게 3가지를 업데이트 할경우 이전 state가 보장되지 않아 최종 결과가 의도하지 않은 결과가 나올 수 있음
setUserInput({...userInput, enteredTitle: 'title'});
setUserInput({...userInput, enteredAmount: 'amount'});
setUserInput({...userInput, enteredDate: '2021-03-03'});

// 2. 이렇게 업데이트 할경우 이전 state가 유지됨
setUserInput((prevState)=>{return{...prevState, enteredTitle: 'title'}});
setUserInput((prevState)=>{return{...prevState, enteredAmount: 'amount'}});
setUserInput((prevState)=>{return{...prevState, enteredDate: '2021-03-03'}});

}

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
        <hr />
        <br />
      </>
    </Post>
  );
};

export default FirstPage;
