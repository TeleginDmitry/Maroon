import { Navigation } from 'components/navigation/Navigation'
import logo from '../../shared/logo.svg';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <a href='#'>
                <img src={logo} alt='logo' />
            </a>
            <Navigation />
        </header>
    );
}

export { Header }
