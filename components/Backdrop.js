import style from "../styles/Home.module.scss";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick}></div>;
};

export default Backdrop;
