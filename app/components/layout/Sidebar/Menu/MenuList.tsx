import { FC } from 'react'

import Menu from '@/components/layout/Sidebar/Menu/Menu'
import { menus } from '@/components/layout/Sidebar/Menu/menu.data'

import { useAuth } from '@/hooks/useAuth'

const MenuList: FC = () => {
	const { user } = useAuth()
	return (
		<div>
			<Menu items={menus[0].items} />
			<Menu items={menus[1].items} isAdmin={user?.isAdmin} />
		</div>
	)
}

export default MenuList
