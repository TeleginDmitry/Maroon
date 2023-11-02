import { useTypedSelector } from 'hooks/useTypedSelector'
import styles from './NotFound.module.scss'
import { isAuthSelector, isLoadingSelector } from 'store/auth/auth.selectors'
import { Link } from 'react-router-dom'
import { LOGIN_SCREEN, MAIN_SCREEN, allScreens } from 'configs/screens.config'

export function NotFound() {
    const isAuth = useTypedSelector(isAuthSelector)
    const isLoading = useTypedSelector(isLoadingSelector)

    if (isLoading) return null

    const currentLink = window.location.pathname

    const isExistScreens = allScreens.includes(currentLink)

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Страница не найдена</h1>
            {!isAuth && (
                <p className={styles.recommendation}>
                    Возможно, для просмотра этой страницы нужно -{' '}
                    <Link
                        className={styles.link}
                        to={LOGIN_SCREEN}
                        state={{
                            url: isExistScreens ? currentLink : MAIN_SCREEN
                        }}
                    >
                        Aвторизоваться
                    </Link>
                </p>
            )}
        </div>
    )
}
