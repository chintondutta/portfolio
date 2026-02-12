'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const TOTAL_THEMES = 10;

type ThemeContextType = {
  changeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<number | null>(null);

  useEffect(() => {
    // Set an initial random theme on mount
    setCurrentTheme(Math.floor(Math.random() * TOTAL_THEMES));
  }, []);

  useEffect(() => {
    if (currentTheme !== null) {
      document.body.dataset.theme = currentTheme.toString();
    }
  }, [currentTheme]);

  const changeTheme = useCallback(() => {
    setCurrentTheme((prevTheme) => {
      if (prevTheme === null) return 0;
      let newTheme;
      do {
        newTheme = Math.floor(Math.random() * TOTAL_THEMES);
      } while (newTheme === prevTheme);
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
