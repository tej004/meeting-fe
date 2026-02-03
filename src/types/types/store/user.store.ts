import type {
  IUserStoreActions,
  IUserStoreState,
} from '@/types/interfaces/store/user.store';

export type TUserStore = IUserStoreState & IUserStoreActions;
