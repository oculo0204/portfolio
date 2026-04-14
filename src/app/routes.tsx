import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from '../pages/MainPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';

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
        element: <ProjectDetailPage />,
      },
    ],
  },
]);
