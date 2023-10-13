import { Logo } from 'components/ui/logo/Logo'
import styles from './Navigations.module.scss'
import { Screens } from './screens/Screens'
import { Networks } from 'components/shared/networks/Networks'

export function Navigations() {
    return (
        <nav className={styles.navigations}>
            <div className={styles.container}>
                <Logo></Logo>
                <Screens></Screens>
            </div>
            <Networks></Networks>
        </nav>
    )
}
