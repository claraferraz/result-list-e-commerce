import styles from "./styles.module.css";
import filterIcon from "../../assets/system-uicons_filtering.svg";

export const FilterInput = () => {
  return (
    <button className={styles.filterBtn}>
      <img src={filterIcon} alt="filter icon" />
      Filter
    </button>
  );
};
