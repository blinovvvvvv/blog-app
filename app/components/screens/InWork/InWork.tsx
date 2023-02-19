import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import Meta from '@/utils/meta/Meta'

import Header from '../Home/Header/Header'

const InWork: FC = () => {
	return (
		<Meta title='Страница в разработке'>
			<Header />
			<Layout>
				<div className={'text-gray-600 text-xl font-medium'}>
					Страница в разработке ⚒️
				</div>
			</Layout>
		</Meta>
	)
}

export default InWork
