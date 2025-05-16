import React, { createContext, useContext, useState } from 'react';
import {
  getUsers, saveUsers,
  getCurrentUser, setCurrentUser, removeCurrentUser
} from '../utils/storage';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser);

  const register = ({ username, password }) => {
    const users = getUsers();
    if (users.find(u => u.username === username)) {
      throw new Error('Пользователь уже существует');
    }
    const newUser = { username, password, stats: { levelsCompleted: 0, score: 0 } };
    users.push(newUser);
    saveUsers(users);
    setCurrentUser(newUser);
    setUser(newUser);
  };

  const login = ({ username, password }) => {
    const users = getUsers();
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) {
      throw new Error('Неверное имя или пароль');
    }
    setCurrentUser(found);
    setUser(found);
  };

  const logout = () => {
    removeCurrentUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
