import styles from './BestProducts.module.scss'
import { Products } from './products/Products'
import { Information } from './information/Information'
import { ShowAll } from './showAll/ShowAll'

export function BestProducts() {
    return (
        <section className={styles.wrapper}>
            <Information></Information>
            <Products></Products>
            <ShowAll className={styles.link}></ShowAll>
        </section>
    )
}
