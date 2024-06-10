import styles from "./styles.module.css";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

export const TextField = (props: Props) => {
  const { error, errorMessage, ...rest } = props;

  return (
    <div>
      <input
        type="text"
        className={`${styles.input} ${error ? styles.error : ""}`}
        {...rest}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};
