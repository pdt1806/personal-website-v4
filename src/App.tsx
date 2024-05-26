import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { Error404 } from './pages/404';
import All from './pages/All';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <All />,
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
      })}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
