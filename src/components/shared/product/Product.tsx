import { Product as ProductType } from 'shared/types/product.type'
import styles from './Product.module.scss'
import { Link } from 'react-router-dom'
import { CATALOG_PRODUCT_SCREEN } from 'configs/screens.config'

interface Props {
    product: ProductType
}

export function Product({ product }: Props) {
    const { id, image, price, title, name, volume } = product

    return (
        <Link to={CATALOG_PRODUCT_SCREEN + id} className={styles.product}>
            <img className={styles.image} src={image} alt='Картинка продукта' />

            <div className={styles.container}>
                <div className={styles.block}>
                    <span>{name}</span>
                    <span>{price}</span>
                </div>
                <div className={styles.block}>
                    <span>{title}</span>
                    <span>{volume}</span>
                </div>
            </div>
        </Link>
    )
}
