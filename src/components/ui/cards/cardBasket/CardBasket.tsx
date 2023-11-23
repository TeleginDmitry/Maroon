import { Checkbox } from 'components/ui/checkbox/Checkbox'
import styles from './CardBasket.module.scss'
import { Actions } from './actions/Actions'
import { Counter } from 'components/ui/counter/Counter'
import { Price } from 'components/ui/price/Price'
import { Link } from 'react-router-dom'
import { CATALOG_PRODUCT_SCREEN } from 'configs/screens.config'
import { useActions } from 'hooks/useActions'
import { VolumeType } from 'shared/types/product.type'

interface Props {
    basketId: number
    name: string
    title: string
    price: number
    image: string
    count: number
    isChecked: boolean
    volumes: VolumeType[]
    id: number
}

export function CardBasket({
    image,
    name,
    price,
    title,
    basketId,
    count,
    isChecked,
    volumes,
    id
}: Props) {
    const { changeBasketProducts } = useActions()

    function onToggle(isChecked: boolean) {
        changeBasketProducts([{ isChecked, id: basketId }])
    }

    function changeProduct(count: number) {
        changeBasketProducts([{ count, id: basketId }])
    }

    return (
        <div className={styles.product}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.block}>
                        <Checkbox
                            onToggle={onToggle}
                            initialState={isChecked}
                        ></Checkbox>
                        <Link
                            className={styles.link}
                            to={CATALOG_PRODUCT_SCREEN + id}
                        >
                            <img
                                className={styles.image}
                                src={image}
                                alt='Изображение продукта'
                            />
                        </Link>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.name}>{name}</p>
                        <div className={styles.actions}>
                            <ul className={styles.volumes}>
                                {volumes.map(({ amount, unit, id }) => {
                                    return <li key={id}>{amount + unit}</li>
                                })}
                            </ul>
                            <Actions id={basketId}></Actions>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <Price price={price}></Price>
                    <Counter
                        changeProduct={changeProduct}
                        initialCount={count}
                    ></Counter>
                </div>
            </div>
        </div>
    )
}
