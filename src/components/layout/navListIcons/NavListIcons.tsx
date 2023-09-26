import { NavListIcomItem } from '../navListIconItem/NavListIconItem'
import { navListIconsData } from './navListIconsData'
import styles from './navListIcons.module.css'

const NavListIcons = () => {
    return (
        <ul className={styles.icons}>
            {navListIconsData.map((item) => (
                <NavListIcomItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export { NavListIcons }
