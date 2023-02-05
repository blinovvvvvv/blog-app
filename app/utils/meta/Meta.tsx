import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import { ISeo } from './meta.interface'

const Meta: FC<PropsWithChildren<ISeo>> = ({
	children,
	title,
	description
}) => {
	return (
		<>
			{description ? (
				<Head>
					<title>{title}</title>
					<meta property='og:locale' content='en' />
					<meta property='og:title' content={title} />
					<meta property='og:description' content={description} />
				</Head>
			) : (
				<Head>
					<title>{title}</title>
					<meta name='robots' content='noindex, nofollow' />
				</Head>
			)}
			{children}
		</>
	)
}

export default Meta
