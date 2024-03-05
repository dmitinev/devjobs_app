import { useContext } from 'react';
import { Card } from '../../components/Card';
import { ApiDataContext } from '../../context/apiDataContext/ApiDataContext';
import styles from './CardsPalette.module.scss';

export const CardsPalette = () => {
  const { filteredApiData } = useContext(ApiDataContext);
  return (
    <section className={styles.paletteWrapper}>
      <section className={styles.cardsPalette}>
        {filteredApiData.map((vacancy) => {
          return <Card key={vacancy.id} {...vacancy} />;
        })}
      </section>
      {!!filteredApiData.length && (
        <button className={styles.cardsPalette__btnLoad}>Load More</button>
      )}
    </section>
  );
};
