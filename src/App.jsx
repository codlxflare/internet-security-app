import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AchievementProvider } from './context/AchievementContext';
import { GameProvider } from './context/GameContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';
import LevelPage from './pages/LevelPage';
import ShopPage from './pages/ShopPage';
import AchievementsPage from './pages/AchievementsPage';
import { ToastContainer } from 'react-toastify';
export default function App(){
  return (
    <ThemeProvider>
      <AchievementProvider>
        <GameProvider>
          <Router>
            <NavBar/>
            <main className="pb-4"><Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/description" element={<DescriptionPage/>}/>
              <Route path="/level/:levelId" element={<LevelPage/>}/>
              <Route path="/shop" element={<ShopPage/>}/>
              <Route path="/achievements" element={<AchievementsPage/>}/>
            </Routes></main>
            <Footer/><ToastContainer position="top-center"/>
          </Router>
        </GameProvider>
      </AchievementProvider>
    </ThemeProvider>
  );
}