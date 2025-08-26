import { Route, Routes } from 'react-router';
import {
  BasketPage,
  HomePage,
  LoginPage,
  NotfoundPage,
  OrdersPage,
  ProductDetailsPage,
  ProfilePage,
  RegisterPage,
} from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/orders" element={<OrdersPage />} />

      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default App;
