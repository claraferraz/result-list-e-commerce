import styles from "./styles.module.css";
import filterIcon from "../../assets/system-uicons_filtering.svg";

export enum OrderOptions {
  None,
  AlphaAsc,
  AlphaDesc,
  PriceAsc,
  PriceDesc,
}

type Props = {
  setOrder: (order: OrderOptions) => void;
};

export const FilterInput = ({ setOrder }: Props) => {
  return (
    <div>
      <button className={styles.filterBtn}>
        <img src={filterIcon} alt="filter icon" />
        Filter
      </button>
      <div>
        <button onClick={() => setOrder(OrderOptions.None)}>None</button>
        <button onClick={() => setOrder(OrderOptions.AlphaAsc)}>A-Z</button>
        <button onClick={() => setOrder(OrderOptions.AlphaDesc)}>Z-A</button>
        <button onClick={() => setOrder(OrderOptions.PriceAsc)}>
          Price: low to high
        </button>
        <button onClick={() => setOrder(OrderOptions.PriceDesc)}>
          Price: high to low
        </button>
      </div>
    </div>
  );
};
