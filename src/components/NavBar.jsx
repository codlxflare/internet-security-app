import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import './NavBar.css';

export default function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">Интернет-безопасность</NavLink>
      
      <div className="nav-links">
        {['achievements', 'description', 'shop'].map((path) => (
          <NavLink
            key={path}
            to={`/${path}`}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <motion.span whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }}>
              {path === 'achievements' ? '🏆 Достижения'
                : path === 'description' ? 'ℹ️ О проекте'
                : '🛒 Магазин'}
            </motion.span>
          </NavLink>
        ))}
      </div>
      <div className="nav-actions">
        <ThemeToggle />
        {user ? (
          <motion.div whileHover={{ scale:1.05 }} className="user-menu">
            <NavLink to="/profile" className="nav-user">{user.username}</NavLink>
            <button onClick={logout} className="btn btn-outline-danger btn-sm">Выход</button>
          </motion.div>
        ) : (
          <div className="auth-buttons">
            <NavLink to="/login" className="btn btn-outline-primary btn-sm">Вход</NavLink>
            <NavLink to="/register" className="btn btn-primary btn-sm">Регистрация</NavLink>
          </div>
        )}
      </div>
    </nav>
);
}
