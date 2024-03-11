import { Accordion, Container, Grid, Group, Image, Text, Title, Tooltip } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

const frontEndDevelopment: Technologies[] = [
  {
    name: 'React',
  },
  {
    name: 'Vite',
  },
  {
    name: 'Mantine',
  },
  {
    name: 'TypeScript',
  },
];

const backEndDevelopment: Technologies[] = [
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

const webAndNet: Technologies[] = [
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

const design: Technologies[] = [
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
];

const technologiesList = [
  'Front-end Development',
  'Back-end Development',
  'Web Servers and Networking',
  'Design and Creativity',
];

export default function Technologies() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={'images/components/technologies.svg'} alt="Technologies" />
            <Link
              to="https://freepik.com"
              target="_blank"
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
              I enjoy using these technologies for building websites and apps, but there's more to
              my skill set than just these.
            </Text>
            <Accordion chevronPosition="right" variant="separated">
              {[frontEndDevelopment, backEndDevelopment, webAndNet, design].map(
                (section, index) => (
                  <Accordion.Item
                    className={classes.item}
                    value={technologiesList[index]}
                    key={technologiesList[index]}
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
