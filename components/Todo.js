import styles from "../styles/Home.module.scss";

const Todo = (props) => {
  const deleteHandler = () => {
    console.log("d");
  };

  return (
    <div className={styles.card}>
      <h2>{props.text}</h2>
      <div>
        <button className={styles.btn} onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
