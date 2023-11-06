import { useState } from 'react'
import styles from './Checkbox.module.scss'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    children?: React.ReactNode
    onToggle?: (isChecked: boolean) => void
    className?: string
    initialState?: boolean
    view?: 'circle' | 'square'
}

export function Checkbox({
    children,
    onToggle,
    className,
    initialState,
    view = 'square'
}: Props) {
    const [isChecked, setChecked] = useState(initialState ?? false)

    function toggleChecked() {
        setChecked((state) => {
            onToggle?.(!state)

            return !state
        })
    }

    return (
        <label
            onClick={toggleChecked}
            className={classNames(styles.wrapper, {
                [className!]: !!className
            })}
        >
            <div
                className={classNames(styles.checkbox, {
                    [styles.checkbox__circle]: view === 'circle'
                })}
            >
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
