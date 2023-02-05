import { ChangeEvent, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { UserService } from '@/services/user.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounced = useDebounce(searchTerm, 500)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { data, isSuccess } = useQuery(
		['search posts', debounced],
		() => UserService.getAll(debounced),
		{
			select: ({ data }) => data,
			enabled: !!debounced
		}
	)

	return useMemo(
		() => ({
			searchTerm,
			data,
			isSuccess,
			handleSearch
		}),
		[data, isSuccess, searchTerm]
	)
}
