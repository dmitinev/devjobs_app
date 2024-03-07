import { Link } from 'react-router-dom';
import Logo from '../../assets/desktop/logo.svg?react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Link className={styles.header__link} to="/devjobs_app/">
      <Logo />
    </Link>
    <ThemeSwitcher />
  </header>
);
