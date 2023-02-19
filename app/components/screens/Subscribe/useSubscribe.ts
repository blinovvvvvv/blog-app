import { useMutation, useQuery } from 'react-query'

import { UserService } from '@/services/user.service'

export const useSubscribe = () => {
	const { data, isLoading } = useQuery(
		['get users'],
		() => UserService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const { mutateAsync } = useMutation((id: number) => UserService.subscribe(id))

	return { data, isLoading, mutateAsync }
}
