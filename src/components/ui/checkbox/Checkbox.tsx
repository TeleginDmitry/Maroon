import { useState } from 'react'
import styles from './Checkbox.module.scss'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    children?: React.ReactNode
    onToggle?: (isChecked: boolean) => void
    className?: string
    initialState?: boolean
}

export function Checkbox({
    children,
    onToggle,
    className,
    initialState
}: Props) {
    const [isChecked, setChecked] = useState(
        initialState ? initialState : false
    )

    function toggleChecked() {
        setChecked((state) => !state)

        onToggle?.(isChecked)
    }

    return (
        <label
            onClick={toggleChecked}
            className={classNames(styles.wrapper, {
                [className!]: !!className
            })}
        >
            <div className={styles.checkbox}>
                <div
                    className={classNames(styles.background, {
                        [styles.background__checked]: isChecked
                    })}
                ></div>
            </div>
            <span>{children}</span>
        </label>
    )
}
