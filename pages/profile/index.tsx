import Profile from '@/components/screens/Profile/Profile'

import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
