import { COOKIE_TOKEN_KEY } from 'configs/cookie.config'
import Cookie from 'js-cookie'

export const getToken = () => {
    return Cookie.get(COOKIE_TOKEN_KEY)
}

export const saveToken = (token: string) => {
    Cookie.set(COOKIE_TOKEN_KEY, token)
}

export const removeToken = () => {
    Cookie.remove(COOKIE_TOKEN_KEY)
}
