import { useFormik } from 'formik'
import styles from './LoginForm.module.scss'
import { InitialValuesLoginType, initialValuesLogin } from './initialValues'
import { validationSchemaLogin } from './validationSchema'
import { Input } from 'components/ui/input/Input'
import { Button } from 'components/ui/button/Button'
import { useActions } from 'hooks/useActions'

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
                placeholder='Введите свой email...'
                value={values.email}
                onChange={handleChange}
                type='email'
                id='email'
            >
                Email
            </Input>
            <Input
                isWrong={!!errors.password && !!touched.password}
                placeholder='Введите свой пароль...'
                value={values.password}
                onChange={handleChange}
                type='password'
                id='password'
            >
                Пароль
            </Input>
            <Button disabled={isSubmitting} type='submit'>
                Войти
            </Button>
        </form>
    )
}
