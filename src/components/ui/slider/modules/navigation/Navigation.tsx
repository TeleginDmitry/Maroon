import styles from './Navigation.module.scss'
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'
import { NavigationType } from 'shared/types/slider.type'

interface Props {
    swipeLeft(): void
    swipeRight(step?: number): void
    navigation: boolean | NavigationType
}

export function Navigation({ swipeLeft, swipeRight, navigation }: Props) {
    return (
        <div
            style={{
                justifyContent:
                    typeof navigation === 'object'
                        ? 'position' in navigation
                            ? navigation.position
                            : 'right'
                        : 'right'
            }}
            className={styles.navigation}
        >
            <button onClick={swipeLeft} className={styles.button}>
                <LeftArrow></LeftArrow>
            </button>
            <button onClick={() => swipeRight()} className={styles.button}>
                <RightArrow></RightArrow>
            </button>
        </div>
    )
}
