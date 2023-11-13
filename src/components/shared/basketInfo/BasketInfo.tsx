import styles from './BasketInfo.module.scss'
import { Products } from './products/Products'
import { Information } from './information/Information'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { BasketProductsSelector } from 'store/products/basket/basket.selectors'

export function BasketInfo() {
    const products = useTypedSelector(BasketProductsSelector)

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Корзина <span>{products.length}</span>
            </h1>
            <div className={styles.container}>
                <Products products={products}></Products>
                <Information products={products}></Information>
            </div>
        </div>
    )
}
