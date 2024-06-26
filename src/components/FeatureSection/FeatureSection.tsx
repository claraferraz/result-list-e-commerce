import styles from "./styles.module.css";
import QualityIcon from "../../assets/feature-quality.svg";
import WarrantyIcon from "../../assets/feature-warranty.svg";
import FreeShippingIcon from "../../assets/feature-shipping.svg";
import SupportIcon from "../../assets/feature-support.svg";
import { Feature } from "../Feature/Feature";

export const FeatureSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.featureList}>
        <Feature
          title="High Quality"
          description="Crafted from top materials"
          image={QualityIcon}
        />
        <Feature
          title="Warranty Protection"
          description="Over 2 years"
          image={WarrantyIcon}
        />
        <Feature
          title="Free Shipping"
          description="Order over 150 $"
          image={FreeShippingIcon}
        />
        <Feature
          title="24 / 7 Support"
          description="Dedicated support"
          image={SupportIcon}
        />
      </div>
    </div>
  );
};
