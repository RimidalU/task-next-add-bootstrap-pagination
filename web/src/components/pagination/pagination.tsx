import Pagination from "react-bootstrap/Pagination";

export interface IPaginationComponent {
  setCurrentPage: (page: number) => void;
  totalPages: number;
  currentPage: number;
  pageLimit: number;
}

export const PaginationComponent = (props: IPaginationComponent) => {
  const { currentPage, setCurrentPage, totalPages, pageLimit } = props;

  let pageItems = [];

  for (let page = 1; page <= totalPages; page++) {
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
    <Pagination>
      <Pagination.First disabled={currentPage === 1} />
      <Pagination.Prev disabled={currentPage === 1} />
      {pageItems}
      <Pagination.Next disabled={currentPage === totalPages} />
      <Pagination.Next disabled={currentPage === totalPages} />
    </Pagination>
  );
};
