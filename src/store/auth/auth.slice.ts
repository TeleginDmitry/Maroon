import { createSlice, AnyAction, PayloadAction } from '@reduxjs/toolkit'
import { register, logout, verify, login } from './auth.actions'
import { UserType } from 'shared/types/user.type'

type IInitialState = {
    user: UserType | null
    isLoading: boolean
    isError: boolean
    isAuth: boolean
    isVerified: boolean
}

const initialState: IInitialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    isVerified: false,
    user: null
}

const AuthSlice = createSlice({
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, { payload }) => {
            state.user = payload.user
            state.isAuth = true
        })
        builder.addCase(register.rejected, (state, { payload }) => {
            state.user = null
            state.isAuth = false
        })
        builder.addCase(verify.fulfilled, (state, { payload }) => {
            state.isVerified = true
            state.user = payload
            state.isAuth = true
        })
        builder.addCase(verify.rejected, (state, { payload }) => {
            state.isVerified = true
            state.user = null
            state.isAuth = false
        })

        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.user = payload.user
            state.isAuth = true
        })
        builder.addCase(login.rejected, (state, { payload }) => {
            state.user = null
            state.isAuth = false
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.user = null
            state.isAuth = false
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
    reducers: {
        patchUser(state, action: PayloadAction<UserType>) {
            state.user = action.payload
        }
    },
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

export const { patchUser } = AuthSlice.actions
// eslint-disable-next-line import/no-default-export
export default AuthSlice.reducer
