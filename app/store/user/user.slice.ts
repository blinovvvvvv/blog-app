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
	isLoading: false
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
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.pending, state => {
				state.isLoading = true
				state.user = null
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(getAccessToken.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
	}
})

const { reducer: userReducer } = userSlice

export default userReducer
