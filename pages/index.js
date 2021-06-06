import Post from '../components/post';
import styles from '../styles/Home.module.css'
import { server } from '../config';
function Home(props) {
  let preloadedState;
  if (typeof window !== "undefined") {
    preloadedState = window.__NEXT_DATA__.props;
    console.log('preloadedState11', preloadedState);
  }
  
  console.log(preloadedState);
  function renderProps(){
    console.log('renderProps22', preloadedState);
    
    if(props.data){
      return <div>{props.data.name}</div>;
      
    }else{
      return null;
    }
  }
  const renderPropsComp = renderProps();
  return (
    <div className={styles.container}>
      <Post
      title="안녕하세요 monsterfairy2 블로그입니다."
      >
      메인페이지
    </Post>
    {renderPropsComp}
    ㅁㄴㅇㅁㄴㅇ
    </div>
  )
}



export default Home;