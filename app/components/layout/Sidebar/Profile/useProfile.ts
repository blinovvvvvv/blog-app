import { useQuery } from 'react-query'

import { UserService } from '@/services/user.service'

export const useProfile = () => {
	const {
		data: profile,
		isLoading,
		refetch
	} = useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data
	})

	return { profile, isLoading, refetch }
}
