import NextPageAffix from '@/components/NextPageAffix';
import { Container, Divider } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import Technologies from './Technologies';
import { Values } from './Values';

export default function Skills() {
  const [scroll, _] = useWindowScroll();
  const isMobile = useMediaQuery('(max-width: 48em)');

  const [affixVisible, setAffixVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAffixVisible(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Technologies />
      <Divider mt="xl" mb="xl" />
      <Values />
      {affixVisible && (
        <NextPageAffix
          isMobile={isMobile}
          Icon={IconArrowRight}
          text="Check out my Works"
          to="/works"
        />
      )}
    </Container>
  );
}
