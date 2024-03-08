import { useContext } from 'react';
import { ApiDataContext } from '../../context/apiDataContext/ApiDataContext';
import styles from './FooterLink.module.scss';

interface FooterLinkProps {
  pageId: number;
}

export const FooterLink = ({ pageId }: FooterLinkProps) => {
  const { originalApiData } = useContext(ApiDataContext);
  const vacancy = originalApiData.find((vacancy) => vacancy.id === pageId);
  return (
    <a
      className={styles.footerLink}
      target="_blank"
      rel="noreferrer noopener"
      href={vacancy?.apply}
    >
      Apply Now
    </a>
  );
};
