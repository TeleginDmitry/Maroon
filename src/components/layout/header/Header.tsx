import { Logo } from 'components/shared/logo/Logo';
import { Screens } from './navigation/screens/Screens';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Screens />
        </header>
    );
}

export { Header }
