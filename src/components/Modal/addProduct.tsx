import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import cls from './modal.module.css';
import { Controller, useForm } from 'react-hook-form';
import type { CreateProductRequest } from '../../types';
import { useCreateProduct } from '../../hooks';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { handleCreateModal } from '../../redux/reducers';
const AddProduct = () => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, register, control } =
    useForm<CreateProductRequest>();
  const { mutate } = useCreateProduct();

  const OnSubmit = (data: CreateProductRequest) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Mahsulot qo'shildi");
        setTimeout(() => {
          reset();
          dispatch(handleCreateModal());
        }, 2000);
      },
      onError: () => {
        toast.error("Mahsulot qo'shishda xatolik");
      },
    });
  };
  return (
    <form className={cls['form']} onSubmit={handleSubmit(OnSubmit)}>
      <h2>Yangi mahsulot qo'shish</h2>
      <Input
        placeholder="Mahsulot nomi"
        {...register('name')}
        required
        type="text"
      />
      <Input
        placeholder="Mahsulot narxi"
        {...register('price')}
        required
        type="number"
      />
      <Input
        placeholder="Mahsulot miqdori"
        {...register('stock')}
        required
        type="number"
      />
      <Input
        placeholder="Kategoriya"
        {...register('category')}
        required
        type="text"
      />
      <FormControl fullWidth size="small">
        <InputLabel>Mahsulot holati</InputLabel>
        <Controller
          name="isActive"
          control={control}
          render={({ field }) => (
            <Select {...field} label="Faolmi?" required>
              <MenuItem value={'true'}>Faol</MenuItem>
              <MenuItem value={'false'}>Nofaol</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Button type="submit" variant="contained">
        Qo'shish
      </Button>
    </form>
  );
};

export default AddProduct;
