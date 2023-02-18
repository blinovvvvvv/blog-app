import { IBase } from '@/shared/types/base.types'
import { IComment } from '@/shared/types/comment.interface'
import { IUser } from '@/shared/types/user.types'

export interface ILike {
	fromUser: IUser
}

export interface IPostResponse {
	current_page: number
	last_page: number
	data: IPost[]
}

export interface IPost extends IBase {
	text: string
	imagePath?: string
	user: IUser
	comments: IComment[]
	likes: ILike[]
}
