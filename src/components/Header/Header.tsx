import Logo from '../../assets/desktop/logo.svg?react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <header className={styles.header}>
    <Logo />
    <ThemeSwitcher />
  </header>
);
