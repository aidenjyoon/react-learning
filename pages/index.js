import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Todo from "../components/Todo";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

const Home = () => {
  return (
    <div className={styles.body}>
      <h1>My Todos</h1>
      <Todo text="Todo 1" />
      <Todo text="Todo 2" />
      <Modal />
      <Backdrop />
    </div>
  );
};

export default Home;
