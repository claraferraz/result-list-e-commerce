import { Product } from "../../productList";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./styles.module.css";

type Props = {
  list: Product[];
};

export const ProductDisplay = ({ list }: Props) => {
  return (
    <div className={styles.cardsDisplay}>
      {list.map((i: any) => (
        <ProductCard
          key={`${i.title}`}
          img={i.images[0].url}
          title={i.title}
          subtitle={i.subtitle}
          price={i.price}
          discount={i.discount}
          isNew={i.new}
        />
      ))}
    </div>
  );
};
