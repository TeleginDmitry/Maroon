import { classNames } from 'utils/classNames/classNames'
import styles from './Menu.module.scss'
import { Networks } from 'components/shared/networks/Networks'
import { Screens } from './screens/Screens'

interface Props {
    isActiveMenu: boolean
    toggleActiveMenu(): void
}

export function Menu({ isActiveMenu, toggleActiveMenu }: Props) {
    return (
        <div
            className={classNames(styles.menu, {
                [styles.menu__active]: isActiveMenu
            })}
        >
            <div className={styles.container}>
                <Screens onClick={toggleActiveMenu}></Screens>
                <Networks onClick={toggleActiveMenu}></Networks>
            </div>
        </div>
    )
}
