import { classNames } from 'utils/classNames/classNames'
import styles from './Menu.module.scss'
import { Networks } from 'components/ui/networks/Networks'
import { Screens } from './screens/Screens'

interface Props {
    isActiveMenu: boolean
}

export function Menu({ isActiveMenu }: Props) {
    return (
        <div
            className={classNames(styles.menu, {
                [styles.menu__active]: isActiveMenu
            })}
        >
            <div className={styles.container}>
                <Screens></Screens>
                <Networks></Networks>
            </div>
        </div>
    )
}
