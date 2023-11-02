import { LOCAL_STORAGE_TOKEN_KEY } from 'configs/localStorage.config'

export const getToken = () => {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
}

export const saveToken = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
}

export const removeToken = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
}
