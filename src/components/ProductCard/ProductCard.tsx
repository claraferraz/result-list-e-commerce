import styles from "./styles.module.css";
import { ProductCardHover } from "./ProductCardHover";
import { ProductStamp } from "./ProductStamp";
import { Product } from "../../productList";

export function calculatePrice(
  price: Product["price"],
  discount: Product["discount"]
): number {
  const p = parseFloat(price);
  return (1 - discount / 100) * p;
}

type Props = {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  price: string;
  discount: number;
  isNew: boolean;
};

export const ProductCard = ({
  id,
  img,
  title,
  subtitle,
  price,
  isNew,
  discount,
}: Props) => {
  const priceDisplay = (value: number) => value.toLocaleString("pt-BR");

  let originalPriceP = "";
  if (discount <= 0) {
    originalPriceP = styles.hide;
  }
  const p = parseFloat(price);
  const calculatedPrice = calculatePrice(price, discount);

  return (
    <div className={styles.wrapper}>
      <ProductStamp discount={discount} isNew={isNew} />
      <div className={styles.image}>
        <img src={img} alt="product image" />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className={styles.priceContainer}>
          <h3>Rp {priceDisplay(calculatedPrice)}</h3>
          <p className={originalPriceP}>Rp {priceDisplay(p)}</p>
        </div>
      </div>
      <ProductCardHover id={id} />
    </div>
  );
};
