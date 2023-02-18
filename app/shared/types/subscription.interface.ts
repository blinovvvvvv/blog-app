import { IBase } from '@/shared/types/base.types'
import { IUser } from '@/shared/types/user.types'

export interface ISubscription extends IBase {
	toUser: Omit<IUser, 'phoneNumber'>
}
