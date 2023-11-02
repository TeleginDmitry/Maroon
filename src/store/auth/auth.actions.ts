import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from 'services/auth.service'
import {
    LoginRequestType,
    LoginResponseType,
    RegisterRequestType,
    RegisterResponseType,
    VerifyResponseType
} from 'shared/types/auth.type'
import { removeToken, saveToken } from 'utils/token/token'

export const login = createAsyncThunk<LoginResponseType, LoginRequestType>(
    'auth/login',
    async ({ password, email }, { rejectWithValue }) => {
        try {
            const response = await authService.login({
                password,
                email
            })

            if (response.data) {
                const token = response.data.access_token
                saveToken(token)
            }

            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const register = createAsyncThunk<
    RegisterResponseType,
    RegisterRequestType
>('auth/register', async (data, { rejectWithValue }) => {
    try {
        const response = await authService.register(data)

        if (response.data) {
            const token = response.data.access_token
            saveToken(token)
        }

        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const verify = createAsyncThunk<VerifyResponseType, void>(
    'auth/verify',
    async (_, { rejectWithValue }) => {
        try {
            const response = await authService.verify()

            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk<void, void>(
    'auth/logout',
    async function (_, { rejectWithValue }) {
        try {
            const response = await authService.logout()

            if (response.data) {
                removeToken()
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
