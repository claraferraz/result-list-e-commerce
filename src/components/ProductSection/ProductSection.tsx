import styles from "./styles.module.css";
import { useState } from "react";
import { ProductList } from "../../productList";
import { FilterInput } from "../FilterInput/FilterInput";
import { ProductDisplay } from "../ProductDisplay/ProductDisplay";
import { PageButton } from "../PageButton/PageButton";

export const ProductSection = () => {
  const total = ProductList.length;
  const [page, setPage] = useState(1);
  const [numPerPage, setNumPerPage] = useState(8);
  const [currentItem, setCurrentItem] = useState(0);

  function handleNextPage(value: number) {
    setPage(value);
    setCurrentItem((value - 1) * numPerPage);
    if (currentItem > total - numPerPage) {
      return;
    }
  }

  return (
    <section className={styles.productSection}>
      <div className={styles.filterBarBg}>
        <div className={styles.filterBarContent}>
          <div className={styles.leftContent}>
            <FilterInput />
            <p className={styles.pageDescription}>
              Showing {currentItem + 1}-{currentItem + numPerPage} of {total}{" "}
              results
            </p>
          </div>
          <div className={styles.resultsNumberInput}>
            <label>
              Show
              <select
                name="PageResultQuantity"
                value={numPerPage}
                onChange={(e) => setNumPerPage(parseInt(e.target.value))}
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={32}>32</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <ProductDisplay
        list={ProductList}
        currentPage={page}
        numPerPage={numPerPage}
      />
      <div>
        <PageButton
          total={total}
          numPerPage={numPerPage}
          page={page}
          onClick={handleNextPage}
        />
      </div>
    </section>
  );
};
