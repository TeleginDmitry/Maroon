import styles from './Modules.module.scss'
import { Pagination } from './pagination/Pagination'
import { Navigation } from './navigation/Navigation'
import { useContext, useState } from 'react'
import { SliderContext } from 'contexts/Slider.context'

interface Props {
    navigation: boolean
    pagination: boolean
}

export function Modules({ navigation, pagination }: Props) {
    const { countSwipe, setIndexActive, totalCount } = useContext(SliderContext)
    const [step, setStep] = useState(1)

    function swipeLeft() {
        if (step <= 1) return

        setStep((state) => state - 1)
        setIndexActive!((state) => state - countSwipe!)
    }

    function swipeRight(value?: number) {
        if (step * countSwipe! >= totalCount!) return

        if (value) {
            setIndexActive!((value - 1) * countSwipe!)
            setStep(value)
        } else {
            setIndexActive!((state) => state + countSwipe!)
            setStep((state) => state + 1)
        }
    }

    return (
        <div className={styles.modules}>
            {pagination && (
                <Pagination swipeRight={swipeRight} step={step}></Pagination>
            )}
            {navigation && (
                <Navigation
                    swipeLeft={swipeLeft}
                    swipeRight={swipeRight}
                ></Navigation>
            )}
        </div>
    )
}
