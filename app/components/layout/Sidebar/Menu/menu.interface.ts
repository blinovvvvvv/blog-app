import { IconType } from 'react-icons'

export interface IMenuItem {
	icon: IconType
	title: string
	link: string
}

export interface IMenu {
	items: IMenuItem[]
	isAdmin?: boolean
}
