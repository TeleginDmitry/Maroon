import { classNames } from 'utils/classNames/classNames'
import styles from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
}

export function Button({ children, className, ...rest }: Props) {
    return (
        <button
            {...rest}
            className={classNames(styles.button, {
                [className!]: !!className
            })}
        >
            {children}
        </button>
    )
}
