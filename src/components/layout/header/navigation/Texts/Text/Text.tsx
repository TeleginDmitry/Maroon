import { HeaderText } from 'shared/types/header.type'
import styles from './navListTextItem.module.css'

interface Props {
    item: HeaderText
}

const Text = ({ item }: Props) => {
    return (
        <li className={styles.text}>
            <a href='#' className={styles.link}>
                {item.data}
            </a>
        </li>
    )
}

export { Text }
