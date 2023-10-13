import { Button } from 'components/ui/button/Button'
import styles from './Text.module.scss'
import { Link } from 'react-router-dom'
import { UNKNOWN_SCREEN } from 'configs/screens.config'

export function Text() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Присоединяйтесь к нам</h1>
                <p className={styles.description}>
                    Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках
                    и акциях первыми
                </p>
            </div>

            <Link to={UNKNOWN_SCREEN}>
                <Button>Подписаться</Button>
            </Link>
        </div>
    )
}
