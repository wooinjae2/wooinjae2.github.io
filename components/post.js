import styles from "./post.module.css";

export default function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.postTitle}>
        <h2>{props.title}</h2>
      </div>
      <hr />

      <div className={styles.postBody}>{props.children}</div>
      {props.refList ? (
        <>
          <hr />
          <div className={styles.reference}>
            <h2>출처</h2>
            {props.refList &&
              props.refList.map((ref) => {
                return <div>{ref}</div>;
              })}
          </div>
        </>
      ) : null}
    </div>
  );
}
