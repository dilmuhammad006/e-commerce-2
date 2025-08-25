import { useMutation } from '@tanstack/react-query';
import { Login } from '../../api/auth/login';
import type { LoginProps, RegisterProps } from '../../types';
import { Register } from '../../api/auth/register';

export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (props: LoginProps) => Login(props),
  });
};

export const useRegister = () => {
  return useMutation({
    mutationKey: ['registe'],
    mutationFn: (props: RegisterProps) => Register(props),
  });
};
