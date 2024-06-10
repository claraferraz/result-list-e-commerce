import styles from "./styles.module.css";

type Props = {
  image: string | undefined;
  title: string;
  description: string;
};

export const Feature = ({ image, title, description }: Props) => {
  return (
    <div className={styles.feature}>
      <img className={styles.image} src={image} />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
