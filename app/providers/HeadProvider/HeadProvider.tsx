import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

import Favicons from './Favicons'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={'#FFFFFF'}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				nonce='my-nonce'
				options={{ easing: 'ease', speed: 500 }}
				showOnShallow={true}
			/>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1.0'
				/>
				<Favicons />
				<meta name='msapplication-navbutton-color' content={'#181B1E'} />
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content={'#181B1E'}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
