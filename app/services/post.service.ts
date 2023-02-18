import { IPost, IPostResponse } from '@/shared/types/post.interface'

import { instance } from '../api/instance'

const POST = 'post'

export const PostService = {
	async getPosts(page: number) {
		const data = await instance.get<IPostResponse>(`/${POST}`, {
			params: { page }
		})
		return data.data
	},

	async getById(id: number) {
		const data = await instance.get<IPost>(`/${POST}/${id}`)

		return data.data
	},

	async createPost(text: string, imagePath?: string) {
		return instance.post<IPost>(`/${POST}/create`, { text, imagePath })
	},

	async deletePost(id: string) {
		return instance.delete(`/${POST}/delete/${id}`)
	},

	async likePost(postId: number) {
		return instance.post(`/${POST}/like/${postId}`)
	}
}
