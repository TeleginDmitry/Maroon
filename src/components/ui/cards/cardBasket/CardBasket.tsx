import { Checkbox } from 'components/ui/checkbox/Checkbox'
import styles from './CardBasket.module.scss'
import { Actions } from './actions/Actions'
import { Counter } from 'components/ui/counter/Counter'
import { Price } from 'components/ui/price/Price'
import { Link } from 'react-router-dom'
import { CATALOG_PRODUCT_SCREEN } from 'configs/screens.config'
import { PatchRequestDataType, VolumeType } from 'shared/types/product.type'
import { useMutation } from '@tanstack/react-query'
import { productsService } from 'services/products.service'

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
    const { mutate } = useMutation({
        mutationFn: async (data: PatchRequestDataType) => {
            const response = await productsService.patchBasketProduct(
                basketId,
                data
            )

            return response.data
        }
    })

    function onToggle(isChecked: boolean) {
        mutate({ isChecked })
    }

    function changeProduct(count: number) {
        mutate({ count })
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
                        <Link to={CATALOG_PRODUCT_SCREEN + id}>
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
