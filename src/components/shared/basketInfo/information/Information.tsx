import { Button } from 'components/ui/button/Button'
import styles from './Information.module.scss'
import { BasketProductType } from 'shared/types/product.type'
import { IconAlertOctagon } from '@tabler/icons-react'
import { Price } from 'components/ui/price/Price'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    products: BasketProductType[]
}
export function Information({ products }: Props) {
    const checkedProducts = products.filter((product) => product.isChecked)

    const commonPrice = checkedProducts.reduce(
        (acc, { product, count }) => acc + product.price * count,
        0
    )

    if (!checkedProducts.length) {
        return (
            <div className={styles.wrapper}>
                <div
                    className={classNames(styles.buy, {
                        [styles.buy__border]: !checkedProducts.length
                    })}
                >
                    <Button disabled className={styles.button}>
                        Перейти к оформлению
                    </Button>
                    <p className={styles.info}>
                        <IconAlertOctagon size={30}></IconAlertOctagon>
                        Выберите товары, чтобы перейти к оформлению заказа
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.buy}>
                <Button className={styles.button}>Перейти к оформлению</Button>
                <p className={styles.info}>
                    Доступные способы и время доставки можно выбрать при
                    оформлении заказа
                </p>
            </div>
            <div className={styles.container}>
                <h2>Ваша корзина</h2>
                <div className={styles.products}>
                    <p>Товары ({checkedProducts.length})</p>
                    <Price price={commonPrice}></Price>
                </div>
            </div>
        </div>
    )
}
