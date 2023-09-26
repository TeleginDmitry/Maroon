import { ListItem } from 'interface/ListItem.type'
import styles from './navListTextItem.module.css'

interface Props {
    item: ListItem
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
