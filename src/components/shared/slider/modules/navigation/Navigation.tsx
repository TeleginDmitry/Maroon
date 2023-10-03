import styles from './Navigation.module.scss'
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'

interface Props {
    swipeLeft(): void
    swipeRight(step?: number): void
}

export function Navigation({ swipeLeft, swipeRight }: Props) {
    return (
        <div className={styles.navigation}>
            <button onClick={swipeLeft} className={styles.button}>
                <LeftArrow></LeftArrow>
            </button>
            <button onClick={() => swipeRight()} className={styles.button}>
                <RightArrow></RightArrow>
            </button>
        </div>
    )
}
