import { Button } from 'components/ui/button/Button'
import styles from './Buttons.module.scss'
import { FilterParamsType } from 'shared/types/filter.type'
import { useSearchParams } from 'react-router-dom'
import { FILTER_PARAM } from 'configs/filter.config'
import { useQueryClient } from '@tanstack/react-query'
import { PRODUCTS_KEY } from 'configs/queryKeys.config'
import { productsService } from 'services/products.service'

interface Props {
    filterParams: FilterParamsType
}

export function Buttons({ filterParams }: Props) {
    const queryClient = useQueryClient()

    const [URLSearchParams, SetURLSearchParams] = useSearchParams()

    async function onCompleteFilters() {
        const categories = filterParams.toString()

        URLSearchParams.set(FILTER_PARAM, categories)

        SetURLSearchParams(URLSearchParams)

        await queryClient.fetchInfiniteQuery({
            queryKey: [...PRODUCTS_KEY],
            queryFn: async () => {
                const response = await productsService.getProducts(
                    0,
                    categories
                )

                return response.data
            }
        })
    }

    async function onClearFilters() {
        URLSearchParams.delete(FILTER_PARAM)

        SetURLSearchParams(URLSearchParams)

        await queryClient.fetchInfiniteQuery({
            queryKey: PRODUCTS_KEY,
            queryFn: async () => {
                const response = await productsService.getProducts(0)

                return response.data
            }
        })
    }

    return (
        <div className={styles.wrapper}>
            <Button onClick={onCompleteFilters}>Применить</Button>
            <Button onClick={onClearFilters}>Сбросить</Button>
        </div>
    )
}
