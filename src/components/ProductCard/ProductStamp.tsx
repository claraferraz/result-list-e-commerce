import styles from "./styles.module.css";

type Prop = {
  isNew: boolean;
  discount: number;
};

export const ProductStamp = ({ isNew, discount }: Prop) => {
  let detailColor;
  let detailText;

  if (isNew) {
    detailColor = styles.new;
    detailText = "New";
  } else if (discount > 0) {
    detailColor = styles.discount;
    detailText = `-${discount}%`;
  } else {
    detailColor = styles.hide;
  }

  return (
    <div className={`${styles.circle} ${detailColor}`}>
      <p>{detailText}</p>
    </div>
  );
};
