import { UserType } from './user.type'

export interface RegisterRequestType {
    name: string
    email: string
    password: string
    image: File
}

export interface RegisterResponseType {
    user: UserType
    access_token: string
}

export interface LoginRequestType {
    email: string
    password: string
}

export interface LoginResponseType {
    user: UserType
    access_token: string
}

export interface VerifyResponseType extends UserType {}

export interface RefreshResponseType {
    access_token: string
}
