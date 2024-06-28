import styles from "./styles.module.css";
import { ProductCardHover } from "./ProductCardHover";
import { ProductDetail } from "./ProductDetail";
import { Product } from "../../productList";

export function calculatePrice(
  price: Product["price"],
  detail: Product["detail"]
): number {
  if (typeof detail !== "number") {
    return price;
  }

  return (1 - detail / 100) * price;
}

type Props = {
  img: string;
  title: string;
  description: string;
  price: number;
  detail: number | "New" | null;
};

export const ProductCard = ({
  img,
  title,
  description,
  price,
  detail,
}: Props) => {
  const priceDisplay = (value: number) => value.toLocaleString("pt-BR");

  let originalPriceP = "";
  if (typeof detail != "number") {
    originalPriceP = styles.hide;
  }
  const calculatedPrice = calculatePrice(price, detail);

  return (
    <div className={styles.wrapper}>
      <ProductDetail detail={detail} />
      <div className={styles.image}>
        <img src={img} alt="product image" />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.priceContainer}>
          <h3>Rp {priceDisplay(calculatedPrice)}</h3>
          <p className={originalPriceP}>Rp {priceDisplay(price)}</p>
        </div>
      </div>
      <ProductCardHover />
    </div>
  );
};
