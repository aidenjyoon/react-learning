import styles from "../styles/Home.module.scss";

const Todo = () => {
  return (
    <div className={styles.card}>
      <h2>Task 1</h2>
      <div>
        <button className={styles.btn}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
