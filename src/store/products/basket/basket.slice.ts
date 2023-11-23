import { createSlice, AnyAction } from '@reduxjs/toolkit'
import { BasketProductType } from 'shared/types/product.type'
import {
    changeBasketProducts,
    createBasketProduct,
    deleteBasketProduct,
    getBasketProducts
} from './basket.actions'

type IInitialState = {
    products: BasketProductType[]
    isLoading: boolean
    isError: boolean
}

const initialState: IInitialState = {
    products: [],
    isLoading: false,
    isError: false
}

const BasketSlice = createSlice({
    extraReducers: (builder) => {
        builder.addCase(getBasketProducts.fulfilled, (state, { payload }) => {
            state.products = payload
        })

        builder.addCase(
            changeBasketProducts.fulfilled,
            (state, { payload }) => {
                state.products = state.products.map((product) => {
                    const newProduct = payload.find(
                        ({ id }) => id === product.id
                    )
                    if (newProduct) {
                        return { ...product, ...newProduct }
                    }

                    return product
                })
            }
        )

        builder.addCase(deleteBasketProduct.fulfilled, (state, { payload }) => {
            state.products = state.products.filter(({ id }) => id !== payload)
        })

        builder.addCase(createBasketProduct.fulfilled, (state, { payload }) => {
            state.products = state.products.concat(payload)
        })

        builder.addMatcher(PendingAction, (state) => {
            state.isLoading = true
        })

        builder.addMatcher(FulfilledAction, (state) => {
            state.isLoading = false
            state.isError = false
        })

        builder.addMatcher(RejectedAction, (state) => {
            state.isLoading = false
            state.isError = true
        })
    },
    reducers: {},
    initialState,

    name: 'auth'
})

function PendingAction(action: AnyAction) {
    return action.type.endsWith('pending')
}

function FulfilledAction(action: AnyAction) {
    return action.type.endsWith('fulfilled')
}

function RejectedAction(action: AnyAction) {
    return action.type.endsWith('rejected')
}

// eslint-disable-next-line import/no-default-export
export default BasketSlice.reducer
