import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Todo from "../components/Todo";

const Home = () => {
  return (
    <div className={styles.body}>
      <h1>My Todos</h1>
      <Todo text="Todo 1" />
      <Todo text="Todo 2" />
    </div>
  );
};

export default Home;
