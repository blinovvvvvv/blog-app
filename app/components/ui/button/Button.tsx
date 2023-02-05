import { FC, PropsWithChildren } from 'react'

import { IButton } from '@/ui/button/button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={className} {...rest}>
			{children}
		</button>
	)
}

export default Button
