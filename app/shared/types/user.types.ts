import { IBase } from '@/shared/types/base.types'
import { IPost } from '@/shared/types/post.interface'

export interface IUser extends IBase {
	name: string
	surname?: string
	phoneNumber: string
	isAdmin: boolean
	isVerified?: boolean
	avatarPath?: string
	description?: string
	subscribersCount?: number
	posts?: IPost[]
	subscriptions: IUser[]
	subscribers: IUser[]
	likes: IPost[]
}

export interface UserDto {
	name: string
	surname?: string
	phoneNumber: string
	password: string
	avatarPath?: string
	description?: string
}
