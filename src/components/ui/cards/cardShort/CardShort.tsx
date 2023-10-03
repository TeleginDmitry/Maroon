import { ProductType } from 'shared/types/product.type'
import styles from './CardShort.module.scss'
import { Link } from 'react-router-dom'
import { CATALOG_PRODUCT_SCREEN } from 'configs/screens.config'

interface Props {
    product: ProductType
}

export function CardShort({ product }: Props) {
    const { id, image, title, name } = product

    return (
        <div className={styles.product}>
            <img
                className={styles.image}
                src={image}
                alt='Картинка продукта'
                draggable={false}
            />

            <div className={styles.container}>
                <div className={styles.block}>
                    <span>{name}</span>
                    <span>{title}</span>
                </div>
                <Link to={CATALOG_PRODUCT_SCREEN + id}>
                    <button className={styles.button}>Подробнее</button>
                </Link>
            </div>
        </div>
    )
}
