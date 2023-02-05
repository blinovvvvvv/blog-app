import dynamic from 'next/dynamic'

const DynamicAuth = dynamic(() => import('@/screens/Auth/Auth'), {
	ssr: false
})

export default function HomePage() {
	return <DynamicAuth />
}
