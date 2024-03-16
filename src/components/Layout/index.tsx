import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Footer';
import { Header } from '../Header';

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
