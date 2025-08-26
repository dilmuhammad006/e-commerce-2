import { Button } from '@mui/material';
import type { Order, OrderItem } from '../../types';
import cls from './order.module.css';
import { useCancelOrder } from '../../hooks';
import toast from 'react-hot-toast';

interface OrderComponentProps {
  order: OrderItem;
  orderInfo: Order;
}
const OrderComponent = ({ order, orderInfo }: OrderComponentProps) => {
  const status = {
    PENDING: 'kutilmoqda',
    COMPLETED: 'muvaffaqiyatli',
    CANCELLED: 'bekor qilingan',
  };
  const { mutate, isPending } = useCancelOrder();

  const handleCancelOrder = () => {
    mutate(orderInfo.id, {
      onSuccess: () => {
        toast.success('Buyurtma bekor qilindi');
      },
      onError: () => {
        toast.error('Bekor qilishda xatolik');
      },
    });
  };

  return (
    <div className={cls['orders']}>
      <img
        src="https://images.uzum.uz/cueak5tht56ksubgmjfg/t_product_540_high.jpg"
        alt={order.productName}
      />
      <div className={cls['info']}>
        <div className={cls['title']}>
          <p className={cls['name']}>{order.productName}</p>
          <small>{new Date(orderInfo.orderDate).toLocaleDateString()}</small>
        </div>

        <p className={cls['total-price']}>
          Umumiy buyurtma narxi - {'   '}
          <small>{order.totalPrice * 1.3},00 so'm</small>
          <b>{order.totalPrice},00 so'm</b>
        </p>
        <p className={cls['foyda']}>
          Sizning foydangiz - {' '} 
          {Math.ceil(order.totalPrice * 1.3 - order.totalPrice)},00 so'm
        </p>
        <p className={cls['condition']}>
          Buyurtma holati - {status[orderInfo.status]}
        </p>
        <Button
          type="button"
          disabled={orderInfo.status !== 'PENDING' || !!isPending}
          onClick={handleCancelOrder}
          variant="contained"
        >
          {isPending ? 'Loading' : 'Buyurtmani bekor qilish'}
        </Button>
      </div>
    </div>
  );
};

export default OrderComponent;
