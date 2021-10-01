export const getStoredAuthToken = () => localStorage.getItem('authToken');

export const storeAuthToken = token => localStorage.setItem('authToken', token);

export const removeStoredAuthToken = () => localStorage.removeItem('authToken');

export const getStoredUser = () => JSON.parse(localStorage.getItem('userProfil'));

export const storeUser = profil => localStorage.setItem('userProfil', profil);

export const removeUser = () => localStorage.removeItem('userProfil');