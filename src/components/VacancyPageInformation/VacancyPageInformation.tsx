import { JobVacancy } from 'types';
import styles from './VacancyPageInformation.module.scss';

interface VacancyPageInformationProps {
  vacancy: JobVacancy;
}

export const VacancyPageInformation = ({
  vacancy,
}: VacancyPageInformationProps) => {
  return (
    <section className={styles.vacancyPageInformation}>
      <div className={styles.container}>
        <section className={styles.vacancyPageInformation__mainInfo}>
          <div className={styles.vacancyPageInformation__mainInfoWrapper}>
            <span
              className={
                styles.vacancyPageInformation__mainInfoWrapper__postedAt
              }
            >
              {vacancy?.postedAt}
            </span>
            <span
              className={
                styles.vacancyPageInformation__mainInfoWrapper__contract
              }
            >
              {vacancy?.contract}
            </span>
          </div>
          <h2 className={styles.vacancyPageInformation__position}>
            {vacancy?.position}
          </h2>
          <span className={styles.vacancyPageInformation__location}>
            {vacancy?.location}
          </span>
          <a
            className={styles.vacancyPageInformation__link}
            href={vacancy?.apply}
            target="__blank"
            rel="noreferrer noopener"
          >
            Apply Now
          </a>
        </section>
        <section className={styles.vacancyPageInformation__description}>
          <p className={styles.vacancyPageInformation__description__text}>
            {vacancy?.description}
          </p>
          <h3
            className={styles.vacancyPageInformation__description__requirements}
          >
            Requirements
          </h3>
          <p
            className={
              styles.vacancyPageInformation__description__requirementsDescription
            }
          >
            {vacancy?.requirements.content}
          </p>
          <ul
            className={
              styles.vacancyPageInformation__description__requirementsList
            }
          >
            {vacancy?.requirements.items.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
          <h3
            className={
              styles.vacancyPageInformation__description__responsibilities
            }
          >
            What You Will Do
          </h3>
          <p
            className={
              styles.vacancyPageInformation__description__responsibilitiesDescription
            }
          >
            {vacancy?.role.content}
          </p>
          <ol
            className={
              styles.vacancyPageInformation__description__responsibilitiesList
            }
          >
            {vacancy?.role.items.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
};
