import { Link } from 'react-router-dom'
import { iconsLinks, textLinks } from './screens.data'
import styles from './Screens.module.scss'

const Screens = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.texts}>
                {textLinks.map(({ id, to, text }) => (
                    <li key={id} className={styles.text}>
                        <Link to={to} className={styles.link}>
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className={styles.icons}>
                {iconsLinks.map(({ id, to, Icon }) => (
                    <li key={id} className={styles.text}>
                        <Link to={to} className={styles.link}>
                            <Icon />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export { Screens }
