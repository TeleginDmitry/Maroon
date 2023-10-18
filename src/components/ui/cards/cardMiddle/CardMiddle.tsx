import { ProductType } from 'shared/types/product.type'
import styles from './CardMiddle.module.scss'
import { Link } from 'react-router-dom'
import { CATALOG_PRODUCT_SCREEN } from 'configs/screens.config'
import { ReactComponent as Ruble } from 'assets/icons/ruble.svg'
import { Volumes } from './volumes/Volumes'

interface Props {
    product: ProductType
}

export function CardMiddle({ product }: Props) {
    const { id, image, price, title, name, volumes } = product

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
                    <span>
                        {price} <Ruble className={styles.icon}></Ruble>
                    </span>
                </div>
                <div className={styles.block}>
                    <span>{title}</span>
                    <Volumes volumes={volumes}></Volumes>
                </div>
            </div>
            <Link
                draggable={false}
                className={styles.link}
                to={CATALOG_PRODUCT_SCREEN + id}
            ></Link>
        </div>
    )
}
