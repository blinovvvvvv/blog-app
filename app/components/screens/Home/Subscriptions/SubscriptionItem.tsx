import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { ISubscriptionItem } from '@/screens/Home/Subscriptions/subscription-item.interface'

import avatarTemplate from '@/assets/images/avatar-template.png'
import verifiedIcon from '@/assets/images/verified.svg'

import styles from './Subscriptions.module.scss'

const SubscriptionItem: FC<ISubscriptionItem> = ({
	toUser: { avatarPath, isVerified, name, surname, id },
	isSmall
}) => {
	return (
		<div className={styles.item}>
			{isSmall && (
				<Link href={`/user/${id}`}>
					<span>
						<Image
							src={avatarPath || avatarTemplate}
							width={30}
							height={30}
							alt={'avatar'}
						/>
					</span>
					<span className={styles.info}>
						{name} {surname}
					</span>
					<span>
						{isVerified && (
							<Image
								src={verifiedIcon}
								width={12}
								height={12}
								alt={'verified icon'}
							/>
						)}
					</span>
				</Link>
			)}
		</div>
	)
}

export default SubscriptionItem
