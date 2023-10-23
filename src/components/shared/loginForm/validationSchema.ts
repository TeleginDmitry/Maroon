import { object, string, ObjectSchema } from 'yup'
import { InitialValuesLoginType } from './initialValues'

export const validationSchemaLogin: ObjectSchema<InitialValuesLoginType> =
    object({
        email: string()
            .email('Неправильный формат email')
            .required('Email обязателен для заполнения'),
        password: string().required('Пароль обязателен для заполнения')
    })
