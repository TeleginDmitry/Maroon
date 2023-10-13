import { cards } from 'shared/data/cards.data'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'
import styles from './Cards.module.scss'
import { Link } from 'react-router-dom'

export function Cards() {
    return (
        <div className={styles.cards}>
            {cards.map(({ id, src, title, to }) => {
                return (
                    <Link key={id} to={to}>
                        <div className={styles.card}>
                            <img
                                className={styles.image}
                                src={src}
                                alt='Картинка продукта'
                            />
                            <div className={styles.container}>
                                <p className={styles.title}>{title}</p>
                                <RightArrow></RightArrow>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
