import styles from './IndividualCare.module.scss'
import image from 'assets/images/individualCare.png'
import { Text } from './text/Text'

export function IndividualCare() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Text></Text>
                <div>
                    <img
                        className={styles.image}
                        src={image}
                        alt='Индивидуальная забота'
                    />
                </div>
            </div>
        </div>
    )
}
