import { Link } from 'react-router-dom'
import { ReactComponent as Icon } from 'assets/icons/logo.svg'
import { MAIN_SCREEN } from 'configs/screens.config'
import styles from './Logo.module.scss'

export function Logo() {
    return (
        <Link to={MAIN_SCREEN}>
            <Icon className={styles.icon} />
        </Link>
    )
}
