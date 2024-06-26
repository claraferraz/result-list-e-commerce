import styles from "./styles.module.css";
import compareIcon from "../../assets/compare-icon.svg";
import likeIcon from "../../assets/heart-icon.svg";
import shareIcon from "../../assets/share-icon.svg";

export const ProductCardHover = () => (
  <div className={styles.productHover}>
    <button>See Details</button>
    <div className={styles.linksDiv}>
      <div className={styles.links}>
        <img src={shareIcon} alt="share icon" />
        <p>Share</p>
      </div>
      <div className={styles.links}>
        <img src={compareIcon} alt="compare icon" />
        <p>Compare</p>
      </div>
      <div className={styles.links}>
        <img src={likeIcon} alt="like icon" />
        <p>Like</p>
      </div>
    </div>
  </div>
);
