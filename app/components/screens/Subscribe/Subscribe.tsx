import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { useProfile } from '@/components/layout/Sidebar/SidebarProfile/useProfile'
import Loader from '@/components/ui/loader/loader'
import UserItem from '@/components/ui/user-item/UserItem'

import Meta from '@/utils/meta/Meta'

import Header from '../Home/Header/Header'

import styles from './Subscribe.module.scss'
import { useSubscribe } from './useSubscribe'

const Subscribe: FC = () => {
	const { profile, refetch } = useProfile()
	const { data, isLoading, mutateAsync } = useSubscribe()

	const filteredUsers = data?.filter(item => item.id !== profile?.id)

	const clickHandler = async (id: number) => {
		await mutateAsync(id)
		refetch()
	}

	return (
		<Meta title='Подписки'>
			<Header />
			<Layout>
				{isLoading ? (
					<Loader count={1} />
				) : (
					<div className={styles.subscribe}>
						{filteredUsers?.map(item => (
							<UserItem
								isSmall={false}
								key={item.id}
								user={item}
								onClick={() => clickHandler(item.id)}
							/>
						))}
					</div>
				)}
			</Layout>
		</Meta>
	)
}

export default Subscribe
