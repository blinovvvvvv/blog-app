import Cookies from 'js-cookie'

import { addToStorage, removeFromCookie } from '@/services/auth/auth.helper'

import { IAuthResponse } from '@/store/user/user.interface'

import { getContentType } from '../../api/api.helper'
import { axiosClassic } from '../../api/instance'

const AUTH = 'auth'

export const AuthService = {
	async register(phoneNumber: string, password: string, name: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/${AUTH}/register`,
			{
				phoneNumber,
				password,
				name
			}
		)

		if (response.data.accessToken) addToStorage(response.data)

		return response
	},

	async login(phoneNumber: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(`/${AUTH}/login`, {
			phoneNumber,
			password
		})

		if (response.data.accessToken) addToStorage(response.data)

		return response.data
	},

	async logout() {
		removeFromCookie()
		localStorage.removeItem('user')
	},

	async getNewAccessToken() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiosClassic.post<IAuthResponse>(
			`/${AUTH}/login/access-token`,
			{ refreshToken },
			{
				headers: getContentType
			}
		)

		if (response.data.accessToken) addToStorage(response.data)

		return response
	}
}
