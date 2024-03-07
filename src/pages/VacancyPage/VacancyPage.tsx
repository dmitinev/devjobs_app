import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { VacancyPageHeader } from '../../components/VacancyPageHeader';
import { VacancyPageInformation } from '../../components/VacancyPageInformation';
import { ApiDataContextProvider } from '../../context/apiDataContext/ApiDataContext';
import styles from './VacancyPage.module.scss';

export const VacancyPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <section className={styles.vacancyPage}>
      <Container>
        <Header />
        <ApiDataContextProvider>
          <VacancyPageHeader pageId={Number(id)} />
          <VacancyPageInformation pageId={Number(id)} />
        </ApiDataContextProvider>
      </Container>
    </section>
  );
};
