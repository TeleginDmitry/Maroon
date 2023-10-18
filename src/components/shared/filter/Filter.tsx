import { Button } from 'components/ui/button/Button'
import styles from './Filter.module.scss'
import { useState } from 'react'
import { Menu } from './menu/Menu'
import { ReactComponent as Cancel } from 'assets/icons/cancel.svg'

interface Props {
    title: string
}

export function Filter({ title }: Props) {
    const [isActiveMenu, setActiveMenu] = useState(false)

    function toggleActiveMenu() {
        setActiveMenu((state) => !state)
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>

                {isActiveMenu ? (
                    <button
                        className={styles.cancel}
                        onClick={toggleActiveMenu}
                    >
                        <Cancel></Cancel>
                    </button>
                ) : (
                    <Button
                        className={styles.filter}
                        onClick={toggleActiveMenu}
                    >
                        Фильтр
                    </Button>
                )}
            </div>
            {isActiveMenu && <Menu></Menu>}
        </section>
    )
}
