import styles from './BannerTwo.module.scss'
import { Text } from './text/Text'

export function BannerTwo() {
    return (
        <section className={styles.wrapper}>
            <Text></Text>
            <div className={styles.background}></div>
        </section>
    )
}
