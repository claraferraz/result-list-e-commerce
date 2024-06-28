import styles from "./styles.module.css";
import { useState } from "react";
import { ProductList, Product } from "../../productList";
import { FilterInput, OrderOptions } from "../FilterInput/FilterInput";
import { ProductDisplay } from "../ProductDisplay/ProductDisplay";
import { PageButton } from "../PageButton/PageButton";
import { calculatePrice } from "../ProductCard/ProductCard";

const orderByAz = (a: Product, b: Product) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

const orderByZa = (a: Product, b: Product) => {
  if (a.title < b.title) {
    return 1;
  }
  if (a.title > b.title) {
    return -1;
  }
  return 0;
};

const orderByPriceAsc = (a: Product, b: Product) => {
  const priceA = calculatePrice(a.price, a.detail);
  const priceB = calculatePrice(b.price, b.detail);

  if (priceA < priceB) {
    return -1;
  }

  if (priceA > priceB) {
    return 1;
  }

  return 0;
};

const orderByPriceDesc = (a: Product, b: Product) => {
  const priceA = calculatePrice(a.price, a.detail);
  const priceB = calculatePrice(b.price, b.detail);

  if (priceA < priceB) {
    return 1;
  }

  if (priceA > priceB) {
    return -1;
  }

  return 0;
};

const orderProducts = (products: Product[], order: OrderOptions): Product[] => {
  switch (order) {
    case OrderOptions.AlphaAsc:
      return products.toSorted(orderByAz);

    case OrderOptions.AlphaDesc:
      return products.toSorted(orderByZa);

    case OrderOptions.PriceAsc:
      return products.toSorted(orderByPriceAsc);

    case OrderOptions.PriceDesc:
      return products.toSorted(orderByPriceDesc);

    case OrderOptions.None:
      return products;
  }
};

export const ProductSection = () => {
  const total = ProductList.length;

  const [order, setOrder] = useState<OrderOptions>(OrderOptions.None);
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

  const orderedList = orderProducts(ProductList, order);

  return (
    <section className={styles.productSection}>
      <div className={styles.filterBarBg}>
        <div className={styles.filterBarContent}>
          <div className={styles.leftContent}>
            <FilterInput setOrder={setOrder} />
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
      <ProductDisplay
        list={orderedList}
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
