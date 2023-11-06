import { Checkbox } from 'components/ui/checkbox/Checkbox'
import styles from './Controls.module.scss'

export function Controls() {
    return (
        <div className={styles.wrapper}>
            <Checkbox>Выбрать все</Checkbox>
        </div>
    )
}
