import { ChangeEvent, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import styles from './ThemeSwitcher.module.scss';
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        id="themeSwitch"
        name="theme-switch"
        className={styles.themeSwitcher}
        onChange={handleThemeChange}
      />
      <label htmlFor="themeSwitch" className={styles.themeSwitcher__label}>
        <span></span>
      </label>
    </div>
  );
};
