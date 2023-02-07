import { IUser } from '@/shared/types/user.types'

export interface IUserState {
	phoneNumber: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
	isAdmin: boolean
}

export interface IPhonePassword {
	phoneNumber: string
	password: string
	name: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}
