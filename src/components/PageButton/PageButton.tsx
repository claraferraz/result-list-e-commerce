import styles from "./styles.module.css";

interface Props {
  total: number;
  numPerPage: number;
  page: number;
  onClick: (newPage: number) => void;
}

const getMinPageToDisplay = (page: number, pagesAmount: number) => {
  // current page is the first page
  if (page == 1) {
    return 1;
  }

  // current page is greater than 1 and less than the max
  if (page < pagesAmount) {
    return page - 1;
  }

  // current page is the last one
  return page - 2;
};

export const PageButton = ({ total, numPerPage, page, onClick }: Props) => {
  const pagesAmount = Math.ceil(total / numPerPage);

  const minPageToDisplay = getMinPageToDisplay(page, pagesAmount);
  // max page to be displayed cannot be greater than the maximum number of pages
  const maxPageToDisplay = Math.min(minPageToDisplay + 2, pagesAmount);

  const buttonsList: number[] = [];
  for (let i = minPageToDisplay; i <= maxPageToDisplay; i++) {
    buttonsList.push(i);
  }

  return (
    <>
      {page > 1 && (
        <button
          key={"prev"}
          className={`${styles.button} ${styles.str}`}
          onClick={() => onClick(page - 1)}
        >
          Prev
        </button>
      )}
      {buttonsList.map((i) =>
        i > 0 ? (
          <button
            key={`b${i}`}
            className={`${styles.button} ${i === page ? styles.active : ""}`}
            onClick={() => onClick(i)}
          >
            {i}
          </button>
        ) : (
          <></>
        )
      )}
      {page < pagesAmount && (
        <button
          key={"next"}
          className={`${styles.button} ${styles.str}`}
          onClick={() => onClick(page + 1)}
        >
          Next
        </button>
      )}
    </>
  );
};
