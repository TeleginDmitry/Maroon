import styles from './CardShort.module.scss'
import { Link } from 'react-router-dom'
import { CATALOG_PRODUCT_SCREEN } from 'configs/screens.config'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    name: string
    title: string
    image: string
    id: number
    className?: string
}

export function CardShort({ id, image, title, name, className }: Props) {
    return (
        <div
            className={classNames(styles.product, {
                [className!]: !!className
            })}
        >
            <img
                className={styles.image}
                src={image}
                alt='Картинка продукта'
                draggable={false}
            />

            <div className={styles.container}>
                <div className={styles.block}>
                    <span>{title}</span>
                    <span>{name}</span>
                </div>
                <Link to={CATALOG_PRODUCT_SCREEN + id}>
                    <button className={styles.button}>Подробнее</button>
                </Link>
            </div>
        </div>
    )
}
