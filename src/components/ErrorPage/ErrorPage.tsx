import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

export const ErrorPage = () => (
  <div className={styles.errorPage}>
    <h1 className={styles.errorPage__heading}>Whoops, error has happened...</h1>
    <Link to="/devjobs_app/" className={styles.errorPage__link}>
      Go back
    </Link>
  </div>
);
