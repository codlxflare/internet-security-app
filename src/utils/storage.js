export const USERS_KEY = 'users';
export const CUR_USER_KEY = 'currentUser';

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CUR_USER_KEY)) || null;
}

export function setCurrentUser(user) {
  localStorage.setItem(CUR_USER_KEY, JSON.stringify(user));
}

export function removeCurrentUser() {
  localStorage.removeItem(CUR_USER_KEY);
}
