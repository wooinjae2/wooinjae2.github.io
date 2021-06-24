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
    if (props && props.data) {
      return <div>{props.data.name}</div>;
    }
    return null;
  }
  const renderPropsComp = renderProps();
  return (
    <div className={styles.container}>
      <Post title="안녕하세요.">
        공부한 것을 기록하고, 테스트 하기위해 만든 블로그 입니다.
      </Post>
      {renderPropsComp}
    </div>
  );
}

export default Home;
