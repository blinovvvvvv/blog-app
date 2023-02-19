import Subscribe from '@/components/screens/Subscribe/Subscribe'

import { NextPageAuth } from '@/shared/types/auth.types'

const SubscribePage: NextPageAuth = () => {
	return <Subscribe />
}
SubscribePage.isOnlyUser = true

export default SubscribePage
