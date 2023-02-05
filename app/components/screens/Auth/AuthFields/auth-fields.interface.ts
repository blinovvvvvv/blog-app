import { IPhonePassword } from '@/store/user/user.interface'

export interface IAuthFields extends Omit<IPhonePassword, 'name'> {}
