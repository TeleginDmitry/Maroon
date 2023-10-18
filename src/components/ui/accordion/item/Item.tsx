import styles from './Item.module.scss'
import { ReactComponent as Minus } from 'assets/icons/minus.svg'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { useState } from 'react'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    title: string
    children: string | React.ReactNode
}

export function Item({ title, children }: Props) {
    const [isActive, setIsActive] = useState(false)

    function toggleIsActive() {
        setIsActive((state) => !state)
    }

    return (
        <li className={styles.wrapper}>
            <div onClick={toggleIsActive} className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {isActive ? (
                    <Minus className={styles.icon}></Minus>
                ) : (
                    <Plus className={styles.icon}></Plus>
                )}
            </div>
            <div
                className={classNames(styles.container, {
                    [styles.container__active]: isActive
                })}
            >
                <p className={styles.body}>{children}</p>
            </div>
        </li>
    )
}
