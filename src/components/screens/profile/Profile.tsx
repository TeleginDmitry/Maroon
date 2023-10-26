import { UserForm } from 'components/shared/userForm/UserForm'
import styles from './Profile.module.scss'

export function Profile() {
    return (
        <div className={styles.wrapper}>
            <UserForm></UserForm>
        </div>
    )
}
