import { IUser } from '@/shared/types/user.types'

import { axiosClassic } from '../api/instance'

const USER = 'user'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IUser[]>(`/${USER}/`, {
			params: searchTerm ? { searchTerm } : {}
		})
	}
}
