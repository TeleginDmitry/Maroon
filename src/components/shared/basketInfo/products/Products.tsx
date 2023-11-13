import { BasketProductType } from 'shared/types/product.type'
import styles from './Products.module.scss'
import { CardBasket } from 'components/ui/cards/cardBasket/CardBasket'
import { Controls } from './controls/Controls'

interface Props {
    products: BasketProductType[]
}

export function Products({ products }: Props) {
    return (
        <div className={styles.wrapper}>
            <Controls products={products}></Controls>
            <div className={styles.products}>
                {products.map(({ product, id, ...props }) => {
                    return (
                        <CardBasket
                            key={id}
                            basketId={id}
                            {...product}
                            {...props}
                        ></CardBasket>
                    )
                })}
            </div>
        </div>
    )
}
