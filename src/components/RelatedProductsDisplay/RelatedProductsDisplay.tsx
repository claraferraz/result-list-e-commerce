import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { OrderOptions } from "../FilterInput/FilterInput";
import { ProductDisplay } from "../ProductDisplay/ProductDisplay";
import { Product } from "../../productList";
import { useNavigate } from "react-router-dom";

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

export const RelatedProductDisplay = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const navigate = useNavigate();
  const order = OrderOptions.None;
  const [offset, setOffset] = useState(4);
  const page = 1;

  useEffect(() => {
    async function fetch(order: OrderOptions, page: number, offset: number) {
      const response = await fetchProducts(order, page, offset);
      setData(response.productList);
    }
    fetch(order, page, offset);
  }, [offset]);

  if (!data) {
    return;
  }
  const handleShowMore = () => {
    if (offset === 4) {
      setOffset(8);
    } else {
      navigate("/");
    }
  };
  return (
    <div className={styles.wrapper}>
      <h1>Related Products</h1>
      <ProductDisplay list={data} />
      <button className={styles.btn} onClick={handleShowMore}>
        Show More
      </button>
    </div>
  );
};
