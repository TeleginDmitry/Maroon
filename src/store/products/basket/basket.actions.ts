import { createAsyncThunk } from '@reduxjs/toolkit'
import { productsService } from 'services/products.service'
import {
    BasketProductType,
    CreateRequestBasketType,
    PatchRequestDataType
} from 'shared/types/product.type'

export const getBasketProducts = createAsyncThunk<BasketProductType[], void>(
    'basket/getBasketProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await productsService.getBasketProducts()

            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const changeBasketProducts = createAsyncThunk<
    PatchRequestDataType[],
    PatchRequestDataType[]
>('basket/changeBasketProducts', async (data, { rejectWithValue }) => {
    try {
        await productsService.patchBasketProducts(data)

        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteBasketProduct = createAsyncThunk<number, { id: number }>(
    'basket/deleteBasketProduct',
    async ({ id }, { rejectWithValue }) => {
        try {
            await productsService.deleteBasketProduct(id)

            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const createBasketProduct = createAsyncThunk<
    BasketProductType,
    CreateRequestBasketType
>('basket/createBasketProduct', async (data, { rejectWithValue }) => {
    try {
        const response = await productsService.createBasketProduct(data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})
