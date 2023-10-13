import { ReactComponent as Icon } from 'assets/icons/logo.svg'
import { MAIN_SCREEN } from 'configs/screens.config'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to={MAIN_SCREEN}>
            <Icon />
        </Link>
    )
}

export { Logo }
