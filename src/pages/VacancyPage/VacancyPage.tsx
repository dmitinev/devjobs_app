import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { JobVacancy } from 'types';
import { Container } from '../../components/Container';
import { DetailsFooter } from '../../components/DetailsFooter';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { VacancyPageHeader } from '../../components/VacancyPageHeader';
import { VacancyPageInformation } from '../../components/VacancyPageInformation';
import {
  ApiDataContext,
  ApiDataContextProvider,
} from '../../context/apiDataContext/ApiDataContext';
import styles from './VacancyPage.module.scss';

type VacancyPageType = {
  id: string;
};

export const VacancyPage = () => {
  const { id } = useParams<VacancyPageType>();
  const { originalApiData, isLoading } = useContext(ApiDataContext);

  const vacancy = useMemo(() => {
    return originalApiData.find(
      (vacancy) => vacancy.id === Number(id),
    ) as JobVacancy;
  }, [originalApiData, id]);

  return (
    <section className={styles.vacancyPage}>
      <Container>
        <Header />
        {isLoading && (
          <div className={styles.vacancyPage__loader}>
            <Loader />
          </div>
        )}
        {!isLoading && (
          <>
            <VacancyPageHeader vacancy={vacancy} />
            <VacancyPageInformation vacancy={vacancy} />
          </>
        )}
      </Container>
      {!isLoading && (
        <div className={styles.footerWrapper}>
          <ApiDataContextProvider>
            <DetailsFooter vacancy={vacancy} />
          </ApiDataContextProvider>
        </div>
      )}
    </section>
  );
};
