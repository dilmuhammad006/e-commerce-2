import { Button } from '@mui/material';
import type { Product } from '../../types/product';
import cls from './product.module.css';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux';
import { addBasket } from '../../redux/reducers';
const ProductComponent = ({
  isActive,
  name,
  price,
  stock,
  id,
  category,
  createdAt,
}: Product) => {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basket);
  const handleBasket = () => {
    dispatch(
      addBasket({ isActive, name, price, stock, id, category, createdAt })
    );
  };
  return (
    <div className={cls['product']}>
      <NavLink to={`/product/${id}`} className={cls['add-basket']}>
        <img
          src="https://images.uzum.uz/cueak5tht56ksubgmjfg/t_product_540_high.jpg"
          alt={name}
        />
        <h3>{Math.ceil(price)},00 sum chegirmada</h3>
        <small>{Math.ceil(price * 1.3)},00 so'm</small>
        <p>{name}</p>
        <h6>{stock}ta mavjud</h6>
      </NavLink>

      {basket.some((product) => product.id === id) ? (
        <Button disabled={!isActive} type="button" variant="contained">
          <NavLink to={'/basket'}>Rasmiylashtirish</NavLink>
        </Button>
      ) : (
        <Button
          disabled={!isActive}
          type="button"
          variant="contained"
          onClick={handleBasket}
        >
          Savatga
        </Button>
      )}
    </div>
  );
};

export default ProductComponent;
