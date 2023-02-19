import InWork from '@/components/screens/InWork/InWork'

import { NextPageAuth } from '@/shared/types/auth.types'

const GamesPage: NextPageAuth = () => {
	return <InWork />
}

GamesPage.isOnlyUser = true

export default GamesPage
