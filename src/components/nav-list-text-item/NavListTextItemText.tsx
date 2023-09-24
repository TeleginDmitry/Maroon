import { Item } from 'types/Item';
import styles from './navListTextItem.module.css'

interface INavListItemText {
    item: Item
}

const NavListTextItem = ({ item }: INavListItemText) => {
    return (
        <a href="#" className={styles.nav__list_item__link}>{item.data}</a>
    )
}

export { NavListTextItem };