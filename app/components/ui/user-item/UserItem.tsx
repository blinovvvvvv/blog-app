import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IUser } from '@/shared/types/user.types'

import avatarTemplate from '@/assets/images/avatar-template.png'
import verifiedIcon from '@/assets/images/verified.svg'

import styles from './UserItem.module.scss'

interface IUserItem {
	user: IUser
}

const UserItem: FC<IUserItem> = ({ user }) => {
	return (
		<div className={styles.user}>
			<Link href={`/user/${user.id}`}>
				<Image
					src={user.avatarPath || avatarTemplate}
					alt='user avatar'
					width={30}
					height={30}
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
		</div>
	)
}

export default UserItem
