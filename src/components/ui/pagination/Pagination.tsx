import styles from './Pagination.module.scss'
import { ReactComponent as Line } from 'assets/icons/line.svg'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    valueLeft: number
    valueRight: number
    className?: string
    onClickLeft?(): void
    onClickRight?(): void
}

export function Pagination({
    valueLeft,
    valueRight,
    onClickLeft,
    onClickRight,
    className
}: Props) {
    return (
        <div
            className={classNames(styles.pagination, {
                [className!]: !!className
            })}
        >
            <p onClick={onClickLeft} className={styles.page}>
                {valueLeft}
            </p>
            <Line></Line>
            <p onClick={onClickRight} className={styles.page}>
                {valueRight}
            </p>
        </div>
    )
}
