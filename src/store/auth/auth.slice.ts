import { createSlice, AnyAction, PayloadAction } from '@reduxjs/toolkit'
import { register, logout, verify, login } from './auth.actions'
import { UserType } from 'shared/types/user.type'

type IInitialState = {
    user: UserType | null
    isLoading: boolean
    isError: boolean
    isAuth: boolean
}

const initialState: IInitialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    user: null
}

const AuthSlice = createSlice({
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.user = payload.user
            state.isError = false
            state.isAuth = true
        })
        builder.addCase(register.rejected, (state, { payload }) => {
            state.isLoading = false
            state.user = null
            state.isError = true
            state.isAuth = false
        })
        builder.addCase(verify.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.user = payload.user
            state.isAuth = true
            state.isError = false
        })
        builder.addCase(verify.rejected, (state, { payload }) => {
            state.isLoading = false
            state.isError = true
            state.user = null
            state.isAuth = false
        })

        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.user = payload.user
            state.isError = false
            state.isAuth = true
        })
        builder.addCase(login.rejected, (state, { payload }) => {
            state.isLoading = false
            state.user = null
            state.isError = true
            state.isAuth = false
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.isLoading = false
            state.user = null
            state.isError = false
            state.isAuth = false
        })

        builder.addMatcher(isLoadingAction, (state) => {
            state.isLoading = true
        })
    },
    reducers: {
        patchUser(state, action: PayloadAction<UserType>) {
            state.user = action.payload
        }
    },
    initialState,

    name: 'auth'
})

function isLoadingAction(action: AnyAction) {
    return action.type.endsWith('pending')
}

export const { patchUser } = AuthSlice.actions
// eslint-disable-next-line import/no-default-export
export default AuthSlice.reducer
