import { Container, Divider } from '@mantine/core';
import { useEffect } from 'react';
import { postLoading } from '../../utils';
import Education from './Education';
import MyBackground from './MyBackground';
import OtherAspects from './OtherAspects';

const MoreAboutMe = () => {
  useEffect(() => {
    postLoading();
  }, []);

  return (
    <Container size="xl">
      <MyBackground />
      <Divider my="xl" />
      <Education />
      <Divider my="xl" />
      <OtherAspects />
    </Container>
  );
};

export default MoreAboutMe;
