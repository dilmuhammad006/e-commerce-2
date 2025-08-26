import { NavLink, useParams } from 'react-router';
import cls from './productDetails.module.css';
import { useGetOneProduct } from '../../hooks';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../redux/reducers';
import type { RootState } from '../../redux';
import toast from 'react-hot-toast';

const ProductDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: product, isLoading, isError } = useGetOneProduct(id);
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basket);

  if (isError) {
    return <h2 className="text-center">Malumotlar olishda xatolik!</h2>;
  }
  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }
  const handleBasket = () => {
    product
      ? dispatch(addBasket({ ...product?.data, count: 1 }))
      : toast.error('Xatolik yuz berdi');
  };

  return (
    <div className="container">
      <div className={cls['product']}>
        <img
          src="https://images.uzum.uz/cueak5tht56ksubgmjfg/t_product_540_high.jpg"
          alt={product?.data.name}
        />

        <div className={cls['product-info']}>
          <div className={cls['name']}>
            <b>Mahsulot nomi: </b>
            <p>{product?.data.name}</p>
          </div>

          <div className={cls['price']}>
            <b>Mahsulotning asl narxi: </b>
            <p>
              {product?.data?.price
                ? product?.data?.price * 1.3
                : product?.data?.price}
              ,00 so'm
            </p>
          </div>

          <div className={cls['price-2']}>
            <b>Mahsulotning chegirmadagi narxi: </b>
            <p>{product?.data.price},00 so'm</p>
          </div>

          <div className={cls['stock']}>
            <b>Hozirda sotuvda bor: </b>
            <p>{product?.data.stock} ta</p>
          </div>

          <div className={cls['condition']}>
            <b>Mahsulotning holati: </b>
            <p>{product?.data.isActive ? 'sotuvda bor' : "sotuvda yo'q"}</p>
          </div>
          <div className={cls['description']}>
            <small>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s...
            </small>
          </div>
          {basket.some((el) => el.id === product?.data.id) ? (
            <Button
              disabled={!product?.data.isActive}
              type="button"
              variant="contained"
            >
              <NavLink to={'/basket'}>Rasmiylashtirish</NavLink>
            </Button>
          ) : (
            <Button
              disabled={!product?.data.isActive}
              type="button"
              variant="contained"
              onClick={handleBasket}
            >
              Savatga
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
