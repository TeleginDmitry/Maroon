import { instance } from 'api/api.interceptor'
import { PatchRequestType, UserType } from 'shared/types/user.type'
import { AxiosResponse } from 'axios'

export const userService = {
    async patch(data: PatchRequestType): Promise<AxiosResponse<UserType>> {
        return instance.patch('user', data)
    }
}
