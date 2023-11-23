import styles from './ProductsList.module.scss'
import { productsService } from 'services/products.service'
import { PRODUCTS_KEY } from 'configs/queryKeys.config'
import { useSearchParams } from 'react-router-dom'
import { FILTER_PARAM } from 'configs/filter.config'
import { CardMiddle } from 'components/ui/cards/cardMiddle/CardMiddle'
import { Pagination } from 'components/ui/pagination/Pagination'
import { Navigation } from 'components/ui/navigation/Navigation'
import { useState } from 'react'
import { usePagination } from 'hooks/usePagination'

export function ProductsList() {
    const [URLSearchParams] = useSearchParams()

    const [page, setPage] = useState(0)

    const { data, hasNextPage, hasPreviousPage, totalPages, currentPage } =
        usePagination({
            queryFn: async () => {
                const categories = URLSearchParams.get(FILTER_PARAM)
                const response = await productsService.getProducts(
                    page,
                    categories || undefined
                )
                return response.data
            },
            keepPreviousData: true,
            queryKey: [...PRODUCTS_KEY, page]
        })

    function getNextPage() {
        if (!hasNextPage) return

        setPage((prev) => prev + 1)
    }

    function getPreviousPage() {
        if (!hasPreviousPage) return

        setPage((prev) => prev - 1)
    }

    if (!data) return null

    return (
        <section className={styles.wrapper}>
            <ul className={styles.products}>
                {data.results.map((product) => {
                    return (
                        <CardMiddle key={product.id} {...product}></CardMiddle>
                    )
                })}
            </ul>
            <div className={styles.actions}>
                <Pagination
                    className={styles.pagination}
                    valueLeft={currentPage! + 1}
                    valueRight={totalPages!}
                ></Pagination>
                <Navigation
                    onClickLeft={() => getPreviousPage()}
                    onClickRight={() => getNextPage()}
                ></Navigation>
            </div>
        </section>
    )
}
