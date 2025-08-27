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
import {
  CreateProductModal,
  Tbody,
  UpdateProductModal,
} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { handleCreateModal } from '../../redux/reducers';

const DashboardPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProducts({ sortBy: 'createdAt' });

  const { createModal, updateModal } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch();
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
    <div className="container" id={cls['container']}>
      <div className={cls['title']}>
        <p>Mahsulotlar</p>
        <Button
          type="button"
          variant="contained"
          onClick={() => dispatch(handleCreateModal())}
        >
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
      <div
        className={cls['create-modal']}
        id={!createModal ? cls['create-modal'] : undefined}
      >
        <CreateProductModal />
      </div>
      <div
        className={cls['create-modal']}
        id={!updateModal ? cls['update-modal'] : undefined}
      >
        <UpdateProductModal />
      </div>
    </div>
  );
};

export default DashboardPage;
