import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalisOpen] = useState(false);

  const deleteHandler = () => {
    setModalisOpen(true);
  };

  const closeModalHandler = () => {
    setModalisOpen(false);
  };

  return (
    <div className={styles.card}>
      <h2>{props.text}</h2>
      <div>
        <button className={styles.btn} onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {/* these expressions are the same */}
      {modalIsOpen ? <Modal onClick={closeModalHandler} /> : null}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

export default Todo;
