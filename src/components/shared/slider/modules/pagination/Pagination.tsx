import styles from './Pagination.module.scss'
import { ReactComponent as Line } from 'assets/icons/line.svg'
import { useContext } from 'react'
import { SliderContext } from 'contexts/Slider.context'

interface Props {
    swipeRight(step?: number): void
    step: number
}

export function Pagination({ step, swipeRight }: Props) {
    const { totalCount, countSwipe } = useContext(SliderContext)

    const maxSteps = Math.ceil(totalCount! / countSwipe!)

    return (
        <div className={styles.pagination}>
            <p className={styles.page}>{step}</p>
            <Line></Line>
            <button
                onClick={() => swipeRight(maxSteps)}
                className={styles.page}
            >
                {maxSteps}
            </button>
        </div>
    )
}
