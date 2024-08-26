type Props = {
  children: React.ReactNode;
};

export const AuthPage = ({ children }: Props) => {
  return (
    <section>
      <div>
        <img
          src="https://furniroimagesc.s3.sa-east-1.amazonaws.com/login.jpeg"
          alt="leafs"
        />
      </div>
      <div>{children}</div>
    </section>
  );
};
