import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './ProfilePage.css';

const TOTAL_LEVELS = 10;

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => { if(!user) navigate('/login',{replace:true}); },[user,navigate]);
  if(!user) return null;
  const { levelsCompleted, score } = user.stats;
  const percent = Math.round((levelsCompleted / TOTAL_LEVELS) * 100);

  return (
    <motion.div className="profile" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
      <Confetti numberOfPieces={100} recycle={false}/>
      <div className="profile-header">
        <div className="avatar">{user.username.charAt(0).toUpperCase()}</div>
        <div className="info"><h2>{user.username}</h2><p>Осталось пройти уровней: {TOTAL_LEVELS-levelsCompleted}</p></div>
      </div>
      <div className="stats-cards">
        <motion.div whileHover={{y:-5}} className="card"><FaCheckCircle className="icon success"/><div><h3>{levelsCompleted}</h3><p>Уровней</p></div></motion.div>
        <motion.div whileHover={{y:-5}} className="card"><FaStar className="icon star"/><div><h3>{score}</h3><p>Баллов</p></div></motion.div>
      </div>
      <div className="progress-section">
        <p>Прогресс: <strong>{percent}%</strong></p>
        <div className="progress-bar"><motion.div className="progress-fill" style={{width:`${percent}%`}} initial={{width:0}} animate={{width:`${percent}%`}} transition={{duration:1}}/></div>
        <div className="next">Следующий уровень <FaChevronRight/></div>
      </div>
    </motion.div>
  );
}