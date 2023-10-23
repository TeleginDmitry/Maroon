import { useFormik } from 'formik'
import styles from './RegisterForm.module.scss'
import {
    InitialValuesRegisterType,
    initialValuesRegister
} from './initialValues'
import { validationSchemaRegister } from './validationSchema'
import { Input } from 'components/ui/input/Input'
import { Button } from 'components/ui/button/Button'
import { useActions } from 'hooks/useActions'
import { UploadFile } from 'components/ui/uploadFile/UploadFile'

export function RegisterForm() {
    const { register } = useActions()

    const {
        handleSubmit,
        handleChange,
        errors,
        touched,
        isSubmitting,
        values,
        setFieldValue
    } = useFormik<InitialValuesRegisterType>({
        initialValues: initialValuesRegister,
        validationSchema: validationSchemaRegister,
        onSubmit: async (values: InitialValuesRegisterType) => {
            const image = values.image!
            register({ ...values, image })
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
            <Input
                isWrong={!!errors.name && !!touched.name}
                placeholder='Введите своё имя...'
                value={values.name}
                onChange={handleChange}
                type='name'
                id='name'
            >
                Имя
            </Input>
            <UploadFile
                onChange={(event) => {
                    const file = event.target.files?.[0]

                    if (file) {
                        setFieldValue('image', file)
                    }
                }}
                accept='image/*'
                id='image'
            >
                Выбрать файл
            </UploadFile>
            <Button disabled={isSubmitting} type='submit'>
                Создать
            </Button>
        </form>
    )
}
