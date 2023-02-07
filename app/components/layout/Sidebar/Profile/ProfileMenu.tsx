import Link from 'next/link'
import { FC } from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdLogout } from 'react-icons/md'

import stylesMenu from '@/components/layout/Sidebar/Menu/Menu.module.scss'
import styles from '@/components/layout/Sidebar/Menu/MenuItem/MenuItem.module.scss'

import { useActions } from '@/hooks/useActions'

import { logout } from '@/store/user/user.actions'

const ProfileMenu: FC = () => {
	const { logout } = useActions()
	return (
		<ul className={stylesMenu.menu}>
			<div className={styles.item}>
				<BiEdit size={20} />
				<Link href={'/profile/edit'}>Отредактировать профиль</Link>
			</div>
			<div className={styles.item} onClick={logout}>
				<MdLogout size={20} />
				<Link href={'/'}>Выйти</Link>
			</div>
		</ul>
	)
}

export default ProfileMenu
