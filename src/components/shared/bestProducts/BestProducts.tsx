import { Slider } from 'components/ui/slider/Slider'
import { Link } from 'react-router-dom'
import styles from './BestProducts.module.scss'
import { Button } from 'components/ui/button/Button'
import { CATALOG_SCREEN } from 'configs/screens.config'
import { useQuery } from '@tanstack/react-query'
import { productsService } from 'services/products.service'
import { SliderItem } from 'components/ui/slider/sliderItem/SliderItem'
import { CardShort } from 'components/ui/cards/cardShort/CardShort'

export function BestProducts() {
    const { data } = useQuery({
        queryFn: async () => {
            const response = await productsService.getProducts()
            return response.data
        }
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Бестселлеры</h1>
                    <p className={styles.description}>
                        Легендарные продукты, завоевавшие любовь наших клиентов
                    </p>
                </div>
                <Link to={CATALOG_SCREEN}>
                    <Button>Смотреть все</Button>
                </Link>
            </div>
            {data?.length && (
                <Slider
                    gap={30}
                    pagination={false}
                    navigation={{ position: 'center' }}
                >
                    {data.map((product) => {
                        return (
                            <SliderItem key={product.id}>
                                <CardShort product={product}></CardShort>
                            </SliderItem>
                        )
                    })}
                </Slider>
            )}
        </div>
    )
}
