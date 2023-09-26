import { Navigation } from 'components/layout/navigation/Navigation';
import { Logo } from 'components/shared/logo/Logo';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
        </header>
    );
}

export { Header }
