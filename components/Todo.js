import styles from "../styles/Home.module.scss";

const Todo = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.text}</h2>
      <div>
        <button className={styles.btn}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
