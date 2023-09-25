import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

export function Layout() {
    return (
        <div className={styles.wrapper}>
            {/* <Header></Header> */}
            <div className={styles.content}>
                <Outlet />
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}
