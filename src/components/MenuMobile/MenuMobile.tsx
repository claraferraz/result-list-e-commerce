import { useState } from "react";
import styles from "./styles.module.css";
import { HamburguerMenu } from "../HamburguerMenu/HamburguerMenu";

export const MenuMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.burguer}>
      <HamburguerMenu open={open} setOpen={setOpen} />
    </div>
  );
};
