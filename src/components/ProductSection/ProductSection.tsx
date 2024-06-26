import styles from "./styles.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import image from "../../assets/image-1.png";

export const ProductSection = () => {
  return (
    <section className={styles.display}>
      <ProductCard
        img={image}
        title="Syltherine"
        description="example"
        price={2500000}
        originalPrice={3500000}
        detail={30}
      />
      <ProductCard
        img={image}
        title="Syltherine"
        description="example"
        price={2500000}
        originalPrice={3500000}
        detail={"New"}
      />
      <ProductCard
        img={image}
        title="Syltherine"
        description="example"
        price={2500000}
        originalPrice={3500000}
        detail={null}
      />
      <ProductCard
        img={image}
        title="Syltherine"
        description="example"
        price={2500000}
        originalPrice={3500000}
        detail={30}
      />
    </section>
  );
};
