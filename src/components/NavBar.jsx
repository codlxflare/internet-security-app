import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Интернет-безопасность</Link>
      <div className="nav-links">
        <Link to="/achievements">Достижения</Link>
        <Link to="/description">О проекте</Link>
        <Link to="/shop">Магазин</Link>
        {user ? (
          <>
            <Link to="/profile">{user.username}</Link>
            <button onClick={logout} className="btn btn-outline-danger btn-sm">Выход</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-primary btn-sm">Вход</Link>
            <Link to="/register" className="btn btn-primary btn-sm">Регистрация</Link>
          </>
        )}
      </div>
    </nav>
  );
}
