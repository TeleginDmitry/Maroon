import { Link } from 'react-router-dom'
import styles from './Text.module.scss'
import { Button } from 'components/ui/button/Button'
import { UNKNOWN_SCREEN } from 'configs/screens.config'

export function Text() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>
                “Мы стремимся сделать уход за кожей доступным и приятным
                ритуалом для всех, кто хочет заботиться о себе и своем теле”{' '}
            </p>
            <Link to={UNKNOWN_SCREEN}>
                <Button>Наша история</Button>
            </Link>
        </div>
    )
}
