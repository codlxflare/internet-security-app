import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './context/AuthContext';
import { AchievementProvider } from './context/AchievementContext';
import { GameProvider } from './context/GameContext';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AchievementPage from './pages/AchievementsPage';
import DescriptionPage from './pages/DescriptionPage';
import LevelPage from './pages/LevelPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <AuthProvider>
      <AchievementProvider>
        <GameProvider>
          <Router>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/achievements" element={<AchievementPage />} />
                <Route path="/description" element={<DescriptionPage />} />
                <Route path="/level/:id" element={<LevelPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </div>
            <ToastContainer position="top-center" />
          </Router>
        </GameProvider>
      </AchievementProvider>
    </AuthProvider>
  );
}
