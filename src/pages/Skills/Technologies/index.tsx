/* eslint-disable react/no-unescaped-entities */
import { Accordion, Container, Grid, Group, Image, Text, Title, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { TechnologiesType } from '../../../utils/types';
import classes from './index.module.css';

const frontEndDevelopment: TechnologiesType[] = [
  {
    name: 'React',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'Vite',
  },
  {
    name: 'Mantine',
  },

  {
    name: 'Flutter',
  },
  {
    name: 'Dart',
  },
];

const backEndDevelopment: TechnologiesType[] = [
  {
    name: 'Node.js',
    icon: 'nodejs',
  },
  {
    name: 'npm',
  },
  {
    name: 'Bun',
  },
  {
    name: 'Python',
  },
  {
    name: 'JavaScript',
  },
];

const webAndNet: TechnologiesType[] = [
  {
    name: 'Raspberry Pi',
    icon: 'raspberry-pi',
  },
  {
    name: 'NGINX',
  },
  {
    name: 'PocketBase',
  },
  {
    name: 'Cloudflare',
  },
];

const design: TechnologiesType[] = [
  {
    name: 'Microsoft Powerpoint',
    icon: 'powerpoint',
  },

  {
    name: 'Adobe Photoshop',
    icon: 'photoshop',
  },

  {
    name: 'Adobe Illustrator',
    icon: 'illustrator',
  },
  {
    name: 'Figma',
  },
  {
    name: 'Wondershare Filmora',
    icon: 'filmora',
  },
];

const technologiesList = [
  'Front-end Development',
  'Back-end Development',
  'Web Servers and Networking',
  'Design and Creativity',
];

export default function Technologies() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="images/components/technologies.svg"
              alt="Technologies"
              maw={512}
              mr="auto"
              ml="auto"
              id="technologies-image"
            />
            <Link
              to="https://freepik.com"
              style={{
                color: 'var(--mantine-color-dimmed)',
              }}
            >
              <Text size="sm" ta="center" mt="lg">
                Designed by pikisuperstar / Freepik
              </Text>
            </Link>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={1} className={classes.title} mb="sm">
              Technologies
            </Title>
            <Text className={classes.title} mb="lg" c="dimmed">
              I enjoy using these technologies to build websites and apps, but my skill set extends
              beyond that.
            </Text>
            <Accordion chevronPosition="right" variant="separated">
              {[frontEndDevelopment, backEndDevelopment, webAndNet, design].map(
                (section, index) => (
                  <Accordion.Item
                    className={classes.item}
                    value={technologiesList[index]}
                    key={technologiesList[index]}
                    id={`technologies-accordion-${index}`}
                    data-aos="fade-down"
                    data-aos-once
                    data-aos-anchor={isMobile ? null : '#technologies-image'}
                    data-aos-anchor-placement={isMobile ? null : 'top-center'}
                    data-aos-delay={isMobile ? 0 : index * 200}
                    data-aos-duration="1000"
                    data-aos-offset={isMobile ? 100 : 0}
                  >
                    <Accordion.Control>{technologiesList[index]}</Accordion.Control>
                    <Accordion.Panel>
                      <Group>
                        {section.map((technology) => (
                          <Tooltip key={technology.name} label={technology.name}>
                            <Image
                              src={`icons/tech/${technology.icon ?? technology.name.toLowerCase()}.svg`}
                              alt={technology.name}
                              height={28}
                              width={28}
                            />
                          </Tooltip>
                        ))}
                      </Group>
                    </Accordion.Panel>
                  </Accordion.Item>
                )
              )}
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
