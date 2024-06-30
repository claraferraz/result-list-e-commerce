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
  setPage: (page: number) => void;
};

export const FilterInput = ({ setOrder, selected, setPage }: Props) => {
  const [open, setOpen] = useState(false);
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
          onClick={() => {
            setOrder(OrderOptions.None);
            setPage(1);
          }}
        >
          None
        </button>
        <button
          className={selected === OrderOptions.AlphaAsc ? styles.select : ""}
          onClick={() => {
            setOrder(OrderOptions.AlphaAsc);
            setPage(1);
          }}
        >
          A-Z
        </button>
        <button
          className={selected === OrderOptions.AlphaDesc ? styles.select : ""}
          onClick={() => {
            setOrder(OrderOptions.AlphaDesc);
            setPage(1);
          }}
        >
          Z-A
        </button>
        <button
          className={selected === OrderOptions.PriceAsc ? styles.select : ""}
          onClick={() => {
            setOrder(OrderOptions.PriceAsc);
            setPage(1);
          }}
        >
          Price: low to high
        </button>
        <button
          className={selected === OrderOptions.PriceDesc ? styles.select : ""}
          onClick={() => {
            setOrder(OrderOptions.PriceDesc);
            setPage(1);
          }}
        >
          Price: high to low
        </button>
      </div>
    </div>
  );
};
