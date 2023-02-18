import Image from 'next/image'
import { FC } from 'react'

import FeedInfo from '@/components/screens/Home/Feed/FeedItem/FeedInfo/FeedInfo'

import styles from '../Feed.module.scss'

import FeedReactions from './FeedActions/FeedReactions'
import { useItem } from './useItem'

interface IFeedItem {
	id: number
}

const FeedItem: FC<IFeedItem> = ({ id }) => {
	const { data: post, refetch } = useItem(id)

	return (
		<div className={styles.item}>
			{post && (
				<>
					<FeedInfo user={post.user} createdAt={post.createdAt} />
					<div className={styles.text}>{post.text}</div>
					{post.imagePath && (
						<div className={styles.image}>
							<Image
								width={400}
								height={500}
								src={post.imagePath}
								alt='post image'
							/>
						</div>
					)}
					<FeedReactions
						likes={post.likes}
						id={post.id}
						comments={post.comments}
						refetch={refetch}
					/>
				</>
			)}
		</div>
	)
}

export default FeedItem
