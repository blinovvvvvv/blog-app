import { IPost } from '@/shared/types/post.interface'

import { instance } from '../api/instance'

const POST = 'post'

export const PostService = {
	async getPosts(cursor?: string) {
		return instance.get<IPost[]>(`/${POST}`, {
			params: cursor ? { cursor } : {}
		})
	},

	async createPost(text: string, imagePath?: string) {
		return instance.post<IPost>(`/${POST}/create`, { text, imagePath })
	},

	async deletePost(id: string) {
		return instance.delete(`/${POST}/delete/${id}`)
	},

	async likePost(postId: string) {
		return instance.post(`/${POST}/like/${postId}`)
	}
}
