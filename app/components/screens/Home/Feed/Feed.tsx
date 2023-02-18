import { FC, useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'

import { usePosts } from '@/screens/Home/Feed/usePosts'

import Loader from '@/ui/loader/loader'

import { IPost } from '@/shared/types/post.interface'

import styles from './Feed.module.scss'
import FeedItem from './FeedItem/FeedItem'

const Feed: FC = () => {
	const [page, setPage] = useState(1)
	const [posts, setPosts] = useState<IPost[]>([])

	const { isLoading, refetch } = usePosts(page, setPosts)

	useEffect(() => {
		refetch()
	}, [])

	return (
		<div className={styles.feed}>
			{isLoading ? (
				<Loader count={1} />
			) : (
				posts.map(item => <FeedItem key={item.id} id={item.id} />)
			)}
			<InView
				onChange={inView => {
					if (inView) {
						setPage(prevPage => prevPage + 1)
						refetch()
					}
				}}
			></InView>
		</div>
	)
}

export default Feed
