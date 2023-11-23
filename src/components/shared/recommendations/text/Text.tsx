import { Button } from 'components/ui/button/Button'
import styles from './Text.module.scss'
import { Link } from 'react-router-dom'
import { UNKNOWN_SCREEN } from 'configs/screens.config'
import { AnimatedText } from 'components/ui/animatedText/AnimatedText'
import { motion } from 'framer-motion'

export function Text() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <AnimatedText
                    className={styles.title}
                    text='MAROON'
                ></AnimatedText>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className={styles.description}
                >
                    Натуральная косметика для бережного ухода за кожей
                </motion.p>
            </div>
            <Link to={UNKNOWN_SCREEN}>
                <Button>Подробнее</Button>
            </Link>
        </div>
    )
}
