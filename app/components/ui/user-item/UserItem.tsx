import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import { useProfile } from '@/components/layout/Sidebar/SidebarProfile/useProfile'

import { IUser } from '@/shared/types/user.types'

import avatarTemplate from '@/assets/images/avatar-template.png'
import verifiedIcon from '@/assets/images/verified.svg'

import Button from '../button/Button'

import styles from './UserItem.module.scss'

interface IUserItem {
	user: IUser
	isSmall: boolean
	onClick?: () => void
}

const UserItem: FC<IUserItem> = ({ user, isSmall, onClick }) => {
	const [subscribed, setIsSubscribed] = useState(false)

	const { profile } = useProfile()

	const subscriptions = profile?.subscriptions
	useEffect(() => {
		if (!subscriptions) return

		const isSubscribed = subscriptions.some(item => item.toUser.id === user.id)

		if (subscribed !== isSubscribed) setIsSubscribed(isSubscribed)
	}, [profile])

	return (
		<div
			className={cn(styles.user, {
				[styles.big]: !isSmall
			})}
		>
			<Link href={`/user/${user.id}`}>
				<Image
					src={user.avatarPath || avatarTemplate}
					alt='user avatar'
					width={isSmall ? 30 : 45}
					height={isSmall ? 30 : 45}
				/>
				<span>
					<span>
						{user.name} {user.surname}
					</span>
					<span>
						{user.isVerified && (
							<Image
								src={verifiedIcon}
								alt='verified icon'
								width={12}
								height={12}
							/>
						)}
					</span>
				</span>
			</Link>
			{!isSmall && (
				<Button
					onClick={onClick}
					className={cn(styles.button, {
						[styles.sub]: subscribed
					})}
				>
					{!subscribed ? 'Подписаться' : 'Отписаться'}
				</Button>
			)}
		</div>
	)
}

export default UserItem
