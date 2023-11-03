import { Navigate, Outlet } from 'react-router-dom'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { isAuthSelector, isLoadingSelector } from 'store/auth/auth.selectors'
import { LOGIN_SCREEN } from 'configs/screens.config'

export function Private() {
    const isAuth = useTypedSelector(isAuthSelector)
    const isLoading = useTypedSelector(isLoadingSelector)

    if (isLoading) return null

    if (isAuth) {
        return <Outlet />
    } else {
        return <Navigate to={LOGIN_SCREEN} replace={true}></Navigate>
    }
}
