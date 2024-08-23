import { Product } from "../../productList";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./styles.module.css";

type Props = {
  list: Product[];
  numPerPage: number;
  currentPage: number;
};

export const ProductDisplay = ({ list, numPerPage, currentPage }: Props) => {
  const start = (currentPage - 1) * numPerPage;
  const slicedList = list.slice(start, start + numPerPage);

  return (
    <div className={styles.cardsDisplay}>
      {slicedList.map((i: any) => (
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
