import type { ReactNodeChildrenProps } from '../../types';
import NavbarLayout from '../Navbar';
import cls from './MainLayout.module.css';

const MainLayout = ({ children }: ReactNodeChildrenProps) => {
  return (
    <div className={cls['main-wrapper']}>
      <NavbarLayout />
      {children}
    </div>
  );
};

export default MainLayout;
