import { Box, Center, Container, Divider, Space } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { HeroHeader } from '../../components/HeroHeader';
import Education from './Education';
import Introduction from './Introduction';
import MoreAboutMe from './MoreAboutMe';
import OtherAspects from './OtherAspects';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  const mainContent = (
    <>
      <Space h="md" />
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
        <Center>
          <Box mx="xl" maw={1600}>
            {mainContent}
          </Box>
        </Center>
      )}
    </>
  );
}
