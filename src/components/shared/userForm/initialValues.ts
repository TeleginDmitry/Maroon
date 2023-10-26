export interface InitialValuesUserType {
    email: string
    password: string
    name: string
    image: File | null
}

export const initialValuesUser: InitialValuesUserType = {
    email: '',
    password: '',
    name: '',
    image: null
}
