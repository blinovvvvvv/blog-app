import { useQuery } from 'react-query'

import { PostService } from '@/services/post.service'

export const useItem = (id: number) => {
	const { data, isLoading, refetch, isSuccess } = useQuery([`post ${id}`], () =>
		PostService.getById(id)
	)

	return { data, isLoading, refetch, isSuccess }
}
