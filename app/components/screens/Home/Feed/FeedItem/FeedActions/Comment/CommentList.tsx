import { FC } from 'react'

import { IComment } from '@/shared/types/comment.interface'

import styles from './Comment.module.scss'
import CommentItem from './CommentItem/CommentItem'

interface ICommentList {
	comments: IComment[]
}

const CommentList: FC<ICommentList> = ({ comments }) => {
	return (
		<div className={styles.list}>
			{comments.map((item, index) => (
				<CommentItem key={index} item={item} />
			))}
		</div>
	)
}

export default CommentList
