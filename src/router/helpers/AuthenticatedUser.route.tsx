import { MAIN_SCREEN } from 'configs/screens.config'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { isAuthSelector, isVerifiedSelector } from 'store/auth/auth.selectors'

export function AuthenticatedUser() {
    const isVerified = useTypedSelector(isVerifiedSelector)
    const isAuth = useTypedSelector(isAuthSelector)

    const { state } = useLocation()

    if (!isVerified) return null

    if (isAuth) {
        return (
            <Navigate to={state?.from || MAIN_SCREEN} replace={true}></Navigate>
        )
    }

    return <Outlet />
}
