import styles from './Navigation.module.scss'
import { ScreensIcons } from './screensIcons/ScreensIcons'
import { ScreensTexts } from './screensTexts/ScreensTexts'

export function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ScreensTexts></ScreensTexts>
            <ScreensIcons></ScreensIcons>
        </nav>
    )
}
