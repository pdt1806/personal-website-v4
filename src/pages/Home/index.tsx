import { HeroHeader } from '@/components/HeroHeader';
import NextPageAffix from '@/components/NextPageAffix';
import { Box, Container, Divider } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import Education from './Education';
import MoreAboutMe from './MoreAboutMe';
import OtherAspects from './OtherAspects';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 62em)');
  const [scroll, _] = useWindowScroll();

  const [affixVisible, setAffixVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAffixVisible(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const mainContent = (
    <>
      <Divider mt="xl" mb="xl" />
      <MoreAboutMe />
      <Divider mt="xl" mb="xl" />
      <Education />
      <Divider mt="xl" mb="xl" />
      <OtherAspects />
      {affixVisible && (
        <NextPageAffix
          isMobile={isMobile}
          Icon={IconArrowRight}
          text="Check out my Skills"
          to="/skills"
        />
      )}
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
