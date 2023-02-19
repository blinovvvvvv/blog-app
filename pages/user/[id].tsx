import { useRouter } from 'next/router'

import UserProfile from '@/components/screens/UserProfile/UserProfile'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserPage: NextPageAuth = () => {
	const router = useRouter()

	const { id } = router.query

	return id ? <UserProfile id={+id} /> : <div>Пользователь не найден</div>
}

UserPage.isOnlyUser = true

export default UserPage
