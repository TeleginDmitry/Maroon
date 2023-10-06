import styles from './Recommendations.module.scss'
import { Cards } from './cards/Cards'
import { Title } from './title/Title'

export function Recommendations() {
    return (
        <section className={styles.recommendations}>
            <Title></Title>
            <Cards></Cards>
            <div className={styles.background}></div>
        </section>
    )
}
