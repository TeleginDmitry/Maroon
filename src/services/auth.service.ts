import { instance } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import {
    LoginRequestType,
    LoginResponseType,
    RefreshResponseType,
    RegisterRequestType,
    RegisterResponseType,
    VerifyResponseType
} from 'shared/types/auth.type'

export const authService = {
    register: async ({
        email,
        image,
        name,
        password
    }: RegisterRequestType): Promise<AxiosResponse<RegisterResponseType>> => {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('image', image, image.name)
        formData.append('name', name)
        formData.append('password', password)
        return instance.post<RegisterResponseType>(`auth/register`, formData)
    },

    login: async ({
        password,
        email
    }: LoginRequestType): Promise<AxiosResponse<LoginResponseType>> => {
        return instance.post<LoginResponseType>(`auth/login`, {
            password,
            email
        })
    },

    refresh: async (): Promise<AxiosResponse<RefreshResponseType>> => {
        return instance.get(`auth/refresh`)
    },

    verify: async (): Promise<AxiosResponse<VerifyResponseType>> => {
        return instance.get<VerifyResponseType>(`auth/verify`)
    },

    logout: async (): Promise<AxiosResponse> => {
        return instance.post<void>(`auth/logout`)
    }
}
