import { FC } from 'react'

import MenuList from '@/components/layout/Sidebar/Menu/MenuList'
import SidebarProfile from '@/components/layout/Sidebar/SidebarProfile/SidebarProfile'

const Sidebar: FC = () => {
	return (
		<div>
			<SidebarProfile />
			<MenuList />
		</div>
	)
}

export default Sidebar
