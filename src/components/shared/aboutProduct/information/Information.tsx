import { ProductType } from 'shared/types/product.type'
import styles from './Information.module.scss'
import { Button } from 'components/ui/button/Button'
import { ReactComponent as Ruble } from 'assets/icons/ruble.svg'
import { AccordionList } from './accordionList/AccordionList'
import { Volumes } from './volumes/Volumes'

interface Props {
    product: ProductType
}

export function Information({ product }: Props) {
    const { accordion, volumes, price, title, name, description } = product

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h1 className={styles.title}>{name}</h1>
                <p className={styles.name}>{title}</p>
            </div>
            <p className={styles.description}>{description}</p>
            <AccordionList accordion={accordion}></AccordionList>
            <Volumes volumes={volumes}></Volumes>
            <div className={styles.actions}>
                <p className={styles.price}>
                    {price} <Ruble className={styles.icon}></Ruble>
                </p>
                <Button>Добавить в корзину</Button>
            </div>
        </div>
    )
}
