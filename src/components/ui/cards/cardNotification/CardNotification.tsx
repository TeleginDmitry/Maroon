import { StatusNotificationType } from 'shared/types/notification.type'
import styles from './CardNotification.module.scss'
import { Price } from 'components/ui/price/Price'
import { classNames } from 'utils/classNames/classNames'
import { useEffect, useRef } from 'react'
import { IconX } from '@tabler/icons-react'
import { VolumeType } from 'shared/types/product.type'

interface Props {
    name: string
    title: string
    price: number
    image: string
    volumes: VolumeType[]
    status: StatusNotificationType
    changeStatus(value: StatusNotificationType | null): void
    timeout?: number
}

export function CardNotification({
    image,
    name,
    price,
    title,
    status,
    volumes,
    changeStatus,
    timeout = 3000
}: Props) {
    const timeoutRef = useRef<any>(null)

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            hiddenProduct()
        }, timeout)

        return () => {
            hiddenProduct()
        }
    }, [changeStatus, timeout])

    function hiddenProduct() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        changeStatus(null)
    }

    return (
        <div
            className={classNames(styles.product, {
                [styles.success]: status === 'success',
                [styles.error]: status === 'error'
            })}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <img
                        className={styles.image}
                        src={image}
                        alt='Изображение продукта'
                    />
                    <div className={styles.info}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.name}>{name}</p>
                        <ul className={styles.volumes}>
                            {volumes.map(({ amount, id, unit }) => {
                                return <li key={id}>{`${amount} ${unit}`}</li>
                            })}
                        </ul>
                    </div>
                </div>

                <div className={styles.block}>
                    <button onClick={hiddenProduct}>
                        <IconX></IconX>
                    </button>
                    <Price price={price}></Price>
                </div>
            </div>
            <div
                style={{ animationDuration: `${timeout}ms` }}
                className={styles.progress}
            ></div>
        </div>
    )
}
