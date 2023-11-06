import { ProductType } from 'shared/types/product.type'
import styles from './Information.module.scss'
import { AccordionList } from './accordionList/AccordionList'
import { Volumes } from './volumes/Volumes'
import { AddBasket } from './addBasket/AddBasket'
import { Price } from 'components/ui/price/Price'
import { useState } from 'react'

interface Props {
    product: ProductType
}

export function Information({ product }: Props) {
    const { accordion, volumes, price, title, name, description } = product

    const [selectedVolumes, setSelectedVolumes] = useState<number[]>([])

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.name}>{name}</p>
            </div>
            <p className={styles.description}>{description}</p>
            <AccordionList accordion={accordion}></AccordionList>
            <Volumes
                setSelectedVolumes={setSelectedVolumes}
                volumes={volumes}
            ></Volumes>
            <div className={styles.actions}>
                <Price className={styles.price} price={price}></Price>
                <AddBasket
                    selectedVolumes={selectedVolumes}
                    {...product}
                ></AddBasket>
            </div>
        </div>
    )
}
