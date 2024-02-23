import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import styles from './MainPage.module.scss';

export const MainPage = () => (
  <main className={styles.mainPage}>
    <Container>
      <Header />
    </Container>
  </main>
);
