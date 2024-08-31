import styles from "../styles/Button.module.css";

export default function StyledBtnMod(props) {
  return (
    <>
      <button className={styles[props.btnType]}>{props.btnLabel}</button>
    </>
  );
}
