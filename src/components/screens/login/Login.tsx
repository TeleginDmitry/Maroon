import { LoginForm } from 'components/shared/loginForm/LoginForm'
import { REGISTER_SCREEN } from 'configs/screens.config'
import styles from './Login.module.scss'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Добро пожаловать!</h1>
                <LoginForm></LoginForm>
                <Link className={styles.link} to={REGISTER_SCREEN}>
                    Ещё нет аккаунта
                </Link>
            </div>
        </div>
    )
}
