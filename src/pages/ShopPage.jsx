import React from 'react';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';

export default function ShopPage() {
  const { state, dispatch } = useGame();
  
  const items = [
    { 
      id: 1, 
      title: 'Скин для персонажа', 
      cost: 100, 
      image: '/assets/images/selector.png' 
    },
    { 
      id: 2, 
      title: 'Фоновая музыка', 
      cost: 150, 
      image: '/assets/images/music.png' 
    },
    { 
      id: 3, 
      title: 'Эмблема', 
      cost: 200, 
      image: '/assets/images/avatar.png' 
    }
  ];

  const buy = (item) => {
    if (state.score >= item.cost) {
      dispatch({ 
        type: 'COMPLETE_LEVEL', 
        level: 0, 
        points: -item.cost 
      });
    } else {
      alert('Недостаточно баллов');
    }
  };

  return (
    <div className="container my-5">
      <h2>Магазин</h2>
      <div className="row">
        {items.map(item => (
          <motion.div 
            key={item.id} 
            className="col-md-4 mb-3" 
            whileHover={{ scale: 1.05 }}
          >
            <div className="card text-center p-3">
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ maxHeight: '120px' }} 
              />
              <h5>{item.title}</h5>
              <p>Цена: {item.cost}</p>
              <button 
                className="btn btn-success" 
                onClick={() => buy(item)}
              >
                Купить
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}