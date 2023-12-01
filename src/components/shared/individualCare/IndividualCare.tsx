import styles from './IndividualCare.module.scss'
import image from 'assets/images/individualCare.avif'
import { Text } from './text/Text'

export function IndividualCare() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <Text></Text>
                <div>
                    <img
                        className={styles.image}
                        src={image}
                        alt='Индивидуальная забота'
                        loading='lazy'
                    />
                </div>
            </div>
        </section>
    )
}
