export interface IUserStoreState {
  auth: {
    isAuthenticated: boolean;
    accessToken: string;
  };
  user: any;
}

export interface IUserStoreActions {
  login: (data: IUserStoreState) => void;
  logout: () => void;
  update: (data: Partial<IUserStoreState>) => void;
}
