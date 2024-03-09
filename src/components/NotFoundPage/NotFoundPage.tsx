import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <div className={styles.errorPage}>
    <h1 className={styles.errorPage__heading}>Whoops, page not found...</h1>
    <Link to="/devjobs_app/" className={styles.errorPage__link}>
      Go back
    </Link>
  </div>
);
