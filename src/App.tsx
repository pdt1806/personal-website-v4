import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { Error404 } from './pages/404';
import Home from './pages/Home';
import MoreAboutMe from './pages/MoreAboutMe';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/more',
        element: <MoreAboutMe />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MantineProvider
      theme={createTheme({
        fontFamily: 'Cabin, sans-serif',
        colors: {
          'bn-blue': [
            '#e3faff',
            '#d3effa',
            '#a9dbf1',
            '#7cc7e9',
            '#58b6e1',
            '#41abdd',
            '#31a6dc',
            '#1f90c4',
            '#0a80b0',
            '#006f9c',
          ],
        },
      })}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
