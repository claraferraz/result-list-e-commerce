import styles from "./styles.module.css";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const TextField = (props: Props) => {
  return <input type="text" className={styles.input} {...props} />;
};
