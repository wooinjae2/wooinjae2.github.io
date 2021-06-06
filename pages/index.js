import Post from "../components/Post";
import styles from "../styles/Home.module.css";

function Home(props) {
  let preloadedState;
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-underscore-dangle
    preloadedState = window.__NEXT_DATA__.props;
    console.log("asdasd");
    console.log("preloadedState11", preloadedState);
  }

  console.log(preloadedState);
  function renderProps() {
    console.log("renderProps22", preloadedState);

    if (props && props.data) {
      // eslint-disable-next-line react/prop-types
      return <div>{props.data.name}</div>;
    }
    return null;
  }
  const renderPropsComp = renderProps();
  return (
    <div className={styles.container}>
      <Post title="안녕하세요 monsterfairy2 블로그입니다.">메인페이지</Post>
      {renderPropsComp}
      ㅁㄴㅇㅁㄴㅇ
    </div>
  );
}

export default Home;
