import { useState, useEffect } from 'react'
import styles from './Checkbox.module.scss'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    children?: React.ReactNode
    onToggle?: (isChecked: boolean) => void
    className?: string
    initialState?: boolean
    view?: 'circle' | 'square'
    disabled?: boolean
}

export function Checkbox({
    children,
    onToggle,
    className,
    initialState = false,
    view = 'square',
    disabled = false
}: Props) {
    const [isChecked, setChecked] = useState(initialState)

    function toggleChecked() {
        if (disabled) return

        setChecked((state) => !state)

        onToggle?.(!isChecked)
    }

    useEffect(() => {
        setChecked(initialState)
    }, [initialState])

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
