import styles from './ThemeSwitcher.module.scss';
export const ThemeSwitcher = () => (
  <div className={styles.wrapper}>
    <input
      type="checkbox"
      id="themeSwitch"
      name="theme-switch"
      className={styles.themeSwitcher}
    />
    <label htmlFor="themeSwitch" className={styles.themeSwitcher__label}>
      <span></span>
    </label>
  </div>
);
