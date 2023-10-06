import { Slider } from 'components/ui/slider/Slider'
import { useQuery } from '@tanstack/react-query'
import { productsService } from 'services/products.service'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { CardShort } from 'components/ui/cards/cardShort/CardShort'
import styles from './Products.module.scss'

export function Products() {
    const { data } = useQuery({
        queryFn: async () => {
            const response = await productsService.getProducts()
            return response.data
        }
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
                    <SliderItem key={product.id}>
                        <CardShort product={product}></CardShort>
                    </SliderItem>
                )
            })}
        </Slider>
    )
}
