import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from '@/ui/field/field.interface'

import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div
				className={cn(styles.input, {
					[styles.error]: error
				})}
			>
				<input
					type={type}
					placeholder={placeholder}
					style={style}
					ref={ref}
					{...rest}
				/>
			</div>
		)
	}
)
Field.displayName = 'Field'

export default Field
