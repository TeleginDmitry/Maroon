import { useCallback, useEffect, useState } from 'react'
import styles from './AnimatedText.module.scss'

interface Props {
    text: string
    duration?: number
    delay?: number
    className?: string
}

export function AnimatedText({
    text,
    delay = 100,
    duration = 220,
    className
}: Props) {
    const [letters, setLetters] = useState<string[]>([])

    const addLetters = useCallback(() => {
        text.split('').forEach(async (letter, index) => {
            setTimeout(() => {
                setLetters((state) => [...state, letter])
            }, index * duration)
        })
    }, [duration, text])

    useEffect(() => {
        if (delay) {
            setTimeout(() => {
                addLetters()
            }, delay)
        } else {
            addLetters()
        }
    }, [text, duration, delay, addLetters])

    return (
        <div className={styles.wrapper}>
            {letters.map((letter, index) => {
                return (
                    <span className={className} key={index}>
                        {letter}
                    </span>
                )
            })}
        </div>
    )
}
