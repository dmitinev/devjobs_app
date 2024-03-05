import { ReactNode, createContext, useEffect, useMemo } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

type Theme = 'light' | 'dark';

export interface IThemeContext {
  theme: Theme;
  // eslint-disable-next-line no-unused-vars
  setTheme: (value: Theme) => void;
}

interface IThemeContextProvider {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const [savedTheme, setSavedTheme] = useLocalStorage<Theme>('theme', 'light');

  const handleSetTheme = (newTheme: Theme) => {
    setSavedTheme(newTheme);
  };

  const value = useMemo(() => {
    return {
      theme: savedTheme,
      setTheme: handleSetTheme,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedTheme]);

  useEffect(() => {
    const handleComputerPreferedTheme = () => {
      const systemScheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      setSavedTheme(systemScheme as Theme);
    };
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleComputerPreferedTheme);
    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleComputerPreferedTheme);
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', savedTheme);
  }, [savedTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
