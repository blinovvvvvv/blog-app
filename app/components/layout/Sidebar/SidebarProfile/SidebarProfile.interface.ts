import { IMenuItem } from '@/components/layout/Sidebar/Menu/menu.interface'

export interface IProfileMenu {
	items: IProfileMenuItems[]
}

export interface IProfileMenuItems extends IMenuItem {
	onClick?: () => void
}
