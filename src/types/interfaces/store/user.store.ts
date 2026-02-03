export interface IUserStoreState {
  uuid: string;
  isAuthenticated: boolean;
  username: string;
}

export interface IUserStoreActions {
  login: (data: IUserStoreState) => void;
  logout: () => void;
  update: (data: Partial<IUserStoreState>) => void;
}
