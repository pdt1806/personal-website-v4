import { Container, Divider } from '@mantine/core';
import Technologies from './Technologies';
import { Values } from './Values';

export default function Skills() {
  return (
    <Container size="lg" id="skills">
      {/* <Divider my="xl" /> */}
      <Technologies />
      <Divider my="xl" />
      <Values />
    </Container>
  );
}
