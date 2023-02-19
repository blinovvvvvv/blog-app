import InWork from '@/components/screens/InWork/InWork'

import { NextPageAuth } from '@/shared/types/auth.types'

const MessagePage: NextPageAuth = () => {
	return <InWork />
}

MessagePage.isOnlyUser = true

export default MessagePage
