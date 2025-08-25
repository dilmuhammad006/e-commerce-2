import type { Languages } from '../types';

export const setLanguage = (language: Languages) => {
  localStorage.removeItem('language');
  localStorage.setItem('language', language);
};
