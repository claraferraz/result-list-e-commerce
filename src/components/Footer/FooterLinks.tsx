import styles from "./styles.module.css";

type Props = {
  title: string;
  links: string[];
};

export const FooterLinks = ({ title, links }: Props) => {
  return (
    <div className={styles.footerLink}>
      <p className={styles.sectionTitle}>{title}</p>
      <ul>
        {links.map((link) => (
          <li>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
