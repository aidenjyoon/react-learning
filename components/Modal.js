import style from "../styles/Home.module.scss";

const Modal = (props) => {
  return (
    <div className={style.modal}>
      <p>Are you sure?</p>

      <button className={style.btn_no} onClick={props.onClick}>
        no
      </button>
      <button className={style.btn} onClick={props.onClick}>
        yes
      </button>
    </div>
  );
};

export default Modal;
