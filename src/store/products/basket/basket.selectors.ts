import { RootState } from 'store'

export const BasketErrorSelector = (state: RootState) => state.basket.isError
export const BasketLoadingSelector = (state: RootState) =>
    state.basket.isLoading
export const BasketProductsSelector = (state: RootState) =>
    state.basket.products
export const BasketSelector = (state: RootState) => state.basket
