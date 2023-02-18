import { Dispatch, SetStateAction } from 'react'
import { useQuery } from 'react-query'

import { IPost } from '@/shared/types/post.interface'

import { PostService } from '@/services/post.service'

export const usePosts = (
	page: number,
	setPosts: Dispatch<SetStateAction<IPost[]>>
) => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['get posts'],
		queryFn: () => PostService.getPosts(page),
		keepPreviousData: true,
		staleTime: Infinity,
		onSuccess: data => {
			setPosts(prevPosts => [...prevPosts, ...data.data])
		},
		enabled: false
	})

	return { data, isLoading, refetch }
}
