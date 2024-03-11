import { WorksBox } from '@/components/WorksBox';
import { Affix, Box, Button, Container, Text, Title, Transition, rem } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { IconPhone } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

const works = [
  {
    title: 'Discord Status as Image',
    description:
      'Turn your Discord status into a simple, eye-catching image for easy sharing and display.',
    img: 'images/works/discord-status-as-image.webp',
    source: 'https://github.com/pdt1806/discord-status-as-image',
    url: 'https://disi.bennynguyen.dev/',
  },
  {
    title: 'AutoDisconnect',
    description:
      'A simple Minecraft mod that automatically disconnects players when they are in low health.',
    img: 'images/works/auto-disconnect.webp',
    source: 'https://github.com/pdt1806/autodisconnect',
    url: 'https://github.com/pdt1806/AutoDisconnect/releases/',
  },
];

const erg = [
  {
    title: 'ERG Wordle',
    description: 'A remake of the popular game Wordle using pure HTML5, CSS and JavaScript.',
    img: 'images/works/wordle.webp',
    source: 'https://github.com/pdt1806/erg-wordle',
    url: 'https://wordle.bennynguyen.dev/',
  },
  {
    title: 'ERG Rock Paper Scissors',
    description: 'A Rock Paper Scissors game created using Phaser, a JavaScript framework.',
    img: 'images/works/rock-paper-scissors.webp',
    source: 'https://github.com/pdt1806/erg-rock-paper-scissors',
    url: 'https://ropas.bennynguyen.dev/',
  },
];

const collaborative = [
  {
    title: 'Emochoice Web Store',
    description: 'The web store of Emochoice, a print-on-demand store in Canada.',
    img: 'images/works/emochoice.webp',
    source: 'https://github.com/tobycm/emochoice',
    url: 'https://emochoice.ca/',
  },
];

export default function Works() {
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
    <Container mt="xl">
      <Title order={1} ta="center" mt="sm">
        Works
      </Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Here are some notable projects that I have created with love and passion.
      </Text>
      <Box mt="xl">
        {works.map((work) => (
          <WorksBox
            title={work.title}
            description={work.description}
            img={work.img}
            source={work.source}
            url={work.url}
            key={work.title}
          />
        ))}
      </Box>

      <Title order={2} mt="xl" ta="center">
        Collaborative Projects
      </Title>
      <Text c="dimmed" ta="center" mt="sm">
        Works wherein I have actively engaged with other skilled programmers.
      </Text>
      <Box mt="xl">
        {collaborative.map((work) => (
          <WorksBox
            title={work.title}
            description={work.description}
            img={work.img}
            source={work.source}
            url={work.url}
            key={work.title}
          />
        ))}
      </Box>

      <Title order={2} mt="xl" ta="center">
        Egg Recreates Games
      </Title>
      <Text c="dimmed" ta="center" mt="sm">
        Some of the games that I have recreated using HTML5, CSS and JavaScript.
      </Text>
      <Box mt="xl">
        {erg.map((work) => (
          <WorksBox
            title={work.title}
            description={work.description}
            img={work.img}
            source={work.source}
            url={work.url}
            key={work.title}
          />
        ))}
      </Box>
      {affixVisible && (
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition
            transition="slide-up"
            mounted={document.body.scrollHeight - (isMobile ? 1150 : 1300) < scroll.y}
          >
            {(transitionStyles) => (
              <Button
                leftSection={<IconPhone style={{ width: rem(16), height: rem(16) }} />}
                style={transitionStyles}
                component={Link}
                to="/contact"
              >
                Contact me
              </Button>
            )}
          </Transition>
        </Affix>
      )}
    </Container>
  );
}
