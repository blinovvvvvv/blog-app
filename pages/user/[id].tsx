import { useRouter } from 'next/router'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserPage: NextPageAuth = () => {
	const router = useRouter()

	const { id } = router.query

	return <div>{id}</div>
}

UserPage.isOnlyUser = true

export default UserPage
