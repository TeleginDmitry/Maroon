import { instance } from 'api/api.interceptor'
// eslint-disable-next-line import/named
import { AxiosResponse } from 'axios'
import { Product } from 'shared/types/product.type'

export const productsService = {
    async getProducts(): Promise<AxiosResponse<Product[]>> {
        return instance.get('/products')
    }
}
