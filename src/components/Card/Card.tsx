import { JobVacancy } from '../../types/';
import styles from './Card.module.scss';

interface CardProps
  extends Pick<
    JobVacancy,
    | 'company'
    | 'postedAt'
    | 'contract'
    | 'position'
    | 'location'
    | 'logoBackground'
  > {
  logo: string;
}

export const Card = ({
  logo,
  company,
  postedAt,
  contract,
  position,
  location,
  logoBackground,
}: CardProps) => (
  <div className={styles.card}>
    <div className={styles.container}>
      <div
        className={styles.card__logoBackground}
        style={{ backgroundColor: logoBackground }}
      >
        <img
          src={logo}
          alt="card logo company"
          className={styles.card__imageLogo}
        />
      </div>
      <div className={styles.card__vacancyInfo}>
        <span className={styles.card__vacancyInfo__postedAt}>{postedAt}</span>
        <span className={styles.card__vacancyInfo__contract}>{contract}</span>
      </div>
      <h2 className={styles.card__position}>{position}</h2>
      <span className={styles.card__company}>{company}</span>
      <span className={styles.card__location}>{location}</span>
    </div>
  </div>
);
