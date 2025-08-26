import { TableCell, TableRow } from '@mui/material';
import deleteImage from '../../assets/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import updateImage from '../../assets/edit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import type { Product } from '../../types/product';
import { useDeleteProduct } from '../../hooks';
import toast from 'react-hot-toast';

const Tbody = (product: Product) => {
  const { mutate: del } = useDeleteProduct();

  const handleDelete = () => {
    del(product.id, {
      onSuccess: () => {
        toast.success("Mahsulot o'chirildi");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <TableRow key={product.id}>
      <TableCell>{product.id}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price},00 so'm</TableCell>
      <TableCell>{new Date(product.createdAt).toLocaleDateString()}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>{product.isActive ? 'faol' : 'faol emas'}</TableCell>
      <TableCell>
        <img src={updateImage} alt="Update button" />
      </TableCell>
      <TableCell onClick={handleDelete}>
        <img src={deleteImage} alt="Delete Button" />
      </TableCell>
    </TableRow>
  );
};

export default Tbody;
