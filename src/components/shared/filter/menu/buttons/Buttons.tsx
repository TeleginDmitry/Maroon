import { Button } from 'components/ui/button/Button'
import styles from './Buttons.module.scss'

export function Buttons() {
    return (
        <div className={styles.wrapper}>
            <Button>Применить</Button>
            <Button>Сбросить</Button>
        </div>
    )
}
