import { NavListIcomItem } from 'components/navListIconItem/NavListIconItem'
import { navListIconData } from './navListIconData'
import styles from './navListIcon.module.css'

const NavListIcon = () => {
    return (
        <ul className={styles.icons}>
            {navListIconData.map((item) => (
                <NavListIcomItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export { NavListIcon }
