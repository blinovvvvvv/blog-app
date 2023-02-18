import { FC } from 'react'

import CreatePost from '@/screens/Home/CreatePost/CreatePost'
import Feed from '@/screens/Home/Feed/Feed'

import Meta from '../../../utils/meta/Meta'
import Layout from '../../layout/Layout'

import Header from './Header/Header'
import styles from './Home.module.scss'
import Subscriptions from './Subscriptions/Subscriptions'

const Home: FC = () => {
	return (
		<Meta title={'Домашняя'}>
			<Header />
			<Layout>
				<div className={styles.feed}>
					<CreatePost />
					<Feed />
				</div>
				<Subscriptions />
			</Layout>
		</Meta>
	)
}

export default Home
