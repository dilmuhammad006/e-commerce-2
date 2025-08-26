import type { Product } from '../../types/product';
import cls from './product.module.css';
import deleteImage from '../../assets/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { useDispatch } from 'react-redux';
import { removeBasket } from '../../redux/reducers';
import toast from 'react-hot-toast';
const Basket = (product: Product) => {
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
        <small>{product.price * 1.3},00 so'm</small>
        <p className={cls['price']}>{product.price},00 so'm</p>
      </div>
    </div>
  );
};

export default Basket;
