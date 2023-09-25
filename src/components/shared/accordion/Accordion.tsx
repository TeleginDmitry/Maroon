import styles from './Accordion.module.scss'
import { Item } from './item/Item'

interface Props {
    children: React.ReactNode
}

export function Accordion({ children }: Props) {
    return <ul className={styles.wrapper}>{children}</ul>
}

Accordion.Item = Item
