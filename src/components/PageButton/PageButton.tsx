import styles from "./styles.module.css";

interface Props {
  total: number;
  numPerPage: number;
  page: number;
  onClick: (newPage: number) => void;
}

export const PageButton = ({ total, numPerPage, page, onClick }: Props) => {
  const maxBtn = 5;
  const maxLeft = (maxBtn - 1) / 2;
  const pagesAmount = Math.ceil(total / numPerPage);

  const buttonsList: number[] = [];
  for (let i = 1; i <= pagesAmount; i++) {
    buttonsList.push(i);
  }

  /*let width = "";
  if (typeof value === "string") {
    width = styles.str;
  }*/

  return (
    <>
      {buttonsList.map((i) => (
        <button
          className={`${styles.button} ${i === page ? styles.active : ""}`}
          onClick={() => onClick(i)}
        >
          {i}
        </button>
      ))}
    </>
  );
};
