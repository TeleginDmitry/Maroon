import { instance } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { ProductType } from 'shared/types/product.type'

export const recentlyProducts = {
    async getProducts(): Promise<AxiosResponse<ProductType[]>> {
        return instance.get('/recentlyProducts')
    }
}
