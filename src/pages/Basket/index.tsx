import { Button } from '@mui/material';
import cls from './Basket.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux';
import { Basket } from '../../components';
import type { OrderRequest } from '../../types';
import { useCreateOrder } from '../../hooks';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { clearBasket } from '../../redux/reducers';
const BasketPage = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const totalPrice = basket.reduce((sum, product) => {
    return sum + product.price * 1;
  }, 0);

  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.authenticate
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/auth/login');
    return null;
  }
  const request: OrderRequest = {
    customerEmail: user?.email || '',
    customerName: user?.username || '',
    orderItems: basket.map((el) => ({
      productId: el.id,
      quantity: 1,
    })),
  };

  const { mutate, isPending } = useCreateOrder();

  const handleSubmit = () => {
    mutate(request, {
      onSuccess: () => {
        toast.success('Buyurtma shakllantirildi');
        setTimeout(() => {
          dispatch(clearBasket());
          navigate('/orders');
        }, 2000);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };
  return (
    <div className="container">
      <div className={cls['basket-wrapper']}>
        <div className={cls['products']}>
          <p className={cls['pr']}>Mahsulotlaringiz</p>
          {!basket.length ? (
            <h2 className="text-center">Sizda mahsulot kuzatilmadi</h2>
          ) : null}
          {basket.map((el) => (
            <Basket {...el} key={el.id} />
          ))}
        </div>
        <div className={cls['total']}>
          <div className={cls['punkt']}>
            <p>Topshirish punkitigacha yetkazib berish 15000,00 so'm</p>
            <hr />
          </div>
          <div className={cls['total-price']}>
            <p className={cls['title']}>Buyurtmangiz</p>
            <span>Mahsulotlar({basket.length})</span>
            <b>
              Jami <span>{totalPrice * 1.3},00 so'm</span>
            </b>
            <h4>{totalPrice},00 so'm</h4>
            <Button
              type="submit"
              variant="contained"
              disabled={!isPending && basket.length === 0}
              onClick={handleSubmit}
            >
              {isPending ? ' Loading' : 'Rasmiylashtirish'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
