import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { IMediaResponse } from '@/shared/types/media.interface'

import { UserService } from '@/services/user.service'

import { getKeys } from '@/utils/object/getKeys'

import { UserDto } from '../../../shared/types/user.types'

export const useEdit = () => {
	const [previewImage, setPreviewImage] = useState('')

	const { control, register, setValue, handleSubmit } = useForm<UserDto>({
		mode: 'onChange'
	})

	const { isLoading } = useQuery(
		['get profile'],
		() => UserService.getProfile(),
		{
			select: ({ data }) => data,
			onSuccess: data => {
				getKeys(data).forEach(key => {
					// @ts-ignore
					setValue(key, data[key])
				})
			}
		}
	)

	const { mutateAsync } = useMutation((body: UserDto) =>
		UserService.updateProfile(body)
	)

	const handleUploadAvatar = (value: IMediaResponse) => {
		setValue('avatarPath', value.url)
		setPreviewImage(value.url)
	}

	return {
		control,
		register,
		handleSubmit,
		mutateAsync,
		previewImage,
		handleUploadAvatar
	}
}
