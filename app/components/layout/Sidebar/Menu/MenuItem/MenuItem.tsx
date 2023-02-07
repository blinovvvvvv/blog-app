import Link from 'next/link'
import { FC } from 'react'

import { IMenuItem } from '@/components/layout/Sidebar/Menu/menu.interface'

import styles from './MenuItem.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<item.icon size={20} />
			<Link href={item.link}>{item.title}</Link>
		</div>
	)
}

export default MenuItem
