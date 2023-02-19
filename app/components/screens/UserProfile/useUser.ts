import { useQuery } from 'react-query'

import { UserService } from '@/services/user.service'

export const useUser = (id: number) => {
	const { data, isLoading } = useQuery(
		['get users profile'],
		() => UserService.getById(id),
		{
			select: ({ data }) => data
		}
	)

	return { data, isLoading }
}
