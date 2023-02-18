import { useProfile } from '@/components/layout/Sidebar/Profile/useProfile'

export const useReactions = () => {
	const { profile, isLoading } = useProfile()

	const likes = profile?.likes

	return {
		likes,
		isLoading
	}
}
