import type { AuthResponse, RegisterProps } from '../../../types';
import { customAxios } from '../../axios';

export const Register = async (props: RegisterProps) => {
  try {
    const { data } = await customAxios.post<AuthResponse>(
      `/auth/register`,
      props
    );
    return data;
  } catch (error) {
    throw error;
  }
};
