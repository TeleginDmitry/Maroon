import styles from './Recommendations.module.scss'
import { Cards } from './cards/Cards'
import { Text } from './text/Text'

export function Recommendations() {
    return (
        <section className={styles.wrapper}>
            <Text></Text>
            <Cards></Cards>
            <div className={styles.background}></div>
        </section>
    )
}
