import Post from "../../components/Post";

export default function a(props) {
  console.log(props);
  return (
    <Post
      title="CSS position"
      refList={["제로초 블로그"]}
    >
      <h3>static</h3> 
      <p>
      postion 속성을 주지 않았을 경우 <b>기본값</b>으로
      1. top, bottom, left, rigth, z-index 속성이 아무런 영향도 주지 않음.
      </p>
      <h3>relative</h3> 
      <p>
      요소를 일반적인 문서의 흐름에 따라 배치하고, 자기 자신을 기준으로 top, rigth, bottom, left의
      값에 따라 오프셋을 적용한다. 오프셋은 다른 요소에 영향을 주지 않음
      <br/>
      <br/>
      페이지 레이아웃에서 요소가 차지하는 공간은 static일 때와 같습니다.
      </p>
      
      <h3>absolute</h3> 
      <p>
      요소를 일반적인 문서의 흐름에서 제거, 자기 자신을 기준으로 top, rigth, bottom, left의
      값에 따라 오프셋을 적용한다. 오프셋은 다른 요소에 영향을 주지 않음
      <br/>
      <br/>
      페이지 레이아웃에서 요소가 차지하는 공간은 static일 때와 같습니다.
      </p>
      
      
      fixed
      sticky
      
    </Post>
  );
}
