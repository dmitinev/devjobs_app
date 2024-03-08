import { FooterLink } from '../../components/FooterLink';
import styles from './DetailsFooter.module.scss';

interface DetailsFooterProps {
  pageId: number;
}

export const DetailsFooter = ({ pageId }: DetailsFooterProps) => (
  <footer className={styles.detailsFooter}>
    <div className={styles.footerContainer}>
      <FooterLink pageId={pageId} />
    </div>
  </footer>
);
