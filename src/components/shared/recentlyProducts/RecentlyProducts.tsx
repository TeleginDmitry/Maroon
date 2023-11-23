import { Slider } from 'components/ui/slider/Slider'
import styles from './RecentlyProducts.module.scss'
import { useQuery } from '@tanstack/react-query'
import { CardMiddle } from 'components/ui/cards/cardMiddle/CardMiddle'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { RECENTLY_PRODUCTS_KEY } from 'configs/queryKeys.config'
import { productsService } from 'services/products.service'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { isAuthSelector } from 'store/auth/auth.selectors'

export function RecentlyProducts() {
    const isAuth = useTypedSelector(isAuthSelector)

    const { data } = useQuery({
        queryFn: async () => {
            const response = await productsService.getRecentlyProducts()
            return response.data
        },
        queryKey: RECENTLY_PRODUCTS_KEY,
        enabled: isAuth
    })

    if (!data?.length) return null

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Недавно вы смотрели</h1>
            <div className={styles.slider}>
                <Slider classNamePagination={styles.pagination} gap={30}>
                    {data.map(({ product }) => {
                        return (
                            <SliderItem
                                className={styles.slide}
                                key={product.id}
                            >
                                <CardMiddle {...product}></CardMiddle>
                            </SliderItem>
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}
