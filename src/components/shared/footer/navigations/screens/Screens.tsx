import { Link } from 'react-router-dom'
import styles from './Screens.module.scss'
import { screens } from 'shared/data/screens.data'

export function Screens() {
    return (
        <ul className={styles.screens}>
            {screens.map(({ id, title, to }) => {
                return (
                    <li className={styles.screen} key={id}>
                        <Link to={to}>{title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}
