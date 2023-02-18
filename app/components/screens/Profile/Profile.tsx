import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { useProfile } from '@/components/layout/Sidebar/SidebarProfile/useProfile'
import Loader from '@/components/ui/loader/loader'

import avatarTemplate from '@/assets/images/avatar-template.png'
import verifiedIcon from '@/assets/images/verified.svg'

import Meta from '@/utils/meta/Meta'

import FeedItem from '../Home/Feed/FeedItem/FeedItem'
import Header from '../Home/Header/Header'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	const { profile, isLoading } = useProfile()

	const posts = profile?.posts || []

	return (
		<Meta title='Профиль ✨'>
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
							<Link href={'/profile/edit'} className={styles.edit}>
								Редактировать профиль
							</Link>
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

export default Profile
