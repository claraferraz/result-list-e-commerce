import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

export const AuthPage = ({ children }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.form}>{children}</div>
      <div className={styles.image}>
        <img
          src="https://furniroimagesc.s3.sa-east-1.amazonaws.com/login.jpeg"
          alt="leafs"
        />
      </div>
    </section>
  );
};
