import { Item } from 'types/Item.type'
import styles from './navListTextItem.module.css'

interface Props {
    item: Item
}

const NavListTextItem = ({ item }: Props) => {
    return (
        <li className={styles.text}>
            <a href='#' className={styles.link}>
                {item.data}
            </a>
        </li>
    )
}

export { NavListTextItem }
