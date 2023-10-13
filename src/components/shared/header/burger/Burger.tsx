import { useState } from 'react'
import styles from './Burger.module.scss'
import { ReactComponent as BurgerSvg } from 'assets/icons/burger.svg'
import { ReactComponent as CancelSvg } from 'assets/icons/cancel.svg'
import { Menu } from './menu/Menu'

export function Burger() {
    const [isActiveMenu, setActiveMenu] = useState(false)

    function toggleActiveMenu() {
        setActiveMenu((state) => !state)
    }

    return (
        <div className={styles.burger}>
            <button className={styles.button} onClick={toggleActiveMenu}>
                {isActiveMenu ? (
                    <CancelSvg></CancelSvg>
                ) : (
                    <BurgerSvg></BurgerSvg>
                )}
            </button>
            <Menu
                toggleActiveMenu={toggleActiveMenu}
                isActiveMenu={isActiveMenu}
            ></Menu>
        </div>
    )
}
