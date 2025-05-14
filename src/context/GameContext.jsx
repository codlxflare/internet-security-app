import React, { createContext, useReducer, useContext, useEffect } from 'react';
import levels from '../data/levels';
import { useAchievements } from './AchievementContext';

const KEY = 'game-state';
const init = JSON.parse(localStorage.getItem(KEY)) || {
  currentLevel: 1,
  score: 0,
  completed: Array(levels.length).fill(false)
};

function reducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_LEVEL': {
      const index = action.level - 1;
      if (index >= 0 && !state.completed[index]) {
        const completedCopy = [...state.completed];
        completedCopy[index] = true;
        return {
          ...state,
          completed: completedCopy,
          score: state.score + action.points,
          currentLevel: Math.min(levels.length, action.level + 1)
        };
      }
      return state;
    }
    
    case 'GO_TO_LEVEL':
      return { ...state, currentLevel: action.level };
      
    default:
      return state;
  }
}

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
  const { unlock } = useAchievements();
  const [state, dispatch] = useReducer(reducer, init);
  
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
    const cnt = state.completed.filter(Boolean).length;
    
    if (cnt === 1) unlock('first-win', 'Первое прохождение!');
    if (cnt === levels.length) unlock('all-complete', 'Все уровни пройдены!');
  }, [state, unlock]);
  
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}