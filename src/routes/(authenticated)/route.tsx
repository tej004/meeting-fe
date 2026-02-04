import { createFileRoute, redirect } from '@tanstack/react-router';
import { useUserStore } from '@/store/stores/user.store';

export const Route = createFileRoute('/(authenticated)')({
  beforeLoad: () => {
    const { auth } = useUserStore.getState();

    if (!auth.isAuthenticated || !auth.accessToken) {
      throw redirect({ to: '/401' });
    }
  },
});
