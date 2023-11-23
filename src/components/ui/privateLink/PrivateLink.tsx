import { isAuthSelector } from 'store/auth/auth.selectors'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { Link, LinkProps } from 'react-router-dom'
import { LOGIN_SCREEN } from 'configs/screens.config'

export function PrivateLink({ children, to, ...linkProps }: LinkProps) {
    const isAuth = useTypedSelector(isAuthSelector)

    if (isAuth) {
        return (
            <Link to={to} {...linkProps}>
                {children}
            </Link>
        )
    } else {
        return (
            <Link to={LOGIN_SCREEN} replace={true} state={{ from: to }}>
                {children}
            </Link>
        )
    }
}
