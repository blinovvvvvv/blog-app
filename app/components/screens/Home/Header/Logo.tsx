import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import iconImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<Image
				src={iconImage}
				alt={'Logo'}
				height={30}
				width={30}
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
