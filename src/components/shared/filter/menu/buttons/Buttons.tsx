import { Button } from 'components/ui/button/Button'
import styles from './Buttons.module.scss'
import { FilterParamsType } from 'shared/types/filter.type'
import { useSearchParams } from 'react-router-dom'
import { FILTER_PARAM } from 'configs/filter.config'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productsService } from 'services/products.service'
import { PRODUCTS_KEY } from 'configs/queryKeys.config'

interface Props {
    filterParams: FilterParamsType
}

export function Buttons({ filterParams }: Props) {
    const queryClient = useQueryClient()

    const [URLSearchParams, SetURLSearchParams] = useSearchParams()

    const { mutate } = useMutation({
        mutationFn: async (categories: string) => {
            const response = await productsService.getProducts(categories)
            return response.data
        },
        onSuccess: (data) => {
            queryClient.setQueryData(PRODUCTS_KEY, data)
        }
    })

    function onCompleteFilters() {
        const categories = filterParams.toString()

        URLSearchParams.set(FILTER_PARAM, categories)

        SetURLSearchParams(URLSearchParams)

        mutate(categories)
    }

    function onClearFilters() {
        URLSearchParams.delete(FILTER_PARAM)

        SetURLSearchParams(URLSearchParams)

        mutate('')
    }

    return (
        <div className={styles.wrapper}>
            <Button onClick={onCompleteFilters}>Применить</Button>
            <Button onClick={onClearFilters}>Сбросить</Button>
        </div>
    )
}
