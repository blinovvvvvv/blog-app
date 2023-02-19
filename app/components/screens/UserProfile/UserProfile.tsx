import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import Layout from '@/components/layout/Layout'
import { useProfile } from '@/components/layout/Sidebar/SidebarProfile/useProfile'
import Button from '@/components/ui/button/Button'
import Loader from '@/components/ui/loader/loader'

import avatarTemplate from '@/assets/images/avatar-template.png'
import verifiedIcon from '@/assets/images/verified.svg'

import Meta from '@/utils/meta/Meta'

import FeedItem from '../Home/Feed/FeedItem/FeedItem'
import Header from '../Home/Header/Header'
import styles from '../Profile/Profile.module.scss'
import { useSubscribe } from '../Subscribe/useSubscribe'

import { useUser } from './useUser'

interface IUserProfile {
	id: number
}

const UserProfile: FC<IUserProfile> = ({ id }) => {
	const [subscribed, setIsSubscribed] = useState(false)

	const { data: profile, isLoading } = useUser(id)
	const { refetch, profile: myProfile } = useProfile()

	const { mutateAsync } = useSubscribe()

	const posts = profile?.posts || []

	const subscriptions = myProfile?.subscriptions || []

	const clickHandler = async (id: number) => {
		await mutateAsync(id)
		refetch()
	}

	useEffect(() => {
		if (!subscriptions) return

		const isSubscribed = subscriptions.some(
			item => item.toUser.id === profile?.id
		)

		if (subscribed !== isSubscribed) setIsSubscribed(isSubscribed)
	}, [myProfile])

	return (
		<Meta title='Профиль пользователя'>
			<Header />
			<Layout>
				{isLoading ? (
					<Loader count={1} />
				) : (
					<div className={styles.wrapper}>
						<div className={styles.profile}>
							<div className={styles.info}>
								<Image
									src={profile?.avatarPath || avatarTemplate}
									alt='profile logo'
									width={100}
									height={100}
									priority
								/>
								<span>
									<div className={styles.credentials}>
										{profile?.name} {profile?.surname}
										<span>
											{profile?.isVerified && (
												<Image
													src={verifiedIcon}
													width={15}
													alt='verified icon'
												/>
											)}
										</span>
									</div>
									<div>{profile?.description}</div>
								</span>
							</div>
							<Button
								//@ts-ignore
								onClick={() => clickHandler(profile?.id)}
								className={styles.edit}
							>
								{!subscribed ? 'Подписаться' : 'Отписаться'}
							</Button>
						</div>
						<div>
							<div className={styles.posts}>
								{posts.map(item => (
									<FeedItem key={item.id} id={item.id} />
								))}
							</div>
							<div className={styles.subs}>
								<div>{profile?.subscribersCount}</div>
								<div>подписчиков</div>
							</div>
						</div>
					</div>
				)}
			</Layout>
		</Meta>
	)
}

export default UserProfile
