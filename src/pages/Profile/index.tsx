import { useSelector } from 'react-redux';
import type { RootState } from '../../redux';
import { NavLink, useNavigate } from 'react-router';
import { useEffect } from 'react';
import cls from './Profile.module.css';

const ProfilePage = () => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.authenticate
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={cls.wrapper}>
      <div className={cls.card}>
        <img src="/avatar.avif" alt="default user" className={cls.avatar} />
        <h2 className={cls.username}>{user?.username}</h2>
        <p>
          <b>Email:</b> {user?.email}
        </p>
        <p>
          <b>Role:</b> {user?.role}
        </p>
        <p>
          <b>Adminlik huquqi:</b>{' '}
          {user?.role === 'ADMIN' ? (
            <NavLink to="/dashboard">Ha {'-->'}</NavLink>
          ) : (
            "Yo'q"
          )}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
