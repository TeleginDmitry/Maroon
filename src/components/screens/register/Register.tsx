import { LOGIN_SCREEN } from 'configs/screens.config'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import { RegisterForm } from 'components/shared/registerForm/RegisterForm'

export function Register() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Добро пожаловать!</h1>
                <RegisterForm></RegisterForm>
                <Link className={styles.link} to={LOGIN_SCREEN}>
                    Уже есть аккаунт
                </Link>
            </div>
        </div>
    )
}
