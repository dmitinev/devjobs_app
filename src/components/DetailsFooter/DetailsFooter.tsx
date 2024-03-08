import { useContext } from 'react';
import { FooterLink } from '../../components/FooterLink';
import { ApiDataContext } from '../../context/apiDataContext/ApiDataContext';
import styles from './DetailsFooter.module.scss';

interface DetailsFooterProps {
  pageId: number;
}

export const DetailsFooter = ({ pageId }: DetailsFooterProps) => {
  const { originalApiData } = useContext(ApiDataContext);
  const vacancy = originalApiData.find((vacancy) => vacancy.id === pageId);
  return (
    <footer className={styles.detailsFooter}>
      <div className={styles.footerContainer}>
        <h3 className={styles.detailsFooter__position}>{vacancy?.position}</h3>
        <span className={styles.detailsFooter__company}>
          {vacancy?.company}
        </span>
        <div className={styles.detailsFooter__link}>
          <FooterLink pageId={pageId} />
        </div>
      </div>
    </footer>
  );
};
