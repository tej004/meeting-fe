import type { StateCreator } from 'zustand';
import type { IUserStoreState } from '@/types/interfaces/store/user.store';
import type { TUserStore } from '@/types/types/store/user.store';
import { userStoreDafaultState } from '../defaults/user-store.defaults';

export const userStoreActions = (
  set: Parameters<StateCreator<TUserStore>>[0]
  // get: Parameters<StateCreator<TUserStore>>[1]
) => ({
  login: (data: IUserStoreState) => {
    set(() => ({ ...data }));
  },
  logout: () => {
    set(() => ({ ...userStoreDafaultState }));
  },
  update: (data: Partial<IUserStoreState>) => {
    set((state: IUserStoreState) => ({ ...state, ...data }));
  },
});
