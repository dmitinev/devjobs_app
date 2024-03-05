import { CardsPalette } from '../../components/CardsPalette';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { ApiDataContextProvider } from '../../context/apiDataContext/ApiDataContext';
import SearchDataContextProvider from '../../context/searchDataContext/SearchDataContext';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const windowWidth = useWindowDimensions().width;
  return (
    <main className={styles.mainPage}>
      <Container>
        <Header />
        <SearchDataContextProvider>
          <ApiDataContextProvider>
            <div className={styles.searchBar}>
              <SearchForm
                placeholderTitle={
                  windowWidth > 1440
                    ? 'Filter by title, companies, expertise..'
                    : 'Filter by title..'
                }
                placeholderLocation="Filter by location.."
              />
            </div>
            <CardsPalette />
          </ApiDataContextProvider>
        </SearchDataContextProvider>
      </Container>
    </main>
  );
};
