import { NavLink, useNavigate } from 'react-router';
import cls from './NavbarLayout.module.css';
import { useEffect, useState } from 'react';
import { setLanguage } from '../../utils';
import { Languages } from '../../types';
import { Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux';
import { logout } from '../../redux/reducers';
import toast from 'react-hot-toast';

const NavbarLayout = () => {
  const [language, setLanguageState] = useState<Languages>(() => {
    const savedLang = localStorage.getItem('language') as Languages | null;
    return savedLang ? savedLang : Languages.uz;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authenticate
  );

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Muvaffaqiyatli tizimdan chiqish');
    setTimeout(() => {
      navigate('/auth/login');
    }, 1500);
  };

  return (
    <nav className={cls['nav']}>
      <div className="container" id={cls['nav-wrapper']}>
        <h1 className={cls['logo']} onClick={() => navigate('/')}>
          E-Commerce
        </h1>

        <div className={cls['navigation']}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/basket">Basket</NavLink>
          <NavLink to="/orders">Orders</NavLink>
        </div>

        <div className={cls['profile']}>
          {isAuthenticated ? (
            <>
              <NavLink to="/profile">Profile</NavLink>
              <span
                style={{ cursor: 'pointer', fontWeight: 500 }}
                onClick={handleLogout}
              >
                Logout
              </span>
            </>
          ) : (
            <NavLink to="/auth/login">Login</NavLink>
          )}

          <Select
            value={language}
            size="small"
            onChange={(e) => setLanguageState(e.target.value as Languages)}
            sx={{
              minWidth: 80,
              borderRadius: 2,
              color: 'white',
              border: '1px solid #fff',
              fontSize: '14px',
              height: '32px',
              '.MuiSvgIcon-root': { color: 'white' },
            }}
          >
            <MenuItem value={Languages.uz}>{Languages.uz}</MenuItem>
            <MenuItem value={Languages.eng}>{Languages.eng}</MenuItem>
            <MenuItem value={Languages.ru}>{Languages.ru}</MenuItem>
          </Select>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLayout;
