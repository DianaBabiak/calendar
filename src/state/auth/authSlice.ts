import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {loginUserOnBackend } from '@/api/authApi.ts';
import {User} from "@/types/auth.ts";

export const loginUser = createAsyncThunk('auth/loginUser', async (data: { email: string; password: string }) => {
    return await loginUserOnBackend(data)
})

interface AuthState {
    user: User | null
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null
            state.isAuthenticated = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.isAuthenticated = true
                state.user = action.payload
            })
    },
})

export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer
