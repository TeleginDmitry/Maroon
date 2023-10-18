import { useParams } from 'react-router-dom'
import styles from './AboutProduct.module.scss'
import { useQuery } from '@tanstack/react-query'
import { PRODUCT_KEY } from 'configs/queryKeys.config'
import { productsService } from 'services/products.service'
import { Information } from './information/Information'

export function AboutProduct() {
    const { id } = useParams<{ id: string }>()

    const { data } = useQuery({
        queryFn: async () => {
            if (!id) return

            const response = await productsService.getProduct(id)
            return response.data
        },
        queryKey: [PRODUCT_KEY, id]
    })

    if (!data) return null

    const { image } = data

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img
                    className={styles.image}
                    src={image}
                    alt='Картинка продукта'
                />
            </div>
            <Information product={data}></Information>
        </div>
    )
}
