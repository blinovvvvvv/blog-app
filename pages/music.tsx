import InWork from '@/components/screens/InWork/InWork'

import { NextPageAuth } from '@/shared/types/auth.types'

const MusicPage: NextPageAuth = () => {
	return <InWork />
}

MusicPage.isOnlyUser = true

export default MusicPage
