import React from 'react';
import { NavLink } from 'react-router-dom';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { useTheme } from '../context/ThemeContext';
export default function NavBar() {
  const { dark, toggle } = useTheme();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Интернет-безопасность</NavLink>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon"/></button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><NavLink className="nav-link" to="/description">О проекте</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/shop">Магазин</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/achievements">Достижения</NavLink></li>
          </ul>
          <div className="d-flex align-items-center ms-3">
            <span className="me-1">🌙</span>
            <Toggle checked={dark} onChange={toggle} icons={false}/>
            <span className="ms-1">☀️</span>
          </div>
        </div>
      </div>
    </nav>
  );
}