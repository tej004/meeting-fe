import type { IUserStoreState } from '@/types/interfaces/store/user.store';

export const userStoreDafaultState: IUserStoreState = {
  auth: {
    accessToken: '',
    isAuthenticated: false,
  },
  user: {},
};
