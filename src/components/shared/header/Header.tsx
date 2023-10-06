import { Logo } from 'components/ui/logo/Logo'
import styles from './Header.module.scss'
import { Navigation } from './navigation/Navigation'
import { Burger } from './burger/Burger'
import { useLocation } from 'react-router-dom'
import { classNames } from 'utils/classNames/classNames'
import { MAIN_SCREEN } from 'configs/screens.config'

export function Header() {
    const location = useLocation()

    const pathname = location.pathname

    return (
        <header
            className={classNames(styles.header, {
                [styles.header__border]: pathname !== MAIN_SCREEN
            })}
        >
            <Burger></Burger>
            <Logo></Logo>
            <Navigation></Navigation>
        </header>
    )
}
