import Post from '../../components/Post';

const FirstPage = () => {
  return (
    <Post
      title="브라우저의 동작원리"
      refList={['https://d2.naver.com/helloworld/59361(Naver D2)']}
    >
      <>
        <h2>
          <strong>브라우저의 동작원리</strong>
        </h2>
        <p>
          1. 브라우저의 기본 기능
          <br />
          브라우저는 주된 기능은 사용자가 URI로 선택한 자원을 서버에 요청하고
          브라우저에 표시하는 것이다.
          <br />
          자원은 보통 HTML 문서이지만 이미지나 PDF같은 다른 형태일 수도 있다.
          <ol>
            <li>qs</li>
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
