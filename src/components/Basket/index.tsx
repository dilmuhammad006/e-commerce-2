import type { Product } from '../../types/product';
import cls from './product.module.css';
import deleteImage from '../../assets/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { useDispatch } from 'react-redux';
import { addBasket, incrementBasket, removeBasket } from '../../redux/reducers';
import toast from 'react-hot-toast';
import { useState } from 'react';
const Basket = (product: Product) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBasket(product));
    toast.success("Majsulot savatdan o'chirildi");
  };
  return (
    <div className={cls['basket']}>
      <img
        src="https://images.uzum.uz/cueak5tht56ksubgmjfg/t_product_540_high.jpg"
        alt={product.name}
      />
      <div className={cls['info']}>
        <div className={cls['title']}>
          <p>{product.name}</p>
          <img src={deleteImage} alt="delete button" onClick={handleDelete} />
        </div>
        <small>{Math.ceil(product.price * 1.3 * count)},00 so'm</small>
        <div className={cls['counter-wrapper']}>
          <p className={cls['price']}>
            {Math.ceil(product.price * count)},00 so'm
          </p>
          <div className={cls['counter']}>
            <button
              disabled={count <= 1}
              onClick={() => {
                setCount(count - 1);
                dispatch(incrementBasket({ ...product, count: 1 }));
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                setCount(count + 1);
                dispatch(addBasket({ ...product, count: 1 }));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
