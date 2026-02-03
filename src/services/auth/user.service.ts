import { apiClient } from '@/lib/axios';
import type { ISignUpRequestData } from '@/types/interfaces/services/user.service';

const userRouteName = 'users';

export const userService = {
  signUp: async (data: ISignUpRequestData): Promise<any> => {
    const response = await apiClient.post(`${userRouteName}/sign-up`, data);
    return response;
  },
};
