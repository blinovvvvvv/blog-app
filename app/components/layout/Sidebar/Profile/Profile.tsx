import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import ProfileMenu from '@/components/layout/Sidebar/Profile/ProfileMenu'
import { useProfile } from '@/components/layout/Sidebar/Profile/useProfile'

import Loader from '@/ui/loader/loader'

import { useOutside } from '@/hooks/useOutside'

import avatar from '@/assets/images/avatar-template.png'
import verifiedIcon from '@/assets/images/verified.svg'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	const { profile, isLoading } = useProfile()
	const { ref, isShow, setIsShow } = useOutside(false)

	return (
		<div className={styles.profile} ref={ref}>
			{isLoading ? (
				<Loader count={1} />
			) : (
				<>
					<div className={styles.info}>
						<Link href={'/profile'}>
							<Image src={profile?.avatarPath || avatar} alt={'profile logo'} />
							<span>
								<span>
									{profile?.name} {profile?.surname}
								</span>
								{profile?.isVerified && (
									<Image
										src={verifiedIcon}
										width={12}
										height={12}
										alt={'verified icon'}
									/>
								)}
							</span>
						</Link>

						<BsChevronDown
							className={'ml-2'}
							onClick={() => setIsShow(!isShow)}
						/>
					</div>
					{isShow && <ProfileMenu />}
				</>
			)}
		</div>
	)
}

export default Profile
