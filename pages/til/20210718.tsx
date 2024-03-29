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
        <p>
          <strong>151.How React Really Works**</strong>
          <ul>
            <li>1. 리액트의 볼수없는 작업</li>
            <li>understanding the virtual DOM & DOM Updates</li>
            <li>Understanding State & State Updates</li>
          </ul>
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
          React는 컴포넌트가 가장 중요하다. 우리는 ui를 만들때 Component를
          사용하며 리액트는 컴포넌트 컨셉을 포용한다(embrace)? screen에 보여지게
          하는것은 React가 아닌 ReactDOM의 역할이다. React는 Component에
          대해서만 관리를 하고, Props, State, 부모와 자식관의 상태관리,
          Context(component-wide data)가 React의 주요 feature이며, Props, State,
          Context가 변경될경우 이 컨셉을 사용하는 컴포넌트들은 리액트에 의해
          업데이트 될것이고,리액트는 이 컴포넌트가 새로운것을 스크린에 draw하길
          원하는지 체크를 하게 된다. 만약 새로운것이 그려져야 한다면, React는
          ReactDOM에게 ReactDOM은 new Thing, new component를 스크린에 출력할
          필요가 있는것들을 알려줄 것이다.
          <br />
          React determines how the component tree looks like and what it should
          look like
          <br />
          ReactDOM receives the differences and manipulates the real DOM
          <br />
          <hr />
          Re-Evaluating Components !== Re-Rendering the DOM
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Real DOM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Re-evaluated whenever props</td>
                <td>
                  Changes to the real DOM are only made for differences between
                  evaluations
                </td>
              </tr>
              <tr>
                <td>React excutes component functions</td>
                <td />
              </tr>
            </tbody>
          </table>
          <p style={{ display: 'hidden' }}>
            React가 JavaScript 라이브러리라는 것을 잊지 말자 사용자 인터페이스를
            구축하기 위한 것입니다. 그게 내가 처음에 너에게 가르친 것이다. 물론
            이 과정은 변경되지 않았습니다. 우리도 배우고 보고, React는
            컴포넌트에 관한 것입니다. 우리는 이러한 사용자 인터페이스를 구축하기
            위해 Component를 사용합니다. React는 이 Component 개념을 수용합니다.
            Component를 사용하여 사용자 인터페이스를 효과적으로 구성합니다.
            그리고 그것은 Component를 사용합니다 사용자 인터페이스를 효과적으로
            업데이트합니다. 중요한 메모가 하나 있습니다. 우리는 또한 이
            ReactDOM을 보았습니다. 그리고 결국 ReactDOM은 웹에 대한
            인터페이스입니다. React 자체, React.js는 웹을 모릅니다.
            <br />
            결국 브라우저에 대해 아무것도 모릅니다. React는 방법을 알고
            있습니다. Component와 함께 작동하지만 해당 Component가 HTML 요소를
            포함하거나 완전히 가상의 요소를 포함하는 경우 그것은 React에
            중요하지 않습니다. 중요한 것은 ReactDOM입니다. 궁극적으로 실제 HTML
            요소를 화면. 그러나 React는 Component를 관리하는 라이브러리일
            뿐입니다. 상태를 관리하고 다른 Component 상태를 관리하며 Component를
            변경해야 하는 방법과 차이점을 찾습니다. Component의 이전 상태와
            비교할 수 있습니다. 현재 상태. 그리고 React는 무엇에 관한 모든
            정보를 어떤 화면이든 화면에 표시되어야 하는 내용과 변경됨 즉, 작업
            중인 인터페이스로 이동합니다.
            <br />
            <br />
            예를 들어, ReactDOM이 작업을 담당하기 때문에 ReactDOM으로
            넘어갑니다. 브라우저의 일부인 실제 DOM을 사용합니다. 따라서
            ReactDOM은 무언가를 가져올 책임이 있습니다. 사용자가 볼 수 있는
            화면입니다. React는 관심만 가지고 있습니다. Component. 기본적으로
            전달하는 데이터인 props에 관심이 있습니다. Component를 구성 가능하게
            만들고 부모-자식을 활성화하는 Component, Component 통신. React는
            내부 상태를 중요하게 생각합니다. 컴포넌트 내부의 데이터. 그리고
            React는 컨텍스트를 중요하게 생각합니다. Component 전체 데이터. 물론
            React에는 몇 가지 다른 기능이 있습니다. 기능도 내장되어 있습니다.
            그러나 이것이 핵심 기능입니다.
            <br />
            <br />
            props, state 또는 컨텍스트가 변경될 때마다 이를 사용하는 Component
            개념은 React에 의해 업데이트되고 React는 이 Component가 이제 화면에
            새로운 것을 그리려고 합니다. 그리고 그것이 있어야한다면 이 경우
            React는 ReactDOM에 이에 대해 알려서 ReactDOM이 새 화면, 새 구성
            요소, 새 출력을 화면. 따라서 해당 Component를 자세히 살펴보면
            여기에서 실제 DOM 통신에 대한 질문은 물론 이것이 작동합니까? 내가
            언급했듯이 React는 Component에 관심이 있습니다. React가 결국 하는
            일은 가상 DOM. 앱이 어떤 Component 트리인지 결정합니다. 결국 건물을
            짓고 모든 Component 자체에는 물론 하위 트리, 해당 Component에서
            반환한 JSX 코드.
            <br />
            <br />
            해당 Component 트리가 현재 어떻게 보이는지와 예를 들어 상태 업데이트
            후와 같아야 합니다. 그리고 그 그런 다음 정보는 이제 ReactDOM에 대해
            알고 있는 ReactDOM으로 전달됩니다. 차이점과 실제 DOM을 조작하는
            방법을 아는 것 해당 가상 DOM과 일치시키기 위해 React가 파생한 가상
            스냅샷 Component 트리. 그리고 이와 관련하여 중요한 것이 하나
            있습니다. 참고로. 이 과정을 통해 나는 종종 React가 Component를
            재평가하는 Component 기능입니다. 그리고 실제로, 앞서 언급했듯이
            state props나 컨텍스트가 있을 때마다 Component가 변경되면 해당 구성
            요소 기능이 다시 실행됩니다. 그 컴포넌트는 React에 의해
            재평가됩니다. 그러나 주목할 가치가 있습니다. Component를 재평가하는
            것은 DOM을 다시 렌더링하는 것과 동일하지 않습니다. 그래서 컴포넌트
            함수가 React에 의해 재실행되기 때문에 실제 실제 DOM의 해당 부분이
            다시 렌더링되거나 재평가됨. 대신 Component를 구별해야 합니다. 부분,
            React 부분 및 실제 DOM. 방금 말했듯이 우리의 Component는 props,
            state 또는 컨텍스트가 변경될 때마다 재평가됩니다. 그래서 반응 그런
            다음 해당 Component 기능을 다시 실행합니다. 이제 실제 DOM에서 반면에
            변경해야 하는 위치에서만 업데이트됩니다. React의 이전 상태 사이에서
            파생된 그 차이를 기반으로 Component 및 해당 트리 및 state prop
            이후의 현재 상태 또는 컨텍스트 변경. 따라서 실제 DOM은 항상 변경되지
            않습니다. 드물게 필요할 때만 변경됩니다. 그리고 그것은 중요합니다
            성능은 이전 제품과 가상 비교를 수행하기 때문에 상태 및 현재 상태,
            이는 상당히 저렴하고 수행하기 쉽습니다. 그 메모리에서만 발생합니다.
            렌더링된 실제 DOM에 접근 브라우저에서 성능 관점에서 보면 꽤 비싸다.
            실제 DOM으로 작업하는 것은 성능으로 판명되기 때문입니다. 집중적 인
            작업. 물론 한곳에서 작은 변화는 아니지만, 항상 많은 장소에서 작은
            변경을 수행한 다음 페이지 실제 DOM으로 너무 많이 작업하기 때문에
            느려질 수 있습니다. 그리고 내 React는 가상 비교를 수행하는 구조를
            가지고 있습니다. 해당 가상 DOM을 사용하여 마지막 스냅샷과 실제 DOM에
            대한 현재 스냅샷.
            <br />
            <br />
            이것이 React가 여기에서 작동하는 방식입니다. 이 가상 DOM 비교,
            찾기를 수행합니다. 두 스냅샷의 차이점을 알아냅니다. 그리고 실제 예를
            보려면, 이렇게 보일 수 있습니다. 주어진 모든 Component를 우리라고
            가정 해 봅시다. 이전 평가 결과. 따라서 Component 함수가 실행될 때
            이번이 마지막입니다. 이제 일부 상태가 변경되고 갑자기 새 단락을
            보여주고 싶습니다. 이것이 우리의 현재 평가 결과입니다. 이 경우
            React는 둘 사이의 차이점을 결정할 것입니다. 스냅샷은 이 단락이며
            다음으로 변경 사항을 보고합니다. ReactDOM이 실제 DOM을 업데이트하고
            이것을 삽입할 수 있도록 ReactDOM 절. ReactDOM은 전체 DOM을 다시
            렌더링하지 않습니다.
            <br />
            <br />이 기존 h1 또는 div 요소를 건드리지 않습니다. 그것은 단지 div
            내부의 h1 요소 뒤에 단락을 삽입합니다. 그건 React가 이면에서
            작동하는 방식을 간단히 말해서. 이제 이것을 봅시다. 실제 코드로
            작업을 수행하고 조금 우리가 이것에 대한 느낌을 얻고 우리 모두가
            방법을 찾을 수 있도록 이것은 모두 동작하고 props 및 state가 변경될
            수 있습니다. 컨텍스트 및 관련된 다른 Component에 대해 이것을
            이해하는 것이 중요합니다.
          </p>
          <Editor
            value={`
// * Virtual DOM Diffing
//1. Previous Evaluation result
<div>
  <h1>Hi there!</h1>
</div>


//2. Current Evaluation result
<div>
  <h1>Hi there!</h1>
  <p>This is new!</p> // p태그가 DOM에 추가되고 나머지는 변경되지 않고 유지될 것이다.
</div>
`}
            onValueChange={(value) => console.log(value)}
            highlight={(value) => highlight(value, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          s Component가 Re-Evaluation되는건 성능적으로 낭비인데 부모가 관리하는
          Data가 변경되면 모든 props와 state가 변경되는경우 모든 자식component가
          재실행 된다. 이런걸 막기 위해 어떻게 하는가 ?{' '}
          <strong>React.meno</strong>
        </p>
      </>
    </Post>
  );
};

export default FirstPage;
