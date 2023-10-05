import styles from './Information.module.scss'
import { ReactComponent as CircleC } from 'assets/icons/circle-c.svg'

export function Information() {
    return (
        <div className={styles.information}>
            <p className={styles.text}>
                <span>Maroon</span>
                <CircleC></CircleC>
                <span>2020 Все права защищены</span>
            </p>
            <a className={styles.text} href='#'>
                Политика конфиденциальности
            </a>
        </div>
    )
}
