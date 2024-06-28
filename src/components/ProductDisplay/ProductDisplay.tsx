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
  numPerPage: number;
  currentPage: number;
};

export const ProductDisplay = ({ list, numPerPage, currentPage }: Props) => {
  const slicedList = list.slice(currentPage - 1, currentPage + numPerPage - 1);

  return (
    <div className={styles.cardsDisplay}>
      {slicedList.map((i: any) => (
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
