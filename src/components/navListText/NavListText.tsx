import { navListTextData } from './navListTextData'
import { NavListTextItem } from 'components/navListTextItem/NavListTextItemText'
import styles from './navListText.module.css'

const NavListText = () => {
    return (
        <ul className={styles.texts}>
            {navListTextData.map((item) => (
                <NavListTextItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export { NavListText }
