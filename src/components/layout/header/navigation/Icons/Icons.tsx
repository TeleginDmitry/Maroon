import { Icon } from './Icon/Icon'
import { navListIconsData } from './icons.data'
import styles from './navListIcons.module.css'

const NavListIcons = () => {
    return (
        <ul className={styles.icons}>
            {navListIconsData.map((item) => (
                <Icon key={item.id} item={item} />
            ))}
        </ul>
    )
}

export { NavListIcons }
