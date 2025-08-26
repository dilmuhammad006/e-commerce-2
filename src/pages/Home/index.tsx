import { useGetAllProducts } from '../../hooks';
import cls from './Home.module.css';
import { ProductComponent } from '../../components';
import { Input } from '@mui/material';
import settingsIcon from '../../assets/sort_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
const HomePage = () => {
  const { data, isLoading, error } = useGetAllProducts({});

  if (error) {
    return <h2 className="text-center">Malumotlar olishda xatolik!</h2>;
  }
  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <main className="container" id={cls['main']}>
      <div className={cls['sorting']}>
        <div className={cls['modal']}>
          <img
            src={settingsIcon}
            alt=""
          />
          <p>filter</p>
        </div>
        <Input
          type="search"
          placeholder="type here to search..."
          sx={{ width: '250px' ,}}
        />
        <div></div>
      </div>
      <div className={cls['product-wrapper']}>
        {data?.data.content.map((product) => (
          <ProductComponent {...product} key={product.id}></ProductComponent>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
