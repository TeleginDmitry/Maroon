import axios from 'axios'
import { API_URL } from 'configs/api.config'
import { getToken, removeToken, saveToken } from '../utils/token/token'
import { authService } from 'services/auth.service'

const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

instance.interceptors.request.use((config) => {
    const token = getToken()

    if (config && config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

instance.interceptors.response.use(
    (config) => config,
    async (error) => {
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            error.config._isRetry = true
            const originalRequest = { ...error.config }

            try {
                const response = await authService.refresh()

                if (response.status === 200) {
                    const { access_token } = response.data

                    saveToken(access_token)

                    return instance.request(originalRequest)
                }
            } catch (error) {
                removeToken()
            }
        }
        throw error
    }
)

export { instance }
