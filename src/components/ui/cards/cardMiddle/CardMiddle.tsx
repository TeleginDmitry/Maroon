import { VolumeType } from 'shared/types/product.type'
import styles from './CardMiddle.module.scss'
import { Link } from 'react-router-dom'
import { CATALOG_PRODUCT_SCREEN } from 'configs/screens.config'
import { Volumes } from './volumes/Volumes'
import { classNames } from 'utils/classNames/classNames'
import { Price } from 'components/ui/price/Price'

interface Props {
    name: string
    title: string
    price: number
    image: string
    volumes: VolumeType[]
    id: number
    className?: string
}

export function CardMiddle({
    id,
    image,
    price,
    title,
    name,
    volumes,
    className
}: Props) {
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
                    <Price price={price}></Price>
                </div>
                <div className={styles.block}>
                    <span>{name}</span>
                    <Volumes volumes={volumes}></Volumes>
                </div>
            </div>
            <Link
                className={styles.link}
                to={CATALOG_PRODUCT_SCREEN + id}
            ></Link>
        </div>
    )
}
