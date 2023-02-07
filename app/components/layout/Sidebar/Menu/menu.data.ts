import { BsFillShieldFill } from 'react-icons/bs'
import { FaMusic, FaUserFriends } from 'react-icons/fa'
import { MdGames, MdHome, MdMessage } from 'react-icons/md'
import { TbNews } from 'react-icons/tb'

import {
	IMenu,
	IMenuItem
} from '@/components/layout/Sidebar/Menu/menu.interface'

const mainMenu: IMenu = {
	items: [
		{
			icon: MdHome,
			title: 'Моя страница',
			link: '/profile'
		},
		{
			icon: TbNews,
			title: 'Новости',
			link: '/feed'
		},
		{
			icon: MdMessage,
			title: 'Мессенджер',
			link: '/message'
		},
		{
			icon: FaUserFriends,
			title: 'Подписки',
			link: '/subscribe'
		}
	]
}

const additionalMenu: IMenu = {
	items: [
		{
			icon: MdGames,
			title: 'Игры',
			link: '/games'
		},
		{
			icon: FaMusic,
			title: 'Музыка',
			link: '/music'
		}
	]
}

export const adminItem: IMenuItem = {
	title: 'Админ панель',
	link: '/admin',
	icon: BsFillShieldFill
}

export const menus: IMenu[] = [mainMenu, additionalMenu]
