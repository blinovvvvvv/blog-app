import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button/Button'
import UploadField from '@/components/ui/upload-field/UploadField'

import { UserDto } from '@/shared/types/user.types'

import Meta from '@/utils/meta/Meta'

import Header from '../Home/Header/Header'

import styles from './Edit.module.scss'
import { useEdit } from './useEdit'

const Edit: FC = () => {
	const {
		control,
		handleSubmit,
		mutateAsync,
		register,
		handleUploadAvatar,
		previewImage
	} = useEdit()
	const { push } = useRouter()

	const onSubmit: SubmitHandler<UserDto> = async body => {
		await mutateAsync(body)
		push('/profile')
	}

	return (
		<Meta title='Редактирование профиля'>
			<Header />
			<Layout>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.edit}>
					<input
						placeholder='Имя'
						className={styles.field}
						{...register('name', {})}
					/>
					<input
						placeholder='Фамилия'
						className={styles.field}
						{...register('surname', {})}
					/>
					<input
						placeholder='Номер телефона'
						className={styles.field}
						{...register('phoneNumber', {})}
					/>
					<input
						placeholder='Пароль'
						className={styles.field}
						{...register('password', {
							minLength: 8
						})}
					/>
					<input
						placeholder='Описание (необязательно)'
						className={styles.field}
						{...register('description', {})}
					/>
					<Controller
						control={control}
						name='avatarPath'
						render={() => (
							<UploadField
								className={styles.upload}
								onChange={handleUploadAvatar}
								folder='avatars'
								title='Добавить аватар'
							/>
						)}
					/>
					{previewImage && (
						<div className={styles.image}>
							<Image
								src={previewImage}
								width={150}
								height={150}
								alt={'uploaded image'}
							/>
						</div>
					)}
					<Button>Сохранить</Button>
				</form>
			</Layout>
		</Meta>
	)
}

export default Edit
