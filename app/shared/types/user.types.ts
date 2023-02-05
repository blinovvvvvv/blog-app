import { IBase } from '@/shared/types/base.types'

export interface IUser extends IBase {
	name: string
	surname?: string
	phoneNumber: string
	isAdmin: boolean
	isVerified?: boolean
	avatarPath?: string
	description?: string
	subscribersCount?: number
	// posts?: IPost[]
	// subscriptions: ISubscription[]
	// subscribers: ISubscriber[]
	// likes: ILike[]
}
