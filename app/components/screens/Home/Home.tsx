import { FC } from 'react'

import Header from '@/components/screens/Home/Header/Header'

import Meta from '../../../utils/meta/Meta'
import Layout from '../../layout/Layout'

import Subscriptions from './Subscriptions/Subscriptions'

const Home: FC = () => {
	return (
		<Meta title={'Домашняя'}>
			<Header />
			<Layout>
				<Subscriptions />
			</Layout>
		</Meta>
	)
}

export default Home
