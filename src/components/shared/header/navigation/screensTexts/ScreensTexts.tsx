import { Link } from 'react-router-dom'
import styles from './ScreensTexts.module.scss'
import { screens } from 'shared/data/screens.data'

export function ScreensTexts() {
    return (
        <ul className={styles.screens}>
            {screens.map(({ id, to, title }) => (
                <li key={id} className={styles.screen}>
                    <Link to={to}>{title}</Link>
                </li>
            ))}
        </ul>
    )
}
