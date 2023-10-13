import { Link } from 'react-router-dom'
import styles from './Information.module.scss'
import { ReactComponent as CircleC } from 'assets/icons/circle-c.svg'
import { UNKNOWN_SCREEN } from 'configs/screens.config'

export function Information() {
    return (
        <div className={styles.information}>
            <p className={styles.text}>
                <span>Maroon</span>
                <CircleC></CircleC>
                <span>2020 Все права защищены</span>
            </p>
            <Link to={UNKNOWN_SCREEN}>Политика конфиденциальности</Link>
        </div>
    )
}
