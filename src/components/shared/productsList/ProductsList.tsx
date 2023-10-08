import { useQuery } from '@tanstack/react-query'
import styles from './ProductsList.module.scss'
import { productsService } from 'services/products.service'
import { CardMiddle } from 'components/ui/cards/cardMiddle/CardMiddle'

export function ProductsList() {
    const { data } = useQuery({
        queryFn: async () => {
            const response = await productsService.getProducts()
            return response.data
        }
    })

    if (!data?.length) return null

    return (
        <section className={styles.wrapper}>
            <ul className={styles.products}>
                {data.map((product) => {
                    return (
                        <CardMiddle
                            key={product.id}
                            product={product}
                        ></CardMiddle>
                    )
                })}
            </ul>
        </section>
    )
}