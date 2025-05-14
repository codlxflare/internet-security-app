import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const AchContext = createContext();
export const useAchievements = () => useContext(AchContext);
export function AchievementProvider({ children }) {
  const [ach, setAch] = useState(() => JSON.parse(localStorage.getItem('achievements')) || {});
  useEffect(() => localStorage.setItem('achievements', JSON.stringify(ach)), [ach]);
  const unlock = (k, m) => { if (!ach[k]) { setAch(a => ({...a,[k]:true})); toast.success('🏆 ' + m); } };
  return <AchContext.Provider value={{ achievements: ach, unlock }}>{children}</AchContext.Provider>;
}