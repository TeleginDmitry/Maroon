import { useMutation, useQueryClient } from '@tanstack/react-query'
import styles from './Actions.module.scss'
import { IconHeart, IconTrash } from '@tabler/icons-react'
import { productsService } from 'services/products.service'
import { BASKET_PRODUCTS_KEY } from 'configs/queryKeys.config'

interface Props {
    id: number
}

export function Actions({ id }: Props) {
    const queryClient = useQueryClient()

    const { mutate, isLoading } = useMutation({
        mutationFn: async () => {
            const response = await productsService.deleteBasketProduct(id)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(BASKET_PRODUCTS_KEY)
        }
    })

    function deleteProduct() {
        mutate()
    }

    return (
        <div className={styles.actions}>
            <button className={styles.action}>
                <IconHeart size={20}></IconHeart>
            </button>
            <button
                onClick={deleteProduct}
                disabled={isLoading}
                className={styles.action}
            >
                <IconTrash size={20}></IconTrash>
            </button>
        </div>
    )
}
