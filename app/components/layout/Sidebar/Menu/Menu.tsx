import { FC } from 'react'

import MenuItem from '@/components/layout/Sidebar/Menu/MenuItem/MenuItem'
import { adminItem } from '@/components/layout/Sidebar/Menu/menu.data'
import { IMenu } from '@/components/layout/Sidebar/Menu/menu.interface'

import styles from './Menu.module.scss'

const Menu: FC<IMenu> = ({ items, isAdmin }) => {
	return (
		<ul className={styles.menu}>
			{items.map(item => (
				<MenuItem item={item} key={item.link} />
			))}
			{isAdmin && <MenuItem item={adminItem} />}
		</ul>
	)
}

export default Menu
