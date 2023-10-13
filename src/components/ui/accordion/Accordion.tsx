import { classNames } from 'utils/classNames/classNames'
import styles from './Accordion.module.scss'
import { Item } from './item/Item'

interface Props {
    children: React.ReactNode
    className?: string
}

export function Accordion({ children, className }: Props) {
    return (
        <ul
            className={classNames(styles.wrapper, {
                [className!]: !!className
            })}
        >
            {children}
        </ul>
    )
}

Accordion.Item = Item
