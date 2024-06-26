/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Center, Container, Flex, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Dots } from './Dots';
import classes from './index.module.css';

export default function Introduction() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  return (
    <Box style={{ position: 'relative' }} className={classes.bg}>
      <Dots className={classes.dots} style={{ left: 0, top: 50 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 50 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 210 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 130 }} />
      <Container className={classes.wrapper} size={1600} id="introduction">
        <div className={classes.inner}>
          <Center>
            <Flex direction={isMobile ? 'column' : 'row'} align="center">
              <Avatar
                src="/images/2022-me.webp"
                size={300}
                mb={isMobile ? 'xl' : '0'}
                alt="my-avatar"
                data-aos="flip-right"
                data-aos-once
                data-aos-offset="300"
                data-aos-duration="1000"
              />
              <Box
                maw={800}
                ml={isMobile ? '0' : 'xl'}
                data-aos="fade-right"
                data-aos-once
                data-aos-offset="300"
                data-aos-duration="1000"
              >
                <Title order={2} className={classes.text}>
                  Hi, I'm Benny. Nice to meet you!
                </Title>
                <Text size="lg" mt="md" className={classes.text}>
                  Since I started working as a front-end developer in 2023, I've been creating
                  projects across various platforms and developing web apps for small businesses and
                  startups, collaborating with talented individuals. While my main focus is on
                  front-end development, I also have a keen interest in back-end development. As a
                  young developer, I'm confident that I'll achieve even more in the future.
                </Text>
              </Box>
            </Flex>
          </Center>
        </div>
      </Container>
    </Box>
  );
}
