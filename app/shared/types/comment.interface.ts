import { IUser } from '@/shared/types/user.types'

export interface IComment {
	postId: number
	message: string
	user: IUser
}
