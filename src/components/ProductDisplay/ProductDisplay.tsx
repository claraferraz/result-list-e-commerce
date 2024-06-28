import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./styles.module.css";

type Props = {
  list: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    detail: number | string | null;
  }[];
};

export const ProductDisplay = ({ list }: Props) => {
  return (
    <div className={styles.cardsDisplay}>
      {list.map((i: any) => (
        <ProductCard
          img={i.image}
          title={i.title}
          description={i.description}
          price={i.price}
          detail={i.detail}
        />
      ))}
    </div>
  );
};
