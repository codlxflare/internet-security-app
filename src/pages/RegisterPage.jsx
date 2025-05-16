import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handle = e => {
    e.preventDefault();
    try {
      register(form);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container my-5">
      <h2>Регистрация</h2>
      <form onSubmit={handle}>
        <input
          className="form-control my-2"
          placeholder="Имя пользователя"
          value={form.username}
          onChange={e => setForm({...form, username: e.target.value})}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Пароль"
          value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}
        />
        <button type="submit" className="btn btn-success">Зарегистрироваться</button>
      </form>
      {error && <Modal title="Ошибка" onClose={() => setError(null)}>{error}</Modal>}
    </div>
  );
}
