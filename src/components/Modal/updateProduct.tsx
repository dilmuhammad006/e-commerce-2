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
import type { UpdateProductRequest } from '../../types';
import { useUpdateProduct } from '../../hooks';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { handleUdateModal } from '../../redux/reducers';
import type { RootState } from '../../redux';
const UpdateProduct = () => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, register, control } =
    useForm<UpdateProductRequest>();
  const { mutate } = useUpdateProduct();
  const { selectedId } = useSelector((state: RootState) => state.modal);

  const OnSubmit = (data: UpdateProductRequest) => {
    mutate(
      { ...data, id: selectedId , isActive: data.isActive },
      {
        onSuccess: () => {
          toast.success('Mahsulot yangilandi');
          setTimeout(() => {
            reset();
            dispatch(handleUdateModal());
          }, 2000);
        },
        onError: () => {
          toast.error('Mahsulot yangilashda xatolik');
        },
      }
    );
  };
  return (
    <form className={cls['form']} onSubmit={handleSubmit(OnSubmit)}>
      <h2>Mahsulotni yangilash</h2>
      <Input placeholder="Mahsulot nomi" {...register('name')} type="text" />
      <Input
        placeholder="Mahsulot narxi"
        {...register('price')}
        type="number"
      />
      <Input
        placeholder="Mahsulot miqdori"
        {...register('stock')}
        type="number"
      />
      <Input placeholder="Kategoriya" {...register('category')} type="text" />
      <FormControl fullWidth size="small">
        <InputLabel>Mahsulot holati</InputLabel>
        <Controller
          name="isActive"
          control={control}
          render={({ field }) => (
            <Select {...field} label="Faolmi?">
              <MenuItem value={'true'}>Faol</MenuItem>
              <MenuItem value={'false'}>Nofaol</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Button type="submit" variant="contained">
        Yangilash
      </Button>
    </form>
  );
};

export default UpdateProduct;
