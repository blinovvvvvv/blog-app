import cn from 'clsx'
import { FC, useEffect, useState } from 'react'
import { FaRegCommentAlt } from 'react-icons/fa'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import { useMutation } from 'react-query'

import Button from '@/ui/button/Button'
import Loader from '@/ui/loader/loader'

import { IComment } from '@/shared/types/comment.interface'
import { ILike } from '@/shared/types/post.interface'

import { PostService } from '@/services/post.service'

import Comment from './Comment/Comment'
import CommentList from './Comment/CommentList'
import styles from './FeedReactions.module.scss'
import { useReactions } from './useReactions'

interface IFeedReactions {
	id: number
	comments: IComment[]
	likes: ILike[]
	refetch: () => void
}

const FeedReactions: FC<IFeedReactions> = ({
	id,
	comments,
	likes,
	refetch
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [liked, setLiked] = useState(false)

	const { likes: userLikes, isLoading } = useReactions()

	useEffect(() => {
		if (!userLikes) return

		const isLiked = userLikes.some(
			(item: { toPost: { id: number } }) => item.toPost.id === id
		)

		if (liked !== isLiked) setLiked(isLiked)
	}, [])

	const { mutateAsync } = useMutation(
		(id: number) => PostService.likePost(id),
		{
			onSuccess: () => {
				refetch()
				setLiked(!liked)
			}
		}
	)

	return (
		<div className={styles.reaction}>
			{isLoading ? (
				<Loader count={1} />
			) : (
				<div className={styles.row}>
					<Button className={styles.like} onClick={() => mutateAsync(id)}>
						{!liked ? (
							<HiOutlineHeart size={22} color={'gray'} />
						) : (
							<HiHeart size={22} color={'#EC3C3C'} />
						)}
						<span
							className={cn({
								[styles.liked]: liked
							})}
						>
							{likes?.length}
						</span>
					</Button>
					<Button onClick={() => setIsOpen(!isOpen)}>
						<FaRegCommentAlt size={17} color={'gray'} />
						{comments?.length}
					</Button>
				</div>
			)}
			{isOpen && <CommentList comments={comments} />}
			<Comment id={id} refetch={refetch} />
		</div>
	)
}

export default FeedReactions
