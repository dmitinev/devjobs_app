import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ErrorPage } from '../../components/ErrorPage';
import { MainPage } from '../../pages/MainPage';
import { VacancyPage } from '../../pages/VacancyPage';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/devjobs_app/" element={<MainPage />} />,
    <Route path="/devjobs_app/:id" element={<VacancyPage />} />,
    <Route path="*" element={<ErrorPage />} />,
  ]),
);
