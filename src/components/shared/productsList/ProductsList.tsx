import { useQuery } from '@tanstack/react-query'
import styles from './ProductsList.module.scss'
import { productsService } from 'services/products.service'
import { CardMiddle } from 'components/ui/cards/cardMiddle/CardMiddle'
import { PRODUCTS_KEY } from 'configs/queryKeys.config'
import { useSearchParams } from 'react-router-dom'
import { FILTER_PARAM } from 'configs/filter.config'

export function ProductsList() {
    const [URLSearchParams] = useSearchParams()

    const { data } = useQuery({
        queryFn: async () => {
            const categories = URLSearchParams.get(FILTER_PARAM)
            const response = await productsService.getProducts(
                categories ? categories : ''
            )
            return response.data
        },
        queryKey: PRODUCTS_KEY
    })

    if (!data?.length) return null

    return (
        <section className={styles.wrapper}>
            <ul className={styles.products}>
                {data.map((product) => {
                    return (
                        <CardMiddle key={product.id} {...product}></CardMiddle>
                    )
                })}
            </ul>
        </section>
    )
}
