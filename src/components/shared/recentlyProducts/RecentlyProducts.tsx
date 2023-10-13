import { Slider } from 'components/ui/slider/Slider'
import styles from './RecentlyProducts.module.scss'
import { useQuery } from '@tanstack/react-query'
import { CardMiddle } from 'components/ui/cards/cardMiddle/CardMiddle'
import { recentlyProducts } from 'services/recentlyProducts.service'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { RECENTLY_PRODUCTS_KEY } from 'configs/queryKeys.config'

export function RecentlyProducts() {
    const { data } = useQuery({
        queryFn: async () => {
            const response = await recentlyProducts.getProducts()
            return response.data
        },
        queryKey: RECENTLY_PRODUCTS_KEY
    })

    if (!data) return null

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Недавно вы смотрели</h1>
            <div className={styles.slider}>
                <Slider navigation={{ position: 'right' }} gap={30}>
                    {data.map((product) => {
                        return (
                            <SliderItem
                                className={styles.slide}
                                key={product.id}
                            >
                                <CardMiddle product={product}></CardMiddle>
                            </SliderItem>
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}
