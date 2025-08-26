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
    }, 2000);
  };

  return (
    <nav className={cls['nav']}>
      <div className="container" id={cls['nav-wrapper']}>
        <div className={cls['navigation']}>
          <h1>E-Commerce</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/orders">Orders</NavLink>
        </div>

        <div className={cls['profile']}>
          <NavLink to="/profile">Profile</NavLink>/
          {isAuthenticated ? (
            <span style={{ cursor: 'pointer' }} onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <NavLink to="/auth/login">Login</NavLink>
          )}
          <Select
            value={language}
            size="small"
            onChange={(e) => setLanguageState(e.target.value as Languages)}
            sx={{
              minWidth: 10,
              backgroundColor: 'white',
              borderRadius: 2,
              color: 'white',
              border: 'none',
              background: 'transparent',
            }}
          >
            <MenuItem value={Languages.uz} sx={{ color: '#145DA0' }}>
              {Languages.uz}
            </MenuItem>
            <MenuItem value={Languages.eng} sx={{ color: '#145DA0' }}>
              {Languages.eng}
            </MenuItem>
            <MenuItem value={Languages.ru} sx={{ color: '#145DA0' }}>
              {Languages.ru}
            </MenuItem>
          </Select>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLayout;
