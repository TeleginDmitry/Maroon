import { Slider } from 'components/ui/slider/Slider'
import styles from './RecentlyProducts.module.scss'
import { useQuery } from '@tanstack/react-query'
import { CardMiddle } from 'components/ui/cards/cardMiddle/CardMiddle'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { RECENTLY_PRODUCTS_KEY } from 'configs/queryKeys.config'
import { productsService } from 'services/products.service'

export function RecentlyProducts() {
    const { data } = useQuery({
        queryFn: async () => {
            const response = await productsService.getRecentlyProducts()
            return response.data
        },
        queryKey: RECENTLY_PRODUCTS_KEY
    })

    if (!data?.length) return null

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Недавно вы смотрели</h1>
            <div className={styles.slider}>
                <Slider
                    pagination={{ className: styles.pagination }}
                    navigation={{ position: 'right' }}
                    gap={30}
                >
                    {data.map(({ product }) => {
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
