import Link from 'next/link'
import { FC } from 'react'

import SubscriptionItem from '@/screens/Home/Subscriptions/SubscriptionItem'
import { useSubscriptions } from '@/screens/Home/Subscriptions/useSubscriptions'

import styles from './Subscriptions.module.scss'

const Subscriptions: FC = () => {
	const { subscriptions } = useSubscriptions()

	return (
		<div className={styles.subscriptions}>
			{subscriptions.length
				? subscriptions.map(item => (
						<SubscriptionItem
							key={item.createdAt}
							toUser={item.toUser}
							isSmall
						/>
				  ))
				: 'У Вас еще нету подписок :('}
			{subscriptions.length === 5 && (
				<div className={styles.wrapper}>
					<Link href={`/subscribe`} className={styles.link}>
						Показать все
					</Link>
				</div>
			)}
		</div>
	)
}

export default Subscriptions
