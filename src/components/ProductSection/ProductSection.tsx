import styles from "./styles.module.css";
import { PageButton } from "../PageButton/PageButton";
import { useState } from "react";
import { ProductList } from "../../productList";
import { FilterInput } from "../FilterInput/FilterInput";
import { ProductDisplay } from "../ProductDisplay/ProductDisplay";

export const ProductSection = () => {
  const [page, setPage] = useState(1);
  const [numPerPage, setNumPerPage] = useState(8);
  const [total, setTotal] = useState(32);
  const current = page;

  return (
    <section className={styles.productSection}>
      <div className={styles.filterBarBg}>
        <div className={styles.filterBarContent}>
          <div className={styles.leftContent}>
            <FilterInput />
            <p className={styles.pageDescription}>
              Showing {current}-{current + numPerPage - 1} of {total} results
            </p>
          </div>
          <div className={styles.resultsNumberInput}>
            <label>
              Show
              <select name="PageResultQuantity">
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <ProductDisplay list={ProductList} />
      <div>
        <PageButton value="Prev" />
        <PageButton value={1} />
        <PageButton value={2} />
        <PageButton value="Next" />
      </div>
    </section>
  );
};
