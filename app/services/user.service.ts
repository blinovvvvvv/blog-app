import { IUser, UserDto } from '@/shared/types/user.types'

import { instance } from '../api/instance'

const USER = 'user'

export const UserService = {
	async getAll(searchTerm?: string) {
		return instance.get<IUser[]>(`/${USER}/`, {
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async getProfile() {
		return instance.get<IUser>(`/${USER}/profile`)
	},

	async getById(id: string) {
		return instance.get<IUser>(`/${USER}/${id}`)
	},

	async updateProfile(dto: UserDto) {
		return instance.put(`/${USER}/profile`, dto)
	},

	async updateUserProfile(id: string, dto: UserDto) {
		return instance.put(`/${USER}/${id}`, dto)
	},

	async subscribe(userId: number) {
		return instance.patch(`/${USER}/subscribe/${userId}`)
	}
}
