import { CardsPalette } from '../../components/CardsPalette';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { ApiDataContextProvider } from '../../context/apiDataContext/ApiDataContext';
import SearchDataContextProvider from '../../context/searchDataContext/SearchDataContext';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <Container>
        <Header />
        <SearchDataContextProvider>
          <ApiDataContextProvider>
            <div className={styles.searchBar}>
              <SearchForm />
            </div>
            <CardsPalette />
          </ApiDataContextProvider>
        </SearchDataContextProvider>
      </Container>
    </main>
  );
};
