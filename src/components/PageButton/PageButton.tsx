import styles from "./styles.module.css";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: number | string;
}

export const PageButton = ({ value, ...props }: Props) => {
  let width = "";
  if (typeof value === "string") {
    width = styles.str;
  }
  return (
    <button className={`${styles.button} ${width}`} {...props}>
      {value}
    </button>
  );
};
