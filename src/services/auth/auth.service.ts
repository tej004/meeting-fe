import { apiClient } from '@/lib/axios';
import type { ILoginViewerRequestData } from '@/types/interfaces/services/auth.service';

const authRouteName = 'auth';

export const authService = {
  loginViewer: async (data: ILoginViewerRequestData): Promise<any> => {
    const response = await apiClient.post(
      `${authRouteName}/login-viewer`,
      data
    );
    return response;
  },
};
