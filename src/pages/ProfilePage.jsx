// src/pages/ProfilePage.jsx
import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Если нет залогиненного пользователя — редиректим на /login
  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  // Пока идёт редирект, ничего не рендерим
  if (!user) {
    return null;
  }

  const { levelsCompleted, score } = user.stats;

  return (
    <div className="container my-5">
      <h2>Профиль: {user.username}</h2>
      <ul className="list-group">
        <li className="list-group-item">
          Пройдено уровней: <strong>{levelsCompleted}</strong>
        </li>
        <li className="list-group-item">
          Баллы: <strong>{score}</strong>
        </li>
      </ul>
    </div>
  );
}
