import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthFields } from '@/screens/Auth/AuthFields/auth-fields.interface'

import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'

import { useActions } from '@/hooks/useActions'

import { validPhone } from '@/utils/phone-valid/phone.validate'

import styles from './AuthFields.module.scss'

const AuthFields: FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const { login } = useActions()
	const { replace } = useRouter()

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		login(data)
		replace('/feed')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				placeholder={'Номер телефона'}
				{...register('phoneNumber', {
					required: 'Укажите номер телефона',
					pattern: {
						value: validPhone,
						message: 'Невалидный номер телефона'
					}
				})}
				error={errors.phoneNumber}
			/>
			<Field
				placeholder={'Пароль'}
				{...register('password', {
					required: 'Пароль',
					minLength: {
						value: 8,
						message: 'Минимальная длина пароля - 8 символов'
					}
				})}
				error={errors.password}
			/>
			<Button className={styles.button}>Войти</Button>
		</form>
	)
}

export default AuthFields
