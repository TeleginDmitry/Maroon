import {
    useQuery,
    QueryOptions,
    QueryFunctionContext,
    QueryObserverOptions
} from '@tanstack/react-query'
import { useState } from 'react'
import { PaginationResponseType } from 'shared/types/pagination.type'

interface Props<T>
    extends Omit<QueryOptions<PaginationResponseType<T>>, 'queryFn'>,
        Omit<QueryObserverOptions<PaginationResponseType<T>>, 'onSuccess'> {
    queryFn: (
        context: QueryFunctionContext
    ) => Promise<PaginationResponseType<T>>
    onSuccess?: (data: PaginationResponseType<T>) => void
}

export function usePagination<T>({ onSuccess, ...events }: Props<T>) {
    const [totalItems, setTotalItems] = useState<number | null>(null)
    const [totalPages, setTotalPages] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState<null | number>(null)
    const [hasNextPage, setHasNextPage] = useState(false)
    const [hasPreviousPage, setHasPreviousPage] = useState(false)

    const query = useQuery({
        ...events,
        onSuccess(data: PaginationResponseType<T>) {
            setTotalItems(data.totalItems)
            setHasNextPage(data.nextPage !== null)
            setHasPreviousPage(data.previousPage !== null)
            setCurrentPage(data.currentPage)
            setTotalPages(data.totalPages)

            onSuccess?.(data)
        }
    })

    return {
        totalItems,
        hasNextPage,
        hasPreviousPage,
        currentPage,
        totalPages,
        ...query
    }
}
