import { ShowAll } from '../showAll/ShowAll'
import styles from './Information.module.scss'

export function Information() {
    return (
        <div className={styles.information}>
            <div className={styles.info}>
                <h1 className={styles.title}>Бестселлеры</h1>
                <p className={styles.description}>
                    Легендарные продукты, завоевавшие любовь наших клиентов
                </p>
            </div>
            <ShowAll className={styles.link}></ShowAll>
        </div>
    )
}
