import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputFieldProps = IFieldProps & InputHTMLAttributes<HTMLInputElement>

export interface IField extends TypeInputFieldProps {}
