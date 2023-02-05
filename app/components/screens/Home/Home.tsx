import { FC } from 'react'

import Header from '@/components/screens/Home/Header/Header'

import Field from '@/ui/field/Field'

import Meta from '../../../utils/meta/Meta'
import Layout from '../../layout/Layout'

import Subscriptions from './Subscriptions/Subscriptions'

const Home: FC = () => {
	return (
		<Meta title={'Домашняя'}>
			<Header />
			<Layout>
				<div className={'text-white'} style={{ fontWeight: 500 }}>
					<Field placeholder={'Номер телефона'} />
				</div>
				<Subscriptions />
			</Layout>
		</Meta>
	)
}

export default Home
