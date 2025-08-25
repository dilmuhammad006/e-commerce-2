import { useForm } from 'react-hook-form';
import cls from './Login.module.css';
import type { LoginProps } from '../../../types';
import { useLogin } from '../../../hooks';
import { NavLink, useNavigate } from 'react-router';
import { Button, Input } from '@mui/material';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/reducers';
const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm<LoginProps>();
  const { mutate, isPending } = useLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginProps) => {
    mutate(data, {
      onSuccess: ({ data }) => {
        reset();
        toast.success('Muvaffaqiyatli login');
        dispatch(
          login({
            token: data.token,
            user: {
              email: data.email,
              username: data.username,
              role: data.role,
            },
          })
        );
        setTimeout(() => {
          navigate('/');
        }, 2000);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };
  return (
    <form className={cls['form']} onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <Input {...register('username')} type="text" placeholder="Username" />
      <Input {...register('password')} type="password" placeholder="Password" />
      <NavLink to={'/auth/register'}>Do'nt have account?</NavLink>
      <Button type="submit" disabled={isPending} variant="contained">
        {isPending ? 'Loading' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginPage;
