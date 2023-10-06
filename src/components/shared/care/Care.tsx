import { Button } from 'components/ui/button/Button'
import styles from './Care.module.scss'
import { Link } from 'react-router-dom'

export function Care() {
    return (
        <div className={styles.care}>
            <p className={styles.text}>
                “Мы стремимся сделать уход за кожей доступным и приятным
                ритуалом для всех, кто хочет заботиться о себе и своем теле”{' '}
            </p>
            <Link to={'#'}>
                <Button>Наша история</Button>
            </Link>
        </div>
    )
}
