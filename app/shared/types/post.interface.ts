import { IBase } from '@/shared/types/base.types'
import { IComment } from '@/shared/types/comment.interface'
import { IUser } from '@/shared/types/user.types'

export interface IPost extends IBase {
	text: string
	imagePath?: string
	user: IUser
	comment: IComment[]
}
