import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { ICreatePost } from '@/screens/Home/CreatePost/create-post.interface'

import { IMediaResponse } from '@/shared/types/media.interface'

import { PostService } from '@/services/post.service'

export const useUploadPost = () => {
	const { register, control, handleSubmit, setValue, reset } =
		useForm<ICreatePost>({
			mode: 'onChange'
		})

	const queryClient = useQueryClient()

	const [previewImage, setPreviewImage] = useState('')

	const { mutateAsync } = useMutation((data: ICreatePost) =>
		PostService.createPost(data.text, data.imagePath)
	)

	const onSubmit: SubmitHandler<ICreatePost> = async data => {
		await mutateAsync(data)
		await queryClient.invalidateQueries()
		reset()
		setPreviewImage('')
	}

	const handleUploadPost = (value: IMediaResponse) => {
		setValue('imagePath', value.url)
		setPreviewImage(value.url)
	}

	return {
		register,
		control,
		onSubmit,
		handleUploadPost,
		handleSubmit,
		previewImage
	}
}
