import axios from 'axios'
import { API_URL } from 'configs/api.config'
import { getToken } from '../utils/token/token'

const instance = axios.create({
    baseURL: API_URL
})

instance.interceptors.request.use((config) => {
    const token = getToken()

    if (config && config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export { instance }
