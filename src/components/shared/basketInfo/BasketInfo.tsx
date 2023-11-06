import { BASKET_PRODUCTS_KEY } from 'configs/queryKeys.config'
import styles from './BasketInfo.module.scss'
import { productsService } from 'services/products.service'
import { useQuery } from '@tanstack/react-query'
import { Products } from './products/Products'
import { Information } from './information/Information'

export function BasketInfo() {
    const { data } = useQuery({
        queryFn: async () => {
            const response = await productsService.getBasketProducts()
            return response.data
        },
        queryKey: BASKET_PRODUCTS_KEY
    })

    if (!data?.length) {
        return <h1 className={styles.empty}>Здесь пусто...</h1>
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Корзина <span>{data.length}</span>
            </h1>
            <div className={styles.container}>
                <Products products={data}></Products>
                <Information></Information>
            </div>
        </div>
    )
}
