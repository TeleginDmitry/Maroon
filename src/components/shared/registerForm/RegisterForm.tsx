import { useFormik } from 'formik'
import styles from './RegisterForm.module.scss'
import {
    InitialValuesRegisterType,
    initialValuesRegister
} from './initialValues'
import { Input } from 'components/ui/input/Input'
import { Button } from 'components/ui/button/Button'
import { useActions } from 'hooks/useActions'
import { UploadFile } from 'components/ui/uploadFile/UploadFile'
import { InputStatus } from 'components/ui/inputStatus/InputStatus'
import { RegisterValidationSchema } from 'shared/validations/auth.validate'

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
        validationSchema: RegisterValidationSchema,
        onSubmit: async (values: InitialValuesRegisterType) => {
            const image = values.image!
            register({ ...values, image })
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
                isWrong={!!errors.name && !!touched.name}
                placeholder='Введите своё имя...'
                value={values.name}
                onChange={handleChange}
                type='name'
                id='name'
            >
                <div className={styles.container}>
                    Имя
                    <InputStatus
                        isError={!!errors.name}
                        isShow={!!values.name.length}
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
                <div className={styles.container}>
                    Выбрать файл
                    <InputStatus
                        isError={!!errors.image}
                        isShow={!!values.image}
                    ></InputStatus>
                </div>
            </UploadFile>
            <Button disabled={isSubmitting} type='submit'>
                Создать
            </Button>
        </form>
    )
}
