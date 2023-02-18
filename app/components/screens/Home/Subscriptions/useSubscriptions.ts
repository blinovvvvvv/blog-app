import { useProfile } from '@/components/layout/Sidebar/SidebarProfile/useProfile'

export const useSubscriptions = () => {
	const { profile, isLoading } = useProfile()

	const subscriptions = profile?.subscriptions?.slice(0, 5) || []

	return { subscriptions, isLoading }
}
