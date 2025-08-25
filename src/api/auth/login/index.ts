import type { AuthResponse, LoginProps } from '../../../types';
import { customAxios } from '../../axios';

export const Login = async (props: LoginProps) => {
  try {
    const { data } = await customAxios.post<AuthResponse>('/auth/login', props);
    return data;
  } catch (error) {
    throw error;
  }
};
