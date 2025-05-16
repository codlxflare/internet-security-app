// src/pages/HomePage.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';
import { useAchievements } from '../context/AchievementContext';
import levels from '../data/levels.js';
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaFire,
  FaMedal
} from 'react-icons/fa';
import './HomePage.css';

export default function HomePage() {
  const { state } = useGame();
  const { user } = useAuth();
  const achievementsCtx = useAchievements();
  const badges = Array.isArray(achievementsCtx?.badges) ? achievementsCtx.badges : [];

  const levelsList = Array.isArray(levels) ? levels : [];
  const earned = Array.isArray(user?.stats?.badges) ? user.stats.badges : [];

  const nextIdx = state.completed.findIndex(c => !c);
  const next = nextIdx === -1 ? levelsList.length : nextIdx + 1;
  const progress = levelsList.length
    ? Math.round(state.completed.filter(Boolean).length / levelsList.length * 100)
    : 0;
  const streak = user?.stats?.streak || 0;

  return (
    <>
      {/* Анимированный фон */}
      <div className="hero-bg-shapes">
        <div className="shape shape1" />
        <div className="shape shape2" />
        <div className="shape shape3" />
      </div>

      {/* Герой-секция */}
      <header className="hero-section">
        <motion.h1
          className="hero-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Учись, играя!
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Стань мастером интернет-безопасности
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <NavLink to={`/level/${next}`} className="btn btn-primary btn-lg hero-btn">
            Начать уровень {next}
          </NavLink>
        </motion.div>
      </header>

      {/* Статистические карточки */}
      <section className="stats-cards">
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <div>
            <h3>{progress}%</h3>
            <p>Прогресс</p>
          </div>
        </div>
        <div className="stat-card">
          <FaMedal className="stat-icon" />
          <div>
            <h3>{state.score}</h3>
            <p>Баллы</p>
          </div>
        </div>
        <div className="stat-card">
          <FaFire className="stat-icon fire" />
          <div>
            <h3>{streak} дн.</h3>
            <p>Стрик</p>
          </div>
        </div>
      </section>

      {/* Карусель бейджей */}
      <section className="badges-carousel">
        
        <div className="badges-list">
          {badges.map(b => (
            <div
              key={b.id}
              className={`badge-item ${earned.includes(b.id) ? 'unlocked' : ''}`}
              title={b.name}
            >
              <span className="icon">{b.icon}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Сетка уровней */}
      <section className="levels-section">
        <h2 className="levels-heading">Уровни</h2>
        <div className="levels-grid">
          {levelsList.map((lvl, i) => (
            <motion.div
              key={lvl.id}
              className="level-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="card-image">
                <img src={lvl.image} alt={lvl.title} />
                <div className="card-level-badge">Уровень {lvl.id}</div>
              </div>
              <div className="card-body">
                <h3 className="card-title">{lvl.title}</h3>
                <p className="card-instructions">{lvl.instructions}</p>
                <NavLink
                  to={`/level/${lvl.id}`}
                  className={`btn ${state.completed[lvl.id - 1] ? 'btn-success' : 'btn-outline-primary'}`}
                >
                  {state.completed[lvl.id - 1] ? 'Пройдено' : 'Играть'}
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
