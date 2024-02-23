import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/devjobs_app/" element={<MainPage />} />,
  ),
);
