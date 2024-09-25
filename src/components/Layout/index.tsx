import { Box } from '@mantine/core';
import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Footer';
import { Header } from '../Header';
import ModalNoti from '../ModalNoti';

const Layout = () => {
  const modalNoti = ModalNoti();

  useEffect(() => {
    modalNoti.checkTimeout(2, 5000);
  }, []);

  return (
    <>
      {modalNoti.element}
      <ScrollRestoration />
      <Header />
      {/* <HeaderNoti /> */}
      <Box style={{ overflowX: 'hidden' }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
