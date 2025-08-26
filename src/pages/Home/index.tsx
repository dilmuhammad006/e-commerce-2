import { useDebounce, useGetAllProducts } from '../../hooks';
import cls from './Home.module.css';
import { ProductComponent } from '../../components';
import { Input } from '@mui/material';
import settingsIcon from '../../assets/sort_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { useState } from 'react';


const HomePage = () => {
  const { data, isLoading, isError } = useGetAllProducts({});
  const [searchValue, setSearchValue] = useState('');


  const debouncedValue = useDebounce(searchValue, 700);

  if (isError) {
    return <h2 className="text-center">Malumotlar olishda xatolik!</h2>;
  }
  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  const filteredProducts = data?.data.content.filter((product) =>
    product.name.toLowerCase().includes(debouncedValue?.toLowerCase() || '')
  );

  return (
    <main className="container" id={cls['main']}>
      <div className={cls['sorting']}>
        <div className={cls['modal']}>
          <img src={settingsIcon} alt="" />
          <p>filter</p>
        </div>
        <Input
          type="search"
          placeholder="type here to search..."
          sx={{ width: '250px' }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div></div>
      </div>
      <div className={cls['product-wrapper']}>
        {filteredProducts?.map((product) => (
          <ProductComponent {...product} key={product.id} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
