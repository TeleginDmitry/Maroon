import styles from './Join.module.scss'
import { Images } from './images/Images'
import { Text } from './text/Text'

export function Join() {
    return (
        <section className={styles.wrapper}>
            <Images></Images>
            <Text></Text>
        </section>
    )
}
