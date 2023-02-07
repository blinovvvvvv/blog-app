import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocalStorage } from '@/utils/local-storage/local-storage'

import {
	getAccessToken,
	login,
	logout,
	register
} from '@/store/user/user.actions'
import { IInitialState } from '@/store/user/user.interface'

const userInitialState: IInitialState = {
	user: getStoreLocalStorage('user'),
	isLoading: false,
	isAdmin: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState: userInitialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
				state.isAdmin = false
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.isAdmin = payload.user.isAdmin
			})
			.addCase(login.pending, state => {
				state.isLoading = true
				state.user = null
				state.isAdmin = false
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
				state.isAdmin = false
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.isAdmin = payload.user.isAdmin
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
				state.isAdmin = false
			})
			.addCase(getAccessToken.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.isAdmin = payload.user.isAdmin
			})
	}
})

const { reducer: userReducer } = userSlice

export default userReducer
