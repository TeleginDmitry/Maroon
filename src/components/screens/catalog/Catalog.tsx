import { Filter } from 'components/shared/filter/Filter'
import { Information } from 'components/shared/information/Information'
import { Join } from 'components/shared/join/Join'
import { ProductsList } from 'components/shared/productsList/ProductsList'
import styles from './Catalog.module.scss'
import { RecentlyProducts } from 'components/shared/recentlyProducts/RecentlyProducts'

export function Catalog() {
    return (
        <>
            <section className={styles.container}>
                <Filter title='Каталог'></Filter>
                <ProductsList></ProductsList>
            </section>
            <RecentlyProducts></RecentlyProducts>
            <Join></Join>
            <Information></Information>
        </>
    )
}
