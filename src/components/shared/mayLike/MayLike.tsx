import { Slider } from 'components/ui/slider/Slider'
import styles from './MayLike.module.scss'
import { useInfiniteQuery } from '@tanstack/react-query'
import { CardMiddle } from 'components/ui/cards/cardMiddle/CardMiddle'
import { productsService } from 'services/products.service'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { PRODUCTS_KEY } from 'configs/queryKeys.config'

export function MayLike() {
    const { data } = useInfiniteQuery({
        queryFn: async ({ pageParam = 0 }) => {
            const response = await productsService.getProducts(pageParam)
            return response.data
        },
        getPreviousPageParam: (data) => data.previousPage,
        getNextPageParam: (data) => data.nextPage,
        queryKey: PRODUCTS_KEY
    })

    if (!data) return null

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Вам также может понравиться</h1>
            <div className={styles.slider}>
                <Slider classNamePagination={styles.pagination} gap={30}>
                    {data.pages.map(({ results }) => {
                        return results.map((product) => {
                            return (
                                <SliderItem
                                    className={styles.slide}
                                    key={product.id}
                                >
                                    <CardMiddle {...product}></CardMiddle>
                                </SliderItem>
                            )
                        })
                    })}
                </Slider>
            </div>
        </section>
    )
}
