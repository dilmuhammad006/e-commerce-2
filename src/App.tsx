import { Route, Routes } from 'react-router';
import {
  HomePage,
  LoginPage,
  NotfoundPage,
  ProfilePage,
  RegisterPage,
} from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default App;
