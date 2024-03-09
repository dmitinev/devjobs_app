import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Loader } from '../../components/Loader';
import { ApiDataContext } from '../../context/apiDataContext/ApiDataContext';
import styles from './CardsPalette.module.scss';

export const CardsPalette = () => {
  const { filteredApiData, isLoading } = useContext(ApiDataContext);

  if (isLoading) {
    return (
      <div className={styles.cardsPalette__loader}>
        <Loader />
      </div>
    );
  }

  return (
    <section className={styles.paletteWrapper}>
      <section className={styles.cardsPalette}>
        {filteredApiData.map((vacancy) => {
          return (
            <Link
              className={styles.link}
              key={vacancy.id}
              to={`/devjobs_app/${vacancy.id}`}
            >
              <Card {...vacancy} />
            </Link>
          );
        })}
      </section>
      {!!filteredApiData.length && (
        <button className={styles.cardsPalette__btnLoad}>Load More</button>
      )}
    </section>
  );
};
