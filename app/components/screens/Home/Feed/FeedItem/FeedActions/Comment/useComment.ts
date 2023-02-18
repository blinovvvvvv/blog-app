import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { IComment } from '@/shared/types/comment.interface'

import { CommentService } from '@/services/comment.service'

export const useComment = (id: number, refetch: () => void) => {
	const { register, reset, handleSubmit } = useForm<IComment>({
		mode: 'onChange'
	})

	const { mutateAsync } = useMutation((text: string) =>
		CommentService.createComment(id, text)
	)

	const onSubmit: SubmitHandler<IComment> = async ({ message }) => {
		await mutateAsync(message)
		refetch()
		reset()
	}

	return { register, handleSubmit, onSubmit }
}
