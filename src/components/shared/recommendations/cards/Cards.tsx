import { cards } from 'shared/data/cards.data'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'
import styles from './Cards.module.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Cards() {
    return (
        <div className={styles.cards}>
            {cards.map(({ id, src, title, to }) => {
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        key={id}
                        className={styles.card}
                    >
                        <img
                            className={styles.image}
                            src={src}
                            alt='Картинка продукта'
                        />
                        <div className={styles.container}>
                            <p className={styles.title}>{title}</p>
                            <RightArrow></RightArrow>
                        </div>

                        <Link className={styles.link} to={to}></Link>
                    </motion.div>
                )
            })}
        </div>
    )
}
