import { Button, Input } from '@mui/material';
import type { RegisterProps } from '../../../types';
import cls from './Register.module.css';
import { useForm } from 'react-hook-form';
import { useRegister } from '../../../hooks';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/reducers';

const RegisterPage = () => {
  const { register, reset, handleSubmit } = useForm<RegisterProps>();
  const { mutate, isPending } = useRegister();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: RegisterProps) => {
    mutate(data, {
      onSuccess: ({ data }) => {
        reset();
        toast.success('Muvaffaqiyatli register');
        dispatch(
          login({
            token: data.token,
            user: {
              email: data.email,
              role: data.role,
              username: data.username,
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
      <h2>Register</h2>
      <Input {...register('username')} type="text" placeholder="Username" />
      <Input {...register('email')} type="email" placeholder="Email" />
      <Input {...register('password')} type="password" placeholder="Password" />
      <NavLink to={'/auth/login'}>Do you have account?</NavLink>
      <Button type="submit" disabled={isPending} variant="contained">
        {isPending ? 'Loading' : 'Register'}
      </Button>
    </form>
  );
};

export default RegisterPage;
