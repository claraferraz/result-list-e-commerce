import styles from "./styles.module.css";
import { ProductCardHover } from "./ProductCardHover";
import { ProductDetail } from "./ProductDetail";

type Props = {
  img: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  detail: number | "New" | null;
};

export const ProductCard = ({
  img,
  title,
  description,
  price,
  originalPrice,
  detail,
}: Props) => {
  const priceDisplay = (value: number) => value.toLocaleString("pt-BR");

  let originalPriceP = "";
  if (typeof detail != "number") {
    originalPriceP = styles.hide;
  }

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
          <h3>Rp {priceDisplay(price)}</h3>
          <p className={originalPriceP}>Rp {priceDisplay(originalPrice)}</p>
        </div>
      </div>
      <ProductCardHover />
    </div>
  );
};
