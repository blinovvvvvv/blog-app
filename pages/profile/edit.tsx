import Edit from '@/components/screens/Edit/Edit'

import { NextPageAuth } from '@/shared/types/auth.types'

const EditPage: NextPageAuth = () => {
	return <Edit />
}

EditPage.isOnlyUser = true

export default EditPage
