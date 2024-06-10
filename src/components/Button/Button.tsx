import styles from "./styles.module.css";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: Props) => {
  return <button className={styles.button} {...props} />;
};
