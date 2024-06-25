import styles from "./styles.module.css";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}
export const HamburguerMenu = (props: Props) => {
  const { open, setOpen } = props;
  return (
    <button
      type="button"
      className={`${styles.wrapper} ${open ? styles.open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className={`${styles.barOne} ${styles.bars}`}></div>
      <div className={`${styles.barTwo} ${styles.bars}`}></div>
      <div className={`${styles.barThree} ${styles.bars}`}></div>
    </button>
  );
};
