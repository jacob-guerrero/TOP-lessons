import styles from "../styles/Button.module.css";

export default function StyledButton({ type = "primary", label = "Button" }) {
  const type2 = "secondary";
  const label2 = "Button2";
  return (
    <>
      <button className={styles[type]}>{label}</button>
      <button className={styles[type2]}>{label2}</button>
    </>
  );
}
