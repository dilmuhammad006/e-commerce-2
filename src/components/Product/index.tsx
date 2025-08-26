import { Button } from '@mui/material';
import type { Product } from '../../types/product';
import cls from './product.module.css';
import { NavLink } from 'react-router';
const ProductComponent = ({ isActive, name, price, stock, id }: Product) => {
  return (
    <div className={cls['product']}>
      <NavLink to={`/product/${id}`} className={cls['add-basket']}>
        <img
          src="https://images.uzum.uz/cueak5tht56ksubgmjfg/t_product_540_high.jpg"
          alt={name}
        />
        <h3>{price},00 sum chegirmada</h3>
        <small>{price * 1.3},00 so'm</small>
        <p>{name}</p>
        <h6>{stock}ta mavjud</h6>
      </NavLink>
      <Button disabled={!isActive} type="button" variant="contained">
        Savatga
      </Button>
    </div>
  );
};

export default ProductComponent;
