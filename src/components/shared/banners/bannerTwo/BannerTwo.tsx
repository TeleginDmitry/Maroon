import { Button } from 'components/ui/button/Button'
import styles from './BannerTwo.module.scss'
import { Link } from 'react-router-dom'
import { UNKNOWN_SCREEN } from 'configs/screens.config'

export function BannerTwo() {
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
