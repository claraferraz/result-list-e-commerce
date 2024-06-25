import styles from "./styles.module.css";
import { FooterLinks } from "./FooterLinks";
import { TextField } from "../TextField/TextField";
import { Button } from "../Button/Button";
import { useState } from "react";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

export const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (!isValidEmail(value)) {
      setStatus("error");
      setStatusMessage("Please enter a valid email");
    } else {
      setStatus("success");
      setStatusMessage("Subscribed!");
    }
  };

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.footerAddress}>
          <h2 className={styles.title}>footer.</h2>
          <p>
            Rua Alexandre Dumas, 1711 - 6º andar - Chácara Santo Antônio, São
            Paulo - SP, 04717-004
          </p>
        </div>

        <FooterLinks
          title="Links"
          links={["Home", "Shop", "About", "Contact"]}
        />

        <FooterLinks
          title="Help"
          links={["Payment Options", "Returns", "Privacy Policies"]}
        />

        <div>
          <p className={styles.sectionTitle}>Newsletter</p>
          <form className={styles.form}>
            <TextField
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              status={status}
              statusMessage={statusMessage}
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      <p className={styles.copyright}>2024 Compass UOL</p>
    </div>
  );
};
