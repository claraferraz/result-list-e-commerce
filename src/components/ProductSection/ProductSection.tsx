import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { FilterInput, OrderOptions } from "../FilterInput/FilterInput";
import { ProductDisplay } from "../ProductDisplay/ProductDisplay";
import { PageButton } from "../PageButton/PageButton";
import { Product } from "../../productList";

const api = import.meta.env.VITE_API_URL;

const fetchProducts = async (
  order: OrderOptions,
  page: number,
  offset: number
) => {
  const response = await fetch(
    `${api}/products?` +
      new URLSearchParams({
        order: order.toString(),
        page: page.toString(),
        offset: offset.toString(),
      }).toString(),
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};

export const ProductSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[] | null>(null);

  const [order, setOrder] = useState<OrderOptions>(OrderOptions.None);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(16);
  const [total, setTotal] = useState(0);
  const currentItem = (page - 1) * offset;

  useEffect(() => {
    async function fetch(order: OrderOptions, page: number, offset: number) {
      setIsLoading(true);
      const response = await fetchProducts(order, page, offset);
      setData(response.productList);
      setIsLoading(false);
      response ? setTotal(response.total) : 0;
    }
    fetch(order, page, offset);
  }, [order, page, offset]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
              Showing {currentItem + 1}-{currentItem + offset} of {total}{" "}
              results
            </p>
          </div>
          <div className={styles.resultsNumberInput}>
            <label>
              Show
              <select
                name="PageResultQuantity"
                value={offset}
                onChange={(e) => {
                  setPage(1);
                  setOffset(parseInt(e.target.value));
                }}
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={24}>24</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      {data && <ProductDisplay list={data} />}
      <div>
        <PageButton
          total={total}
          numPerPage={offset}
          page={page}
          onClick={handleNextPage}
        />
      </div>
    </section>
  );
};
