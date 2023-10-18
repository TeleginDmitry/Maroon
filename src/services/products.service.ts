import { instance } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { ProductType } from 'shared/types/product.type'

export const productsService = {
    async getProducts(): Promise<AxiosResponse<ProductType[]>> {
        return instance.get('/products')
    },

    async getProduct(id: string): Promise<AxiosResponse<ProductType>> {
        return instance.get(`/products/${id}`)
    },

    async getRecentlyProducts(): Promise<AxiosResponse<ProductType[]>> {
        return instance.get('/recentlyProducts')
    },

    async getMayLikeProducts(): Promise<AxiosResponse<ProductType[]>> {
        return instance.get('/mayLike')
    }
}
