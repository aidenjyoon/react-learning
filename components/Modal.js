import style from "../styles/Home.module.scss";

const Modal = () => {
  return (
    <div className={style.modal}>
      <p>Are you sure?</p>
      <button>yes</button>
      <button>no</button>
    </div>
  );
};

export default Modal;
