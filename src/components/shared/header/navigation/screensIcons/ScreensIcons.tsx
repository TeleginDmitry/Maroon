import { Link } from 'react-router-dom'
import styles from './ScreensIcons.module.scss'
import { screensIcons } from 'shared/data/screensIcons.data'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PROFILE_SCREEN } from 'configs/screens.config'

export function ScreensIcons() {
    const user = useTypedSelector((state) => state.auth.user)

    return (
        <ul className={styles.screens}>
            {screensIcons.map(({ id, to, Icon }) => (
                <li title={to === PROFILE_SCREEN ? user?.name : ''} key={id}>
                    <Link to={to}>
                        <Icon></Icon>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
