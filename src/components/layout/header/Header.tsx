import { Logo } from 'components/shared/logo/Logo';
import { NavListTexts } from '../navListTexts/NavListTexts';
import { NavListIcons } from '../navListIcons/NavListIcons';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav>
                <NavListTexts />
                <NavListIcons />
            </nav>
        </header>
    );
}

export { Header }
