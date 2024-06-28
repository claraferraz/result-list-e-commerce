import styles from "./styles.module.css";

interface Props {
  total: number;
  numPerPage: number;
  page: number;
  onClick: (newPage: number) => void;
}

export const PageButton = ({ total, numPerPage, page, onClick }: Props) => {
  const pagesAmount = Math.ceil(total / numPerPage);

  const minPageToDisplay = page > 2 ? page - 2 : 1;
  const maxPageToDisplay =
    minPageToDisplay + 2 > pagesAmount ? pagesAmount : minPageToDisplay + 2;

  const buttonsList: number[] = [];
  for (let i = minPageToDisplay; i <= maxPageToDisplay; i++) {
    buttonsList.push(i);
  }

  return (
    <>
      {page > 1 && (
        <button
          className={`${styles.button} ${styles.str}`}
          onClick={() => onClick(page - 1)}
        >
          Prev
        </button>
      )}
      {buttonsList.map((i) => (
        <button
          className={`${styles.button} ${i === page ? styles.active : ""}`}
          onClick={() => onClick(i)}
        >
          {i}
        </button>
      ))}
      {page < pagesAmount && (
        <button
          className={`${styles.button} ${styles.str}`}
          onClick={() => onClick(page + 1)}
        >
          Next
        </button>
      )}
    </>
  );
};
