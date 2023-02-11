import cn from 'clsx'
import { FC } from 'react'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'

import { IUploadField } from '@/ui/upload-field/upload-field.interface'
import { useUpload } from '@/ui/upload-field/useUpload'

const UploadField: FC<IUploadField> = ({
	onChange,
	folder,
	className,
	title
}) => {
	const { uploadImage } = useUpload(onChange, folder)

	return (
		<label>
			<span className={cn(className, 'flex items-center gap-1')}>
				{title}
				<MdOutlineAddPhotoAlternate />
			</span>
			<input type={'file'} hidden onChange={uploadImage} />
		</label>
	)
}

export default UploadField
