import styles from "./styles.module.css";

type Prop = {
  detail: number | string | null;
};

export const ProductDetail = ({ detail }: Prop) => {
  let detailColor = "";
  let detailText = detail;
  if (typeof detail === "string") {
    detailColor = styles.new;
  } else if (typeof detail === "number") {
    detailColor = styles.discount;
    detailText = `-${detail}%`;
  } else if (!detail) {
    detailColor = styles.hide;
  }

  return (
    <div className={`${styles.circle} ${detailColor}`}>
      <p>{detailText}</p>
    </div>
  );
};
