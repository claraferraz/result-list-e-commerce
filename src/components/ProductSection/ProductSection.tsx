import styles from "./styles.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import image from "../../assets/image-1.png";
import filterIcon from "../../assets/system-uicons_filtering.svg";
import { PageButton } from "../PageButton/PageButton";

export const ProductSection = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.filterBarBg}>
        <div className={styles.filterBarContent}>
          <div className={styles.leftContent}>
            <button className={styles.filterBtn}>
              <img src={filterIcon} alt="filter icon" />
              Filter
            </button>
            <p className={styles.pageDescription}>Showing 1-8 of 32 results</p>
          </div>
          <div className={styles.resultsNumberInput}>
            <label>
              Show
              <select name="PageResultQuantity">
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className={styles.cardsDisplay}>
        <ProductCard
          img={image}
          title="Syltherine"
          description="example"
          price={3500000}
          detail={30}
        />
        <ProductCard
          img={image}
          title="Syltherine"
          description="example"
          price={3500000}
          detail={"New"}
        />
        <ProductCard
          img={image}
          title="Syltherine"
          description="example"
          price={3500000}
          detail={null}
        />
        <ProductCard
          img={image}
          title="Syltherine"
          description="example"
          price={3500000}
          detail={30}
        />
      </div>
      <div>
        <PageButton value="Prev" />
        <PageButton value={1} />
        <PageButton value={2} />
        <PageButton value="Next" />
      </div>
    </section>
  );
};
