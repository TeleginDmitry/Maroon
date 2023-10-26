import { object, string, mixed } from 'yup'

export const RegisterValidationSchema = object({
    email: string()
        .email('Неправильный формат email')
        .required('Email обязателен для заполнения'),
    password: string().required('Пароль обязателен для заполнения'),
    name: string().required('Имя обязателено для заполнения'),
    image: mixed().required('Фото обязателено для заполнения')
})
