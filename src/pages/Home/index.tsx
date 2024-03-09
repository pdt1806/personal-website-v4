import { HeroHeader } from '@/components/HeroHeader';
import { Box, Container, Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Education from './Education';
import MoreAboutMe from './MoreAboutMe';
import OtherAspects from './OtherAspects';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  const mainContent = (
    <>
      <Divider mt="xl" />
      <MoreAboutMe />
      <Divider mt="xl" />
      <Education />
      <Divider mt="xl" />
      <OtherAspects />
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
