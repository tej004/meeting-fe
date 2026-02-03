import type { IUserStoreState } from '@/types/interfaces/store/user.store';

export const userStoreDafaultState: IUserStoreState = {
  uuid: '',
  isAuthenticated: false,
  username: '',
};
