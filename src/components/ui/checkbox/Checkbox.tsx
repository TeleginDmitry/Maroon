import { useState } from 'react'
import styles from './Checkbox.module.scss'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    children?: React.ReactNode
}

export function Checkbox({ children }: Props) {
    const [isChecked, setChecked] = useState(false)

    function toggleChecked() {
        setChecked((state) => !state)
    }

    return (
        <label onClick={toggleChecked} className={styles.wrapper}>
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
