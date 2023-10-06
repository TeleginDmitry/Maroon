import styles from './Join.module.scss'
import { Images } from './images/Images'
import { Text } from './text/Text'

export function Join() {
    return (
        <div className={styles.join}>
            <Images></Images>
            <Text></Text>
        </div>
    )
}
