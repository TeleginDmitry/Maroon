import { instance } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { Product } from 'shared/types/product.type'

export const productsService = {
    async getProducts(): Promise<AxiosResponse<Product[]>> {
        return instance.get('/products')
    }
}
