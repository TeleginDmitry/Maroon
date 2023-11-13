import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './auth/auth.slice'
import basketSlice from './products/basket/basket.slice'

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        basket: basketSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
