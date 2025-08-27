import { useSelector } from 'react-redux';
import { useGetAllOrderByEmail } from '../../hooks';
import cls from './Order.module.css';
import type { RootState } from '../../redux';
import { useNavigate } from 'react-router';
import { OrderComponent } from '../../components';
import { useEffect } from 'react';
const OrdersPage = () => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.authenticate
  );
  const navigate = useNavigate( );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
  }, [isAuthenticated, navigate]);
  const { data, isLoading, isError } = useGetAllOrderByEmail(
    user?.email as string
  );

  if (isError) {
    return <h2 className="text-center">Malumotlar olishda xatolik!</h2>;
  }
  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }
  return (
    <div className="container">
      <div className={cls['orders-wrapper']}>
        {data?.data.map((el) =>
          el.orderItems.map((order) => (
            <OrderComponent key={order.id} order={order} orderInfo={el} />
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
