import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'

import { IComponentAuthField } from '@/shared/types/auth.types'

import MainProvider from '../app/providers/MainProvider'
import '../styles/globals.scss'

type TypeAppProps = AppProps & IComponentAuthField

const inter = Inter({
	subsets: ['latin'],
	variable: '--inter-font',
	display: 'fallback'
})

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<main className={inter.className}>
				<Component {...pageProps} />
			</main>
		</MainProvider>
	)
}
