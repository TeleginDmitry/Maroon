import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import { Footer } from 'components/shared/footer/Footer'
import { Header } from 'components/shared/header/Header'

export function Layout() {
    return (
        <div className={styles.wrapper}>
            <Header></Header>

            <main className={styles.content}>
                <Outlet />
            </main>

            <Footer></Footer>
        </div>
    )
}
