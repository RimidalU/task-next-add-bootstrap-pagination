import { useMemo, useState } from 'react';

import { TUserItem } from '@/types';

export function usePagination(itemsList: TUserItem[] = [], pageLimit = 20) {
    const [currentPage, setCurrentPage] = useState(1),

        totalPages = useMemo(() => {
            if (itemsList.length > pageLimit) {
                return Math.ceil(itemsList.length / pageLimit);
            }
            return 1;
        },[itemsList, pageLimit]);

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        pageLimit,
    };
}
