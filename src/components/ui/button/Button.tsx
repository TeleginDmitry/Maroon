import { classNames } from 'utils/classNames/classNames'
import styles from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
}

export function Button({ children, className, disabled, ...rest }: Props) {
    return (
        <button
            {...rest}
            className={classNames(styles.button, {
                [className!]: !!className,
                [styles.disabled]: disabled
            })}
        >
            {children}
        </button>
    )
}
