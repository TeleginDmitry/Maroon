import { Button } from 'components/ui/button/Button'
import styles from './Title.module.scss'
import { Link } from 'react-router-dom'

export function Title() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>MAROON</h1>
                <p className={styles.description}>
                    Натуральная косметика для бережного ухода за кожей
                </p>
            </div>
            <Link to={'#'}>
                <Button>Подробнее</Button>
            </Link>
        </div>
    )
}
