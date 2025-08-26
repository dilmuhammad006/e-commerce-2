import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import cls from './Dashboard.module.css';
import { useGetAllProducts } from '../../hooks';
import { Tbody } from '../../components';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const DashboardPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProducts({ sortBy: 'createdAt' });

  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.authenticate);
  useEffect(() => {
    if (user?.role !== 'ADMIN') {
      navigate('/');
    }
  }, [user]);
  if (isError) {
    return <h2 className="text-center">Malumotlar olishda xatolik!</h2>;
  }
  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <div className="container">
      <div className={cls['title']}>
        <p>Mahsulotlar</p>
        <Button type="button" variant="contained">
          qo'shish
        </Button>
      </div>
      <div className={cls['products']}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Narxi</TableCell>
              <TableCell>Ishlab chiqarilgan vaqt</TableCell>
              <TableCell>Miqdori</TableCell>
              <TableCell>Holati</TableCell>
              <TableCell>Yangilash</TableCell>
              <TableCell>O'chirish</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.data.content.map((product) => (
              <Tbody {...product} key={product.id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardPage;
