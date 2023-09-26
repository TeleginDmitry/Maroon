import { navListTextsData } from './navListTextsData'
import { NavListTextItem } from '../navListTextItem/NavListTextItemText'
import styles from './navListTexts.module.css'

const NavListTexts = () => {
    return (
        <ul className={styles.texts}>
            {navListTextsData.map((item) => (
                <NavListTextItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export { NavListTexts }
