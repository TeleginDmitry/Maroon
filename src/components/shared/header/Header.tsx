import { Logo } from 'components/ui/logo/Logo'
import styles from './Header.module.scss'
import { Navigation } from './navigation/Navigation'
import { Burger } from './burger/Burger'

export function Header() {
    return (
        <header className={styles.header}>
            <Burger></Burger>
            <Logo></Logo>
            <Navigation></Navigation>
        </header>
    )
}
