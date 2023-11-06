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
            <Controls></Controls>
            <div className={styles.products}>
                {products.map(({ product, id, count, isChecked, volumes }) => {
                    return (
                        <CardBasket
                            key={product.id}
                            {...product}
                            basketId={id}
                            count={count}
                            isChecked={isChecked}
                            volumes={volumes}
                        ></CardBasket>
                    )
                })}
            </div>
        </div>
    )
}
