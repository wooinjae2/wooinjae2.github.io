import Post from '../components/post';
import styles from '../styles/Home.module.css'


function Home(props) {
  return (
    <div className={styles.container}>
      
      <Post
      title="안녕하세요 monsterfairy2 블로그입니다."
      
    >
      메인페이지
    </Post>
    {props.data}
    </div>
  )
}


export async function getStaticProps(){

  return {
    props: {
      data:'aa'
    }
  }
}

export default Home