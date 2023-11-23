import { Slider } from 'components/ui/slider/Slider'
import { useInfiniteQuery } from '@tanstack/react-query'
import { productsService } from 'services/products.service'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { CardShort } from 'components/ui/cards/cardShort/CardShort'
import styles from './Products.module.scss'
import { BEST_PRODUCTS_KEY } from 'configs/queryKeys.config'

export function Products() {
    const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryFn: async ({ pageParam = 0 }) => {
            const response = await productsService.getProducts(pageParam)
            return response.data
        },
        getPreviousPageParam: (data) => data.previousPage,
        getNextPageParam: (data) => data.nextPage,
        queryKey: BEST_PRODUCTS_KEY
    })

    if (!data) return null

    return (
        <Slider
            classNameNavigation={styles.navigation}
            classNamePagination={styles.pagination}
            gap={30}
        >
            {data.pages.map(({ results }, pagesIndex) => {
                return results.map((product, resultIndex) => {
                    return (
                        <SliderItem className={styles.slide} key={product.id}>
                            {({ inView }) => {
                                const lastPageIndex = data.pages.length - 1
                                const lastResultIndex = results.length - 1

                                if (
                                    lastPageIndex === pagesIndex &&
                                    lastResultIndex === resultIndex &&
                                    inView &&
                                    hasNextPage
                                ) {
                                    fetchNextPage()
                                }

                                return <CardShort {...product}></CardShort>
                            }}
                        </SliderItem>
                    )
                })
            })}
        </Slider>
    )
}
