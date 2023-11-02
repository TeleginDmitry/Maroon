import { instance } from 'api/api.interceptor'
import { PatchRequestType, UserType } from 'shared/types/user.type'
import { AxiosResponse } from 'axios'

export const userService = {
    async patch({
        email,
        image,
        name,
        password
    }: PatchRequestType): Promise<AxiosResponse<UserType>> {
        const formData = new FormData()
        if (email) {
            formData.append('email', email)
        }
        if (image) {
            formData.append('image', image, image.name)
        }
        if (name) {
            formData.append('name', name)
        }
        if (password) {
            formData.append('password', password)
        }
        return instance.patch('user', formData)
    }
}
