import { IComment } from '@/shared/types/comment.interface'

import { instance } from '../api/instance'

const COMMENT = 'comment'

export const CommentService = {
	async createComment(postId: number, text: string) {
		return instance.post<IComment>(`/${COMMENT}/create`, { postId, text })
	},

	async deleteComment(commentId: number) {
		return instance.delete(`/${COMMENT}/delete/${commentId}`)
	}
}
