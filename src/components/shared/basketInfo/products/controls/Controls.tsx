import { Checkbox } from 'components/ui/checkbox/Checkbox'
import styles from './Controls.module.scss'
import {
    BasketProductType,
    PatchRequestDataType
} from 'shared/types/product.type'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { BasketLoadingSelector } from 'store/products/basket/basket.selectors'

interface Props {
    products: BasketProductType[]
}

export function Controls({ products }: Props) {
    const { changeBasketProducts } = useActions()

    const isLoading = useTypedSelector(BasketLoadingSelector)

    const initialChecked = products.every((product) => product.isChecked)

    const handleChange = (isChecked: boolean) => {
        const filteredProducts: PatchRequestDataType[] = []
        if (isChecked) {
            products.forEach(({ isChecked, id }) => {
                if (!isChecked) {
                    filteredProducts.push({ isChecked: !isChecked, id })
                }
            })
        } else {
            products.forEach(({ isChecked, id }) => {
                if (isChecked) {
                    filteredProducts.push({ isChecked: !isChecked, id })
                }
            })
        }

        changeBasketProducts(filteredProducts)
    }

    return (
        <div className={styles.wrapper}>
            <Checkbox
                disabled={isLoading}
                onToggle={handleChange}
                initialState={initialChecked}
            >
                Выбрать все
            </Checkbox>
        </div>
    )
}
