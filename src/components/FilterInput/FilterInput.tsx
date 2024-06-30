import styles from "./styles.module.css";
import filterIcon from "../../assets/system-uicons_filtering.svg";
import { useState } from "react";

export enum OrderOptions {
  None,
  AlphaAsc,
  AlphaDesc,
  PriceAsc,
  PriceDesc,
}

type Props = {
  setOrder: (order: OrderOptions) => void;
  selected: OrderOptions;
};

export const FilterInput = ({ setOrder, selected }: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles.filterWrapper}>
      <div>
        <button className={styles.filterBtn} onClick={() => setOpen(!open)}>
          <img src={filterIcon} alt="filter icon" />
          Filter
        </button>
      </div>
      <div className={`${styles.optionsWrapper} ${open ? styles.open : ""}`}>
        <button
          className={selected === OrderOptions.None ? styles.select : ""}
          onClick={() => setOrder(OrderOptions.None)}
        >
          None
        </button>
        <button
          className={selected === OrderOptions.AlphaAsc ? styles.select : ""}
          onClick={() => setOrder(OrderOptions.AlphaAsc)}
        >
          A-Z
        </button>
        <button
          className={selected === OrderOptions.AlphaDesc ? styles.select : ""}
          onClick={() => setOrder(OrderOptions.AlphaDesc)}
        >
          Z-A
        </button>
        <button
          className={selected === OrderOptions.PriceAsc ? styles.select : ""}
          onClick={() => setOrder(OrderOptions.PriceAsc)}
        >
          Price: low to high
        </button>
        <button
          className={selected === OrderOptions.PriceDesc ? styles.select : ""}
          onClick={() => setOrder(OrderOptions.PriceDesc)}
        >
          Price: high to low
        </button>
      </div>
    </div>
  );
};
