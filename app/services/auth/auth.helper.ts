import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const addToStorage = (data: IAuthResponse) => {
	addToCookie(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const addToCookie = (tokens: ITokens) => {
	Cookies.set('accessToken', tokens.accessToken)
	Cookies.set('refreshToken', tokens.refreshToken)
}

export const removeFromCookie = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
