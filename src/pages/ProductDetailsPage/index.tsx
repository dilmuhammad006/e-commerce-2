import { useParams } from 'react-router';
import cls from './productDetails.module.css';
import { useGetOneProduct } from '../../hooks';
const ProductDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: product, isLoading, isError } = useGetOneProduct(id);
  console.log(product);
  if (isError) {
    return <h2 className="text-center">Malumotlar olishda xatolik!</h2>;
  }
  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }
  return <div className={cls['product']}>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
