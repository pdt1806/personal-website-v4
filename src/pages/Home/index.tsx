import { HeroHeader } from '@/components/HeroHeader';
import { Affix, Box, Button, Container, Divider, Transition, rem } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Education from './Education';
import MoreAboutMe from './MoreAboutMe';
import OtherAspects from './OtherAspects';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 62em)');
  const [scroll, _] = useWindowScroll();

  useEffect(() => {
    console.log(scroll.y, document.body.scrollHeight);
  }, [scroll]);

  const mainContent = (
    <>
      <Divider mt="xl" mb="xl" />
      <MoreAboutMe />
      <Divider mt="xl" mb="xl" />
      <Education />
      <Divider mt="xl" mb="xl" />
      <OtherAspects />
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
              to="/skills"
            >
              Check out my Skills
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );

  return (
    <>
      <HeroHeader />
      {isMobile ? (
        <Container>{mainContent}</Container>
      ) : (
        <Box
          style={{
            marginLeft: 'calc(var(--mantine-spacing-xl) * 3)',
            marginRight: 'calc(var(--mantine-spacing-xl) * 3)',
          }}
        >
          {mainContent}
        </Box>
      )}
    </>
  );
}
