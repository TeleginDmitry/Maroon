import { object, string, mixed } from 'yup'

export const UserValidationSchema = object({
    email: string().email('Неправильный формат email').optional(),
    password: string().optional(),
    name: string().optional(),
    image: mixed().optional()
})
