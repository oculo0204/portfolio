import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from '../pages/MainPage';
import LinkuProjectDetail from '../pages/projectdetail/LinkuProjectDetail';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/project/:id',
        element: <LinkuProjectDetail />,
      },
    ],
  },
]);
