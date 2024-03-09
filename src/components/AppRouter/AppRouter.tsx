import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ApiDataContextProvider } from '../../context/apiDataContext/ApiDataContext';
import { MainPage } from '../../pages/MainPage';
import { VacancyPage } from '../../pages/VacancyPage';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/devjobs_app/" element={<MainPage />} />,
    <Route
      path="/devjobs_app/:id"
      element={
        <ApiDataContextProvider>
          <VacancyPage />
        </ApiDataContextProvider>
      }
    />,
  ]),
);
