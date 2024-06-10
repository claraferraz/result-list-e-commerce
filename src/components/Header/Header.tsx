import styles from "./styles.module.css";
import ArrowIcon from "../../assets/arrow.svg";

export const Header = () => {
  return (
    <div className={styles.background}>
      <h1>Shop</h1>
      <p className={styles.breadcrumb}>
        <span className={styles.home}>Home</span>
        <span className={styles.arrow}>
          <img src={ArrowIcon} alt="" />
        </span>
        <span className={styles.current}>Shop</span>
      </p>
    </div>
  );
};
