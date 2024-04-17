import { useMemo, useState } from "react";

import { TUserItem } from "@/types";

export function usePagination(itemsList: TUserItem[] = [], pageLimit = 20) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    if (itemsList.length > pageLimit) {
      return Math.ceil(itemsList.length / pageLimit);
    }
    return 1;
  }, [itemsList, pageLimit]);

  const usersOnPage = useMemo(() => {
    const startItem = (currentPage - 1) * pageLimit;
    const endItem = startItem + pageLimit;
    return itemsList.slice(startItem, endItem);
  }, [currentPage, pageLimit, itemsList]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    usersOnPage,
  };
}
