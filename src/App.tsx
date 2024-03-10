import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import { Error404 } from './pages/404';
import { Contact } from './pages/Contact';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Works from './pages/Works';

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
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/contact',
        element: <Contact />,
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
