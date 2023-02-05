import Home from '@/screens/Home/Home'

import { NextPageAuth } from '@/shared/types/auth.types'

const FeedPage: NextPageAuth = () => {
	return <Home />
}

FeedPage.isOnlyUser = true

export default FeedPage
