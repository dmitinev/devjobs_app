import { JobVacancy } from 'types';
import { FooterLink } from '../../components/FooterLink';
import styles from './DetailsFooter.module.scss';

interface DetailsFooterProps {
  vacancy: JobVacancy;
}

export const DetailsFooter = ({ vacancy }: DetailsFooterProps) => {
  return (
    <footer className={styles.detailsFooter}>
      <div className={styles.footerContainer}>
        <h3 className={styles.detailsFooter__position}>{vacancy?.position}</h3>
        <span className={styles.detailsFooter__company}>
          {vacancy?.company}
        </span>
        <div className={styles.detailsFooter__link}>
          <FooterLink url={vacancy?.apply} />
        </div>
      </div>
    </footer>
  );
};
