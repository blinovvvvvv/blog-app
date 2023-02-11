import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { ICreatePost } from '@/screens/Home/CreatePost/create-post.interface'

import { IMediaResponse } from '@/shared/types/media.interface'

import { PostService } from '@/services/post.service'

export const useUploadPost = () => {
	const { register, control, handleSubmit, setValue, reset } =
		useForm<ICreatePost>({
			mode: 'onChange'
		})

	const [previewImage, setPreviewImage] = useState('')

	const { mutate } = useMutation(
		(data: ICreatePost) => PostService.createPost(data.text, data.imagePath)
		//TODO: invalidate query feed
	)

	const onSubmit: SubmitHandler<ICreatePost> = data => {
		mutate(data)
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
