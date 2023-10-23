export interface InitialValuesRegisterType {
    email: string
    password: string
    name: string
    image: File | null
}

export const initialValuesRegister: InitialValuesRegisterType = {
    email: '',
    password: '',
    name: '',
    image: null
}
