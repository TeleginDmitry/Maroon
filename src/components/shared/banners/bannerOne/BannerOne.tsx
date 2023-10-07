import styles from './BannerOne.module.scss'
import { Text } from './text/Text'

export function BannerOne() {
    return (
        <div className={styles.wrapper}>
            <Text></Text>
            <div className={styles.background}></div>
        </div>
    )
}
