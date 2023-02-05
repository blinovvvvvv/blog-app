import { NextPage } from 'next'

export interface TypeRole {
	isOnlyUser?: boolean
	isOnlyAdmin?: boolean
}

export type NextPageAuth<P = {}> = TypeRole & NextPage<P>

export interface IComponentAuthField {
	Component: TypeRole
}
