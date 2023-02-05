import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import AuthFields from '@/screens/Auth/AuthFields/AuthFields'
import Logo from '@/screens/Home/Header/Logo'

import Button from '@/ui/button/Button'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	const { user } = useAuth()

	const { replace } = useRouter()
	useEffect(() => {
		if (user) replace('/feed')
	}, [])

	return (
		<Meta title={'Регистрация'}>
			<div className={styles.page}>
				<div className={styles.login}>
					<div className={styles.desc}>
						<Logo />
						<h1 className={styles.title}>Вход GARIK-NET</h1>
					</div>
					<AuthFields />
				</div>
				<div className={styles.register}>
					<div>Нет аккаунта? Жми кнопку ниже</div>
					<Button
						onClick={() => replace('/register')}
						className={styles.button}
					>
						Зарегистрироваться
					</Button>
				</div>
			</div>
		</Meta>
	)
}

export default Auth
