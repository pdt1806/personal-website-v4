import { Box } from '@mantine/core';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Footer';
import { Header } from '../Header';
import HeaderNoti from '../HeaderNoti';

const Layout = () => (
  <>
    <ScrollRestoration />
    <Header />
    <HeaderNoti />
    <Box style={{ overflowX: 'hidden' }}>
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default Layout;
