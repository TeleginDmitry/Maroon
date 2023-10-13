import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import { Footer } from 'components/shared/footer/Footer'

export function Layout() {
    return (
        <div className={styles.wrapper}>
            {/* <Header></Header> */}
            <div className={styles.content}>
                <Outlet />
            </main>

            <Footer></Footer>
        </div>
    )
}
