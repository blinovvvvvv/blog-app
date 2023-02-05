import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { IComponentAuthField } from '@/shared/types/auth.types'

const CheckRole: FC<PropsWithChildren<IComponentAuthField>> = ({
	Component: { isOnlyUser, isOnlyAdmin },
	children
}) => {
	const { user } = useAuth()

	const router = useRouter()

	const Children = () => <>{children}</>

	if (user?.isAdmin) return <Children />

	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	const isUser = user && !user.isAdmin

	if (isUser && isOnlyUser) return <Children />
	else {
		router.pathname !== '/404' && router.replace('/')
		return null
	}
}

export default CheckRole
