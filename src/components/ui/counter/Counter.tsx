import { IconMinus, IconPlus } from '@tabler/icons-react'
import styles from './Counter.module.scss'
import { useRef, useState } from 'react'

interface Props {
    initialCount: number
    changeProduct(count: number): void
    max?: number
    min?: number
}

export function Counter({
    initialCount,
    max = 30,
    min = 1,
    changeProduct
}: Props) {
    const [count, setState] = useState(initialCount)

    const intervalRef = useRef<any>(null)
    const timeoutRef = useRef<any>(null)

    function increase() {
        intervalRef.current = setInterval(() => {
            setState((state) => {
                if (state >= max) {
                    clearInterval(intervalRef.current)
                    return max
                }

                return state + 1
            })
        }, 250)
    }

    function decrease() {
        intervalRef.current = setInterval(() => {
            setState((state) => {
                if (state <= min) {
                    clearInterval(intervalRef.current)
                    return min
                }

                return state - 1
            })
        }, 250)
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setState(+value)

        if (+value > max) {
            defineTimeout(max)
        } else if (+value < min) {
            defineTimeout(min)
        } else {
            defineTimeout(+value)
        }
    }

    function onBlur() {
        if (count > max) {
            setState(max)
        }

        if (count < min) {
            setState(min)
        }
    }

    function onMouseUpDecrease() {
        deleteInterval()

        setState((state) => state - 1)

        defineTimeout(count - 1)
    }

    function onMouseUpIncrease() {
        deleteInterval()

        setState((state) => state + 1)

        defineTimeout(count + 1)
    }

    function deleteInterval() {
        clearInterval(intervalRef.current)
    }
    function defineTimeout(countParam: number) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            changeProduct(countParam)
        }, 500)
    }

    return (
        <div className={styles.counter}>
            <button
                onMouseDown={decrease}
                onMouseUp={onMouseUpDecrease}
                onMouseLeave={deleteInterval}
                disabled={count <= 1}
                className={styles.button}
            >
                <IconMinus></IconMinus>
            </button>
            <input
                pattern='[0-9]*'
                inputMode='numeric'
                onChange={onChange}
                onBlur={onBlur}
                className={styles.input}
                min={min}
                max={max}
                value={!count ? '' : count}
                type='number'
                maxLength={max.toString.length}
            />
            <button
                onMouseDown={increase}
                onMouseUp={onMouseUpIncrease}
                onMouseLeave={deleteInterval}
                disabled={count >= max}
                className={styles.button}
            >
                <IconPlus></IconPlus>
            </button>
        </div>
    )
}
