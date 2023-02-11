import { IPost } from '@/shared/types/post.interface'

export interface ICreatePost extends Omit<IPost, 'user' | 'comment'> {}
