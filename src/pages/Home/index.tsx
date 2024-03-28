import { HeroHeader } from '@/components/HeroHeader';
import { Box, Container, Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Education from './Education';
import Introduction from './Introduction';
import MoreAboutMe from './MoreAboutMe';
import OtherAspects from './OtherAspects';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  const mainContent = (
    <>
      <Divider my="xl" />
      <MoreAboutMe />
      <Divider my="xl" />
      <Education />
      <Divider my="xl" />
      <OtherAspects />
    </>
  );

  return (
    <>
      <HeroHeader />
      <Introduction />
      {isMobile ? (
        <Container>{mainContent}</Container>
      ) : (
        <Box
          style={{
            marginLeft: 'calc(var(--mantine-spacing-xl) * 5)',
            marginRight: 'calc(var(--mantine-spacing-xl) * 5)',
          }}
        >
          {mainContent}
        </Box>
      )}
    </>
  );
}
