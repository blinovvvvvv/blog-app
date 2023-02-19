import { IBase } from '@/shared/types/base.types'
import { IUser } from '@/shared/types/user.types'

export interface ISubscription extends IBase {
	fromUser: Omit<IUser, 'phoneNumber'>
	toUser: Omit<IUser, 'phoneNumber'>
}
