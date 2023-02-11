import { ChangeEvent } from 'react'
import { useMutation } from 'react-query'

import { MediaService } from '@/services/media.service'

export const useUpload = (
	onChange: (...event: any) => void,
	folder?: string
) => {
	const { mutateAsync } = useMutation(
		(data: FormData) => MediaService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			}
		}
	)

	const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files?.length) return

		const formData = new FormData()
		formData.append('image', files[0])

		await mutateAsync(formData)
	}

	return {
		uploadImage
	}
}
