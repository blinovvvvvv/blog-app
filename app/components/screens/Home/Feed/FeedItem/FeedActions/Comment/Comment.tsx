import { FC } from 'react'
import { IoSend } from 'react-icons/io5'

import Button from '@/ui/button/Button'

import styles from './Comment.module.scss'
import { useComment } from './useComment'

interface ICommentForm {
	id: number
	refetch: () => void
}

const Comment: FC<ICommentForm> = ({ id, refetch }) => {
	const { handleSubmit, register, onSubmit } = useComment(id, refetch)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.input}>
			<input
				{...register('message', {
					minLength: 1,
					maxLength: 40
				})}
				maxLength={40}
				placeholder={'Оставьте свой комментарий...'}
				type={'text'}
			/>
			<Button>
				<IoSend size={18} color={'#ADADAD'} />
			</Button>
		</form>
	)
}

export default Comment
