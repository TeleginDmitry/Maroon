import styles from './Footer.module.scss'
import { Navigations } from './navigations/Navigations'
import { Information } from './information/Information'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Navigations></Navigations>
            <Information></Information>
        </footer>
    )
}
