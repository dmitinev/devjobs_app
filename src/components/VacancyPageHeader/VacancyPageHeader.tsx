import { useContext } from 'react';
import { ApiDataContext } from '../../context/apiDataContext/ApiDataContext';
import styles from './VacancyPageHeader.module.scss';

interface VacancyPageHeaderProps {
  pageId: number;
}

export const VacancyPageHeader = ({ pageId }: VacancyPageHeaderProps) => {
  const { originalApiData } = useContext(ApiDataContext);

  const vacancy = originalApiData.find((vacancy) => vacancy.id === pageId);
  return (
    <section className={styles.vacancyPageHeader}>
      <div
        className={styles.vacancyPageHeader__logo}
        style={{ backgroundColor: vacancy?.logoBackground }}
      >
        <img src={vacancy?.logo} alt="company logo" />
      </div>
      <div className={styles.vacancyPageHeader__companyInfo}>
        <span className={styles.vacancyPageHeader__companyInfo__name}>
          {vacancy?.company}
        </span>
        <span className={styles.vacancyPageHeader__companyInfo__webSite}>
          {vacancy?.website}
        </span>
      </div>
      <a
        className={styles.vacancyPageHeader__websiteBtn}
        href={vacancy?.website}
        target="__blank"
        rel="noreferrer noopener"
      >
        Company Site
      </a>
    </section>
  );
};
