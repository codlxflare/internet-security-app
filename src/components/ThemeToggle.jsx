import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggle.css';

export default function ThemeToggle() {
  // Инициализируемся из LocalStorage, или по умолчанию 'light'
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

  // Синхронизируем класс на <body> и LocalStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggle} className="theme-toggle">
      {theme === 'light' 
        ? <FaMoon className="icon moon" title="Переключиться на тёмную тему" /> 
        : <FaSun className="icon sun" title="Переключиться на светлую тему" />
      }
    </button>
  );
}
