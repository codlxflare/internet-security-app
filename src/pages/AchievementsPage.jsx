import React from 'react';
import { useAchievements } from '../context/AchievementContext';
export default function AchievementsPage(){
  const { achievements } = useAchievements();
  const list=[
    {key:'first-win', label:'Первое прохождение'},
    {key:'all-complete', label:'Все уровни'},
    {key:'streak-5', label:'5-дневная серия'}
  ];
  return <div className="container my-5">
    <h2>Достижения</h2>
    <ul>{list.map(a=><li key={a.key}>{achievements[a.key]?'✅':'❌'} {a.label}</li>)}</ul>
  </div>;
}