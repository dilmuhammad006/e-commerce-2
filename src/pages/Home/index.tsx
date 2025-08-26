import { useDebounce, useGetAllProducts } from '../../hooks';
import cls from './Home.module.css';
import { ProductComponent } from '../../components';
import { Button, Input, MenuItem, Select } from '@mui/material';
import settingsIcon from '../../assets/sort_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { useState } from 'react';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [sortBy, setSortBy] = useState<'id' | 'price' | 'createdAt'>(
    'createdAt'
  );
  const [modal, setModal] = useState<boolean>(false);
  const { data, isLoading, isError, refetch } = useGetAllProducts({
    sortBy: sortBy,
    sortDir: sortDir,
  });

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
        <div className={cls['modal-btn']} onClick={() => setModal(!modal)}>
          <img src={settingsIcon} alt="" />
          <p className={cls['filter']}>filter</p>
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

      <div className={cls['modal']} id={!modal ? cls['modal'] : undefined}>
        <div>
          <Select
            value={sortDir}
            size="small"
            onChange={(e) => setSortDir(e.target.value as 'asc' | 'desc')}
            sx={{
              minWidth: 150,
              borderRadius: 2,
              color: '#145da0',
              border: '1px solid #fff',
              fontSize: '14px',
              height: '32px',
              '.MuiSvgIcon-root': { color: 'black' },
            }}
          >
            <MenuItem value="asc" defaultChecked>
              Pastdan tepage
            </MenuItem>
            <MenuItem value="desc">Tepadan pastga</MenuItem>
          </Select>
          <Select
            value={sortBy}
            size="small"
            onChange={(e) =>
              setSortBy(e.target.value as 'id' | 'price' | 'createdAt')
            }
            sx={{
              minWidth: 150,
              borderRadius: 2,
              color: '#145da0',
              border: '1px solid #fff',
              fontSize: '14px',
              height: '32px',
              '.MuiSvgIcon-root': { color: 'black' },
            }}
          >
            <MenuItem value="id">ID bo'yicha</MenuItem>
            <MenuItem value="price">Narx bo'yicha</MenuItem>
            <MenuItem value="createdAt" defaultChecked>
              Sana bo'yicha
            </MenuItem>
          </Select>
        </div>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            setModal(!modal);
            refetch();
          }}
        >
          Saqlash
        </Button>
      </div>
    </main>
  );
};

export default HomePage;
