import { UserType } from './user.type'

export interface RegisterRequestType {
    name: string
    email: string
    password: string
    image: File
}

export interface RegisterResponseType {
    user: UserType
    token: string
}

export interface LoginRequestType {
    email: string
    password: string
}

export interface LoginResponseType {
    user: UserType
    token: string
}

export interface VerifyResponseType {
    user: UserType
    iat: number
    exp: number
}
