import { Slider } from 'components/ui/slider/Slider'
import styles from './MayLike.module.scss'
import { useQuery } from '@tanstack/react-query'
import { CardMiddle } from 'components/ui/cards/cardMiddle/CardMiddle'
import { productsService } from 'services/products.service'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { PRODUCTS_KEY } from 'configs/queryKeys.config'

export function MayLike() {
    const { data } = useQuery({
        queryFn: async () => {
            const response = await productsService.getProducts()
            return response.data
        },
        queryKey: PRODUCTS_KEY
    })

    if (!data) return null

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Вам также может понравиться</h1>
            <div className={styles.slider}>
                <Slider
                    pagination={{ className: styles.pagination }}
                    navigation={{ position: 'right' }}
                    gap={30}
                >
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
