import { ReactComponent as Ruble } from 'assets/icons/ruble.svg'
import { formatPrice } from 'utils/formatPrice/formatPrice'
import styles from './Price.module.scss'
import { classNames } from 'utils/classNames/classNames'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    price: number
}

export function Price({ price, className, ...rest }: Props) {
    const formattedPrice = formatPrice(price)
    return (
        <p
            {...rest}
            className={classNames(styles.price, { [className!]: !!className })}
        >
            {formattedPrice} <Ruble className={styles.icon}></Ruble>
        </p>
    )
}
