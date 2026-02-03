import { create } from 'zustand';
import type { TUserStore } from '@/types/types/store/user.store';
import { userStoreActions } from '../actions/user-store.actions';
import { userStoreDafaultState } from '../defaults/user-store.defaults';

export const useUserStore = create<TUserStore>((set, get) => ({
  ...userStoreDafaultState,
  ...userStoreActions(set, get),
}));
