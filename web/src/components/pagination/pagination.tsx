import Pagination from "react-bootstrap/Pagination";

import styles from "./pagination.module.scss";

export interface IPaginationComponent {
  setCurrentPage: (page: number) => void;
  totalPages: number;
  currentPage: number;
  pageLimit: number;
}

export const PaginationComponent = (props: IPaginationComponent) => {
  const DISPLAYED_PAGES_COUNT = 10;
  const halfPagination = DISPLAYED_PAGES_COUNT / 2;

  const { currentPage, setCurrentPage, totalPages, pageLimit } = props;

  let pageItems = [];
  let startPage = currentPage - halfPagination;
  let endPage = currentPage + halfPagination - 1;

  if (currentPage <= halfPagination) {
    startPage = 1;
    endPage = DISPLAYED_PAGES_COUNT;
  }
  if (currentPage >= totalPages - halfPagination + 1) {
    startPage = totalPages - DISPLAYED_PAGES_COUNT + 1;
    endPage = totalPages;
  }

  for (let page = startPage; page <= endPage; page++) {
    if (currentPage !== page) {
      pageItems.push(
        <Pagination.Item key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </Pagination.Item>
      );
    } else {
      pageItems.push(
        <Pagination.Item active key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </Pagination.Item>
      );
    }
  }

  return (
    <Pagination className={styles.wrapper}>
      <Pagination.First disabled={currentPage === 1} onClick={() => setCurrentPage(1)} />
      <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
      {pageItems}
      <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} />
      <Pagination.Last disabled={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)} />
    </Pagination>
  );
};
