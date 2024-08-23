import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { FilterInput, OrderOptions } from "../FilterInput/FilterInput";
import { ProductDisplay } from "../ProductDisplay/ProductDisplay";
import { PageButton } from "../PageButton/PageButton";
import { Product } from "../../productList";

const api = import.meta.env.VITE_API_URL;

const fetchProducts = async () => {
  const response = await fetch(`${api}/products`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const ProductSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[] | null>(null);

  const [order, setOrder] = useState<OrderOptions>(OrderOptions.None);
  const [page, setPage] = useState(1);
  const [numPerPage, setNumPerPage] = useState(16);
  const currentItem = (page - 1) * numPerPage;

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const data = await fetchProducts();
      setData(data);
      setIsLoading(false);
    }

    fetch();
  }, []);

  if (isLoading) {
    console.log("Loading");
  }

  console.log(data);

  const total = data ? data.length : 0;

  function handleNextPage(value: number) {
    setPage(value);
  }

  return (
    <section className={styles.productSection}>
      <div className={styles.filterBarBg}>
        <div className={styles.filterBarContent}>
          <div className={styles.leftContent}>
            <FilterInput
              setOrder={setOrder}
              selected={order}
              setPage={setPage}
            />
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
                onChange={(e) => {
                  setPage(1);
                  setNumPerPage(parseInt(e.target.value));
                }}
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={32}>32</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      {data && (
        <ProductDisplay
          list={data}
          currentPage={page}
          numPerPage={numPerPage}
        />
      )}
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
