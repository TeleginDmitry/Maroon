import styles from './Navigation.module.scss'
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'
import { NavigationType } from 'shared/types/slider.type'
import { useContext } from 'react'
import { SliderContext } from 'contexts/Slider.context'
import { classNames } from 'utils/classNames/classNames'

interface Props {
    navigation: boolean | NavigationType
}

export function Navigation({ navigation }: Props) {
    const { swipeLeft, swipeRight } = useContext(SliderContext)

    const { className = '', position = 'center' } =
        typeof navigation === 'object' ? navigation : {}

    return (
        <div
            style={{
                justifyContent: position
            }}
            className={classNames(styles.navigation, {
                [className!]: !!className
            })}
        >
            <button onClick={swipeLeft} className={styles.button}>
                <LeftArrow></LeftArrow>
            </button>
            <button onClick={swipeRight} className={styles.button}>
                <RightArrow></RightArrow>
            </button>
        </div>
    )
}
