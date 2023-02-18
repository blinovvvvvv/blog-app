import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IUser } from '@/shared/types/user.types'

import avatarTemplate from '@/assets/images/avatar-template.png'
import verifiedIcon from '@/assets/images/verified.svg'

import styles from './CommentItem.module.scss'

interface ICommentItem {
	message: string
	user: IUser
}

const CommentItem: FC<{ item: ICommentItem }> = ({ item }) => {
	return (
		<div className={styles.comment}>
			<div className={styles.avatar}>
				<Image
					src={item.user.avatarPath || avatarTemplate}
					alt={'user avatar'}
					width={35}
					height={35}
					draggable={'false'}
				/>
			</div>
			<div className={styles.body}>
				<div className={styles.info}>
					<Link href={`/user/${item.user.id}`}>
						{item.user.name} {item.user.surname}{' '}
						{item.user.isVerified && (
							<Image
								src={verifiedIcon}
								width={12}
								height={12}
								alt={'verified icon'}
							/>
						)}
					</Link>
				</div>
				<div>{item.message}</div>
			</div>
		</div>
	)
}

export default CommentItem
