import { Affix, Button, Container, Divider, Transition, rem } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import Technologies from './Technologies';
import { Values } from './Values';

export default function Skills() {
  const [scroll, _] = useWindowScroll();
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Container>
      <Technologies />
      <Divider mt="xl" mb="xl" />
      <Values />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition
          transition="slide-up"
          mounted={document.body.scrollHeight - (isMobile ? 1150 : 1300) < scroll.y}
        >
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              component={Link}
              to="/works"
            >
              Check out my Works
            </Button>
          )}
        </Transition>
      </Affix>
    </Container>
  );
}
