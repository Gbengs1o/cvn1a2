// components/dlmode.tsx
'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';

interface DlmodeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const DlmodeContext = createContext<DlmodeContextType | undefined>(undefined);

export const DlmodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // On mount, detect the saved or system theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Update document and local storage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <DlmodeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </DlmodeContext.Provider>
  );
};

export const useDlmode = () => {
  const context = useContext(DlmodeContext);
  if (!context) {
    throw new Error('useDlmode must be used within a DlmodeProvider');
  }
  return context;
};
