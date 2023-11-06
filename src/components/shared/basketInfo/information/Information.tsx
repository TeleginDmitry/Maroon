import { Button } from 'components/ui/button/Button'
import styles from './Information.module.scss'

export function Information() {
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
                <div>
                    <h2>Ваша корзина</h2>
                </div>
            </div>
        </div>
    )
}
