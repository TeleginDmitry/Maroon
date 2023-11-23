import styles from './Navigation.module.scss'
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    className?: string
    onClickLeft?(): void
    onClickRight?(): void
}

export function Navigation({ className, onClickLeft, onClickRight }: Props) {
    return (
        <div
            className={classNames(styles.navigation, {
                [className!]: !!className
            })}
        >
            <button onClick={onClickLeft} className={styles.button}>
                <LeftArrow></LeftArrow>
            </button>
            <button onClick={onClickRight} className={styles.button}>
                <RightArrow></RightArrow>
            </button>
        </div>
    )
}
