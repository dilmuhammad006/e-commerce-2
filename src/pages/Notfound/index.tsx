import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import cls from './NotfoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.code}>404</h1>
      <p className={cls.message}>
        Oops! The page you are looking for doesn't exist.
      </p>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
