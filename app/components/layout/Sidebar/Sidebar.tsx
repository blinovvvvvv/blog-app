import { FC } from 'react'

import MenuList from '@/components/layout/Sidebar/Menu/MenuList'
import Profile from '@/components/layout/Sidebar/Profile/Profile'

const Sidebar: FC = () => {
	return (
		<div>
			<Profile />
			<MenuList />
		</div>
	)
}

export default Sidebar
