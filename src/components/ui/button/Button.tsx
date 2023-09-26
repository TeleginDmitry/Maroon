import styles from './Button.module.scss'

interface Props {
    text: string
}

export function Button({ text }: Props) {
    return <button className={styles.button}>{text}</button>
}
