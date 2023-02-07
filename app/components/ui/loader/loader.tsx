import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

const Loader: FC<SkeletonProps> = ({ ...rest }) => {
	return <Skeleton {...rest} />
}

export default Loader
