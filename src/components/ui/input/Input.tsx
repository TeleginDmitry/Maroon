import { classNames } from 'utils/classNames/classNames'
import styles from './Input.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode
    isWrong?: boolean
}

export function Input({ children, className, type, isWrong, ...rest }: Props) {
    return (
        <label className={styles.label}>
            {children}
            <input
                {...rest}
                className={classNames(styles.input, {
                    [className!]: !!className,
                    [styles.wrong]: isWrong
                })}
                type={type || 'text'}
            />
        </label>
    )
}
