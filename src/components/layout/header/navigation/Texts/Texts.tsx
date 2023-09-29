import { navListTextsData } from './texts.data'
import { Text } from './Text/Text'
import styles from './navListTexts.module.css'

const Texts = () => {
    return (
        <ul className={styles.texts}>
            {navListTextsData.map((item) => (
                <Text key={item.id} item={item} />
            ))}
        </ul>
    )
}

export { Texts }
