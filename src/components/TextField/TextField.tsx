import styles from "./styles.module.css";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  status?: string;
  statusMessage?: string;
}

export const TextField = (props: Props) => {
  const { status, statusMessage, ...rest } = props;

  let statusClass = styles.default;
  if (status === "error") {
    statusClass = styles.error;
  } else if (status === "success") {
    statusClass = styles.success;
  }

  return (
    <div className={statusClass}>
      <input type="text" className={styles.input} {...rest} />
      {statusMessage && status && (
        <p className={styles.statusMessageDisplay}>{statusMessage}</p>
      )}
    </div>
  );
};
