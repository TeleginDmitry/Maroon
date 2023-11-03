import styles from './ScreensIcons.module.scss'
import { screensIcons } from 'shared/data/screensIcons.data'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { PROFILE_SCREEN } from 'configs/screens.config'
import { PrivateLink } from 'components/ui/privateLink/PrivateLink'

export function ScreensIcons() {
    const user = useTypedSelector((state) => state.auth.user)

    return (
        <ul className={styles.screens}>
            {screensIcons.map(({ id, to, Icon }) => (
                <li title={to === PROFILE_SCREEN ? user?.name : ''} key={id}>
                    <PrivateLink to={to}>
                        <Icon className={styles.icon}></Icon>
                    </PrivateLink>
                </li>
            ))}
        </ul>
    )
}
