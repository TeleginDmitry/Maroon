import { useFormik } from 'formik'
import styles from './LoginForm.module.scss'
import { InitialValuesLoginType, initialValuesLogin } from './initialValues'
import { validationSchemaLogin } from './validationSchema'
import { Input } from 'components/ui/input/Input'
import { Button } from 'components/ui/button/Button'
import { useActions } from 'hooks/useActions'
import { InputStatus } from 'components/ui/inputStatus/InputStatus'

export function LoginForm() {
    const { login } = useActions()

    const {
        handleSubmit,
        handleChange,
        errors,
        touched,
        isSubmitting,
        values
    } = useFormik<InitialValuesLoginType>({
        initialValues: initialValuesLogin,
        validationSchema: validationSchemaLogin,
        onSubmit: async (values: InitialValuesLoginType) => {
            login(values)
        }
    })

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input
                isWrong={!!errors.email && !!touched.email}
                inputMode='email'
                placeholder='Введите свой email...'
                value={values.email}
                onChange={handleChange}
                type='email'
                id='email'
            >
                <div className={styles.container}>
                    Email
                    <InputStatus
                        isError={!!errors.email}
                        isShow={!!values.email.length}
                    ></InputStatus>
                </div>
            </Input>
            <Input
                isWrong={!!errors.password && !!touched.password}
                placeholder='Введите свой пароль...'
                value={values.password}
                onChange={handleChange}
                type='password'
                id='password'
            >
                <div className={styles.container}>
                    Пароль
                    <InputStatus
                        isError={!!errors.password}
                        isShow={!!values.password.length}
                    ></InputStatus>
                </div>
            </Input>
            <Button disabled={isSubmitting} type='submit'>
                Войти
            </Button>
        </form>
    )
}
