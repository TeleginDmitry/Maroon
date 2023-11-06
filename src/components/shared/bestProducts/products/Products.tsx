import { Slider } from 'components/ui/slider/Slider'
import { useQuery } from '@tanstack/react-query'
import { productsService } from 'services/products.service'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { CardShort } from 'components/ui/cards/cardShort/CardShort'
import styles from './Products.module.scss'
import { BEST_PRODUCTS_KEY } from 'configs/queryKeys.config'

export function Products() {
    const { data } = useQuery({
        queryFn: async () => {
            const response = await productsService.getProducts()
            return response.data
        },
        queryKey: BEST_PRODUCTS_KEY
    })

    if (!data?.length) return null

    return (
        <Slider
            gap={30}
            pagination={false}
            navigation={{ position: 'center', className: styles.navigation }}
        >
            {data.map((product) => {
                return (
                    <SliderItem className={styles.slide} key={product.id}>
                        {({ isActive }) => {
                            return (
                                <CardShort
                                    className={isActive ? styles.product : ''}
                                    {...product}
                                ></CardShort>
                            )
                        }}
                    </SliderItem>
                )
            })}
        </Slider>
    )
}
