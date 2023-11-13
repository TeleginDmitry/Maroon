import { Button } from 'components/ui/button/Button'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { BasketLoadingSelector } from 'store/products/basket/basket.selectors'

interface Props {
    id: number
    volume: number | null
}

export function AddBasket({ id, volume }: Props) {
    const { createBasketProduct } = useActions()

    const isLoading = useTypedSelector(BasketLoadingSelector)

    function createProduct() {
        if (volume) {
            createBasketProduct({ id, volume })
        }
    }

    return (
        <>
            <Button disabled={isLoading} onClick={createProduct}>
                Добавить в корзину
            </Button>
        </>
    )
}
