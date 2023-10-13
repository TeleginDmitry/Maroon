import { Button } from 'components/ui/button/Button'
import styles from './Text.module.scss'
import { Link } from 'react-router-dom'
import { UNKNOWN_SCREEN } from 'configs/screens.config'

export function Text() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Индивидуальный уход</h1>
                <p className={styles.description}>
                    Не всегда очевидно, какие элементы и минералы необходимы
                    коже, а многочисленные эксперименты с разными средствами
                    только ухудшают ее качество.
                </p>
                <p className={styles.description}>
                    Заполните анкету, и мы подберем уход, подходящий именно вам,
                    учитывая ваш образ жизни, место жительства и другие факторы.
                </p>
            </div>
            <Link to={UNKNOWN_SCREEN}>
                <Button>Заполнить анкету</Button>
            </Link>
        </div>
    )
}
