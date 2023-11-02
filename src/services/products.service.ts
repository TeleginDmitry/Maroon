import { instance } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { FILTER_PARAM } from 'configs/filter.config'
import { ProductType, RecentlyProductType } from 'shared/types/product.type'

export const productsService = {
    async getProducts(
        categories?: string
    ): Promise<AxiosResponse<ProductType[]>> {
        return instance.get('/products', {
            params: { [FILTER_PARAM]: categories }
        })
    },

    async getProduct(id: string): Promise<AxiosResponse<ProductType>> {
        return instance.get(`/products/${id}`)
    },

    async getRecentlyProducts(): Promise<AxiosResponse<RecentlyProductType[]>> {
        return instance.get('/products/recently')
    },

    async createRecentlyProduct(
        productId: number
    ): Promise<AxiosResponse<RecentlyProductType>> {
        return instance.post('/products/recently', { productId })
    },

    async getMayLikeProducts(): Promise<AxiosResponse<ProductType[]>> {
        return instance.get('/mayLike')
    }
}
