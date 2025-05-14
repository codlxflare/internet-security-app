import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import levels from '../data/levels';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { state } = useGame();
  const next = state.completed.findIndex(c => !c) + 1;
  const target = next || levels.length;
  const progress = Math.round(state.completed.filter(Boolean).length / levels.length * 100);

  return (
    <>
      <header className="hero-section">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="display-4"
        >
          Учись, играя!
        </motion.h1>
        <p>Стань мастером интернет-безопасности</p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <NavLink to={`/level/${target}`} className="btn btn-primary btn-lg">
            Играть
          </NavLink>
        </motion.div>
      </header>

      <section className="container my-4 text-center">
        <h2>Прогресс</h2>
        <div className="progress mx-auto" style={{ maxWidth: '400px' }}>
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
        <p>Баллы: <strong>{state.score}</strong></p>
      </section>

      <section className="container my-4">
        <h2 className="text-center">Уровни</h2>
        <div className="row">
          {levels.map((lvl, i) => (
            <motion.div 
              key={lvl.id}
              className="col-md-4 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`card h-100 ${state.completed[lvl.id - 1] ? 'border-success' : ''}`}>
                <img src={lvl.image} className="card-img-top" alt={lvl.title} />
                <div className="card-body text-center">
                  <h5>Уровень {lvl.id}</h5>
                  <p>{lvl.title}</p>
                  <NavLink 
                    to={`/level/${lvl.id}`}
                    className={`btn ${state.completed[lvl.id - 1] ? 'btn-success' : 'btn-outline-primary'}`}
                  >
                    {state.completed[lvl.id - 1] ? 'Пройдено' : 'Играть'}
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}