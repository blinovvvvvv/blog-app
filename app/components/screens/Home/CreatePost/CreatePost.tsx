import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { useUploadPost } from '@/screens/Home/CreatePost/useUploadPost'

import Button from '@/ui/button/Button'
import UploadField from '@/ui/upload-field/UploadField'

import { useOutside } from '@/hooks/useOutside'

import styles from './CreatePost.module.scss'

const CreatePost: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const {
		control,
		handleSubmit,
		onSubmit,
		handleUploadPost,
		register,
		previewImage
	} = useUploadPost()

	return (
		<div className={styles.wrapper} ref={ref}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type={'text'}
					className={styles.input}
					placeholder={'Удивите маленький мир GARIK-NET...'}
					{...register('text', {
						required: 'Обязательно для заполнения'
					})}
					onFocus={() => setIsShow(!isShow)}
					autoComplete={'none'}
				/>
				{isShow && (
					<div>
						{previewImage && (
							<div className={styles.image}>
								<img src={previewImage} alt={'uploaded image'} />
							</div>
						)}
						<div>
							<Controller
								control={control}
								name='imagePath'
								render={() => (
									<UploadField
										className={styles.upload}
										onChange={handleUploadPost}
										folder='photos'
										title='Добавить фото'
									/>
								)}
							/>
							<Button className={styles.button}>Создать</Button>
						</div>
					</div>
				)}
			</form>
		</div>
	)
}

export default CreatePost
