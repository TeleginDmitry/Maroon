import { useTypedSelector } from 'hooks/useTypedSelector'
import styles from './UserForm.module.scss'
import { userSelector } from 'store/auth/auth.selectors'
import { Input } from 'components/ui/input/Input'
import { useFormik } from 'formik'
import { UploadFile } from 'components/ui/uploadFile/UploadFile'
import { UserValidationSchema } from 'shared/validations/user.validate'
import { InitialValuesUserType, initialValuesUser } from './initialValues'
import { InputStatus } from 'components/ui/inputStatus/InputStatus'
import { Button } from 'components/ui/button/Button'
import { useMutation } from '@tanstack/react-query'
import { userService } from 'services/user.service'
import { useActions } from 'hooks/useActions'

export function UserForm() {
    const { patchUser } = useActions()
    const user = useTypedSelector(userSelector)

    const { mutate } = useMutation({
        mutationFn: async (values: InitialValuesUserType) => {
            const response = await userService.patch(values)
            return response.data
        },
        onSuccess(user) {
            patchUser(user)
        }
    })

    const {
        handleSubmit,
        handleChange,
        errors,
        touched,
        isSubmitting,
        values,
        setFieldValue
    } = useFormik<InitialValuesUserType>({
        initialValues: initialValuesUser,
        validationSchema: UserValidationSchema,
        onSubmit: async (values: InitialValuesUserType) => {
            mutate(values)
        }
    })

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
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
                <img
                    className={styles.image}
                    src={user?.image}
                    alt='Изображение пользователя'
                />
            </UploadFile>
            <Input
                isWrong={!!errors.email && !!touched.email}
                inputMode='email'
                placeholder={user?.email}
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
                placeholder={user?.name}
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
                placeholder='Пароль'
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
                Сохранить
            </Button>
        </form>
    )
}
