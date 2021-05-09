import Post from '../components/post';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Post
      title="안녕하세요 monsterfairy2 블로그입니다."
      
    >
      메인페이지
    </Post>
    </div>
  )
}
