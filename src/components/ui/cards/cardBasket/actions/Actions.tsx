import { useActions } from 'hooks/useActions'
import styles from './Actions.module.scss'
import { IconHeart, IconTrash } from '@tabler/icons-react'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { BasketLoadingSelector } from 'store/products/basket/basket.selectors'

interface Props {
    id: number
}

export function Actions({ id }: Props) {
    const { deleteBasketProduct } = useActions()

    const isLoading = useTypedSelector(BasketLoadingSelector)

    return (
        <div className={styles.actions}>
            <button className={styles.action}>
                <IconHeart size={20}></IconHeart>
            </button>
            <button
                onClick={() => deleteBasketProduct({ id })}
                disabled={isLoading}
                className={styles.action}
            >
                <IconTrash size={20}></IconTrash>
            </button>
        </div>
    )
}
