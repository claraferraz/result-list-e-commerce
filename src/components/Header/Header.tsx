import styles from "./styles.module.css";
import ArrowIcon from "../../assets/arrow.svg";

type Props = {
  page: string;
};

export const Header = ({ page }: Props) => {
  return (
    <div className={styles.background}>
      <h1>{page}</h1>
      <p className={styles.breadcrumb}>
        <span className={styles.home}>Home</span>
        <span className={styles.arrow}>
          <img src={ArrowIcon} alt="" />
        </span>
        <span className={styles.current}>{page}</span>
      </p>
    </div>
  );
};
