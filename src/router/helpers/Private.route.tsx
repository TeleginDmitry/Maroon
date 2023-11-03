import { Navigate, Outlet } from 'react-router-dom'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { isAuthSelector, isVerifiedSelector } from 'store/auth/auth.selectors'
import { LOGIN_SCREEN } from 'configs/screens.config'

export function Private() {
    const isAuth = useTypedSelector(isAuthSelector)
    const isVerified = useTypedSelector(isVerifiedSelector)

    if (!isVerified) return null

    if (isAuth) {
        return <Outlet />
    } else {
        return <Navigate to={LOGIN_SCREEN} replace={true}></Navigate>
    }
}
