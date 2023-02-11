import { FC } from 'react'

import CreatePost from '@/screens/Home/CreatePost/CreatePost'
import Feed from '@/screens/Home/Feed/Feed'

import Header from '@/components/screens/Home/Header/Header'

import Meta from '../../../utils/meta/Meta'
import Layout from '../../layout/Layout'

import Subscriptions from './Subscriptions/Subscriptions'

const Home: FC = () => {
	return (
		<Meta title={'Домашняя'}>
			<Header />
			<Layout>
				<div>
					<CreatePost />
					<Feed />
				</div>
				<Subscriptions />
			</Layout>
		</Meta>
	)
}

export default Home
