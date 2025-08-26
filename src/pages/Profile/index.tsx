import { useSelector } from 'react-redux';
import cls from './Profile.module.css';
import type { RootState } from '../../redux';
import { NavLink, useNavigate } from 'react-router';
const ProfilePage = () => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.authenticate
  );
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/auth/login');
  }
  return (
    <div className={cls['profile-wrapper']}>
      <div className="container">
        <img src="/avatar.avif" alt="default user image" />
        <hr />
        <p>
          <b>Username: </b>
          {user?.username}
        </p>
        <p>
          <b>Email: </b> {user?.email}
        </p>
        <p>
          <b>Role: </b> {user?.role}
        </p>
        <p>
          <b>Adminlik huquqi: </b>{' '}
          {user?.role === 'USER' ? (
            <NavLink to={'/dashboard'}>Ha</NavLink>
          ) : (
            "Yo'q"
          )}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
