import { createAsyncThunk } from '@reduxjs/toolkit'

import { IAuthFields } from '@/screens/Auth/AuthFields/auth-fields.interface'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, IPhonePassword } from '@/store/user/user.interface'

export const register = createAsyncThunk<IAuthResponse, IPhonePassword>(
	'auth/register',
	async ({ password, phoneNumber, name }, thunkAPI) => {
		try {
			const response = await AuthService.register(password, phoneNumber, name)

			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IAuthFields>(
	'auth/login',
	async ({ password, phoneNumber }, thunkAPI) => {
		try {
			const response = await AuthService.login(phoneNumber, password)

			return response
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () =>
	AuthService.logout()
)

export const getAccessToken = createAsyncThunk<IAuthResponse>(
	'auth/access-token',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewAccessToken()

			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
)
