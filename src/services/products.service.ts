import { instance } from 'api/api.interceptor'
import { AxiosResponse } from 'axios'
import { FILTER_PARAM } from 'configs/filter.config'
import {
    BasketProductType,
    ProductType,
    RecentlyProductType,
    PatchRequestDataType
} from 'shared/types/product.type'

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

    async getBasketProducts(): Promise<AxiosResponse<BasketProductType[]>> {
        return instance.get('/products/basket')
    },

    async createBasketProduct(
        productId: number,
        selectedVolumes: number[]
    ): Promise<AxiosResponse<BasketProductType>> {
        return instance.post('/products/basket', {
            productId,
            volumes: selectedVolumes
        })
    },

    async deleteBasketProduct(
        id: number
    ): Promise<AxiosResponse<BasketProductType>> {
        return instance.delete(`/products/basket/${id}`)
    },

    async patchBasketProduct(
        id: number,
        data: PatchRequestDataType
    ): Promise<AxiosResponse<BasketProductType>> {
        return instance.patch(`/products/basket/${id}`, data)
    },

    async getMayLikeProducts(): Promise<AxiosResponse<ProductType[]>> {
        return instance.get('/mayLike')
    }
}
