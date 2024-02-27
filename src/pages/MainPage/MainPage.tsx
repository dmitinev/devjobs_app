import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import styles from './MainPage.module.scss';

export const MainPage = () => (
  <main className={styles.mainPage}>
    <Container>
      <Header />
      <div className={styles.searchBar}>
        <SearchForm placeholderTitle="Filter by title..." />
      </div>
    </Container>
  </main>
);
