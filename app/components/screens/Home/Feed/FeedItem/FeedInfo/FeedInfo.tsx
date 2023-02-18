import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IUser } from '@/shared/types/user.types'

import avatarTemplate from '@/assets/images/avatar-template.png'
import verifiedIcon from '@/assets/images/verified.svg'

import styles from './FeedInfo.module.scss'

interface IFeedInfo {
	user: IUser
	createdAt: string
}

dayjs.extend(relativeTime)

const FeedInfo: FC<IFeedInfo> = ({ user, createdAt }) => {
	return (
		<div className={styles.info}>
			<Link href={`/user/${user.id}`}>
				<span>
					<Image
						src={user.avatarPath || avatarTemplate}
						alt={'post author avatar'}
						width={35}
						height={35}
					/>
				</span>
				<span className={styles.wrapper}>
					<div>
						<span className={styles.name}>
							{user.name} {user.surname}
							<span>
								{user.isVerified && (
									<Image
										src={verifiedIcon}
										width={12}
										height={12}
										alt={'verified icon'}
									/>
								)}
							</span>
						</span>
					</div>
					<span className={styles.date}>
						{dayjs(new Date(createdAt)).fromNow()}
					</span>
				</span>
			</Link>
		</div>
	)
}

export default FeedInfo
