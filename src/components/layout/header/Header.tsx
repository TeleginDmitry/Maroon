import { Nav } from 'components/nav/Nav';

import logo from '../../../assets/icons/logo.svg';

import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <a href='#'>
                <img src={logo} alt='logo' />
            </a>
            
            <Nav />
        </header>
    )
}

export { Header };