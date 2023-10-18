import { AboutProduct } from 'components/shared/aboutProduct/AboutProduct'
import { MayLike } from 'components/shared/mayLike/MayLike'
import styles from './Product.module.scss'

export function Product() {
    return (
        <>
            <AboutProduct></AboutProduct>
            <div className={styles.bottom}>
                <MayLike></MayLike>
            </div>
        </>
    )
}
