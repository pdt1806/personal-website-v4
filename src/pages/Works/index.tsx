import { WorksBox } from '@/components/WorksBox';
import { Affix, Box, Button, Container, Text, Title, Transition, rem } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { IconPhone } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

const worksLayout = [
  {
    title: '',
    description: '',
    works: [
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
    ],
  },
  {
    title: 'Collaborative Projects',
    description: 'Works wherein I have actively engaged with other skilled programmers.',
    works: [
      {
        title: 'Emochoice Web Store',
        description: 'The web store of Emochoice, a print-on-demand store in Canada.',
        img: 'images/works/emochoice.webp',
        source: 'https://github.com/tobycm/emochoice',
        url: 'https://emochoice.ca/',
      },
    ],
  },
  {
    title: 'Egg Recreates Games',
    description: 'Some of the games that I have recreated using HTML5, CSS and JavaScript.',
    works: [
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
    ],
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
        {worksLayout.map((section, index) => (
          <div key={`works_section_${index}`}>
            {section.title && (
              <Box mt="xl" mb="lg">
                <Title order={2} ta="center">
                  {section.title}
                </Title>
                <Text c="dimmed" ta="center" mt="xs">
                  {section.description}
                </Text>
              </Box>
            )}
            {section.works.map((work) => (
              <WorksBox
                title={work.title}
                description={work.description}
                img={work.img}
                source={work.source}
                url={work.url}
                key={work.title}
              />
            ))}
          </div>
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
