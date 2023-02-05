import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { IComponentAuthField } from '@/shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<IComponentAuthField>> = ({
	Component: { isOnlyAdmin, isOnlyUser },
	children
}) => {
	const { user } = useAuth()
	const { getAccessToken, logout } = useActions()
	const { pathname } = useRouter()
	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken) getAccessToken()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname])

	return !isOnlyUser && !isOnlyAdmin ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
