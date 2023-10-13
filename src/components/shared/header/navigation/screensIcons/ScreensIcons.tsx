import { Link } from 'react-router-dom'
import styles from './ScreensIcons.module.scss'
import { screensIcons } from 'shared/data/screensIcons.data'

export function ScreensIcons() {
    return (
        <ul className={styles.screens}>
            {screensIcons.map(({ id, to, Icon }) => (
                <li key={id}>
                    <Link to={to}>
                        <Icon></Icon>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
