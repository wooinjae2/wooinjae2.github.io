import Post from '../components/Post';
import styles from '../styles/Home.module.css';

interface Props {
  data: {
    name: string;
  };
}

function Home(props: Props) {
  let preloadedState: Object = {};
  if (typeof window !== 'undefined') {
    preloadedState = window.__NEXT_DATA__.props;
    console.log('asdasd');
    console.log('preloadedState11', preloadedState);
  }

  function renderProps() {
    console.log('renderProps22', preloadedState);

    if (props && props.data) {
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
