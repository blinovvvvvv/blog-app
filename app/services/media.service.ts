import { IMediaResponse } from '@/shared/types/media.interface'

import { instance } from '../api/instance'

export const MediaService = {
	async upload(media: FormData, folder?: string) {
		return instance.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
}
