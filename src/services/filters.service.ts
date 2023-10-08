import { instance } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { FilterType } from 'shared/types/filter.type'

export const filtersService = {
    async getFilters(): Promise<AxiosResponse<FilterType[]>> {
        return instance.get('/filters')
    }
}
