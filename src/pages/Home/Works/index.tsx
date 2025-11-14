/* eslint-disable react/no-unescaped-entities */

import { Badge, Box, Center, Container, Text, Title } from '@mantine/core';
import { WorksBox } from '../../../components/WorksBox';
import { WorkType } from '../../../utils/types';
import { Dots } from '../Introduction/Dots';
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
      // {
      //   title: "benny's public library",
      //   description:
      //     'An HTTP file server that serves files from a directory, except I made it public so that I can share files with everyone over the Internet.',
      //   img: 'images/works/public.webp',
      //   source: 'https://github.com/pdt1806/public',
      //   url: 'https://public.bennynguyen.dev/',
      // },
      {
        title: 'College Bank Clicker',
        description: 'A parody clicker game about the College Board AP exams.',
        img: 'images/works/college-bank-clicker.webp',
        source: 'https://github.com/pdt1806/college-bank-clicker',
        url: 'https://collegebank.click',
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
        collaborators: ['tobycm'],
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
      // {
      //   title: 'ERG Rock Paper Scissors',
      //   description: 'A Rock Paper Scissors game created using Phaser, a JavaScript framework.',
      //   img: 'images/works/rock-paper-scissors.webp',
      //   source: 'https://github.com/pdt1806/erg-rock-paper-scissors',
      //   url: 'https://ropas.bennynguyen.dev/',
      // },
    ],
  },
];

export default function Works() {
  return (
    <>
      <Box className={classes.wrapper} size={1600} bg="bn-blue" id="works">
        <Dots className={classes.dots} style={{ left: 0, top: 70 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 70 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 230 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 150 }} />

        <div className={classes.inner}>
          <Center>
            <Badge color="white" c="bn-blue">
              Pride Hall
            </Badge>
          </Center>
          <Title order={1} ta="center" mt="sm" c="white">
            Works
          </Title>
          <Text c="white" className={classes.description} ta="center" mt="md" mb="">
            Over time, I've poured a lot of effort and passion into creating web and mobile apps.
            It's been exciting to tackle challenges every time I design, build, or revamp something.
          </Text>
        </div>
      </Box>
      <Container mt="calc(-140px - var(--mantine-spacing-xl))" size="lg">
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
              {section.works.map((work: WorkType) => (
                <div
                  data-aos="flip-down"
                  data-aos-once
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  key={work.title}
                >
                  <WorksBox
                    title={work.title}
                    description={work.description}
                    img={work.img}
                    source={work.source}
                    url={work.url}
                    collaborators={work.collaborators}
                  />
                </div>
              ))}
            </div>
          ))}
        </Box>
      </Container>
    </>
  );
}
