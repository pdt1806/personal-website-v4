import {
  BackgroundImage,
  Box,
  Center,
  Flex,
  Grid,
  Image,
  Overlay,
  SimpleGrid,
  Text,
  Title,
  rem,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './index.module.css';

const PRIMARY_COL_HEIGHT = rem(500);
const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 1.2 - var(--mantine-spacing-md) / 1.2)`;
const TERTIARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} - ${SECONDARY_COL_HEIGHT} - var(--mantine-spacing-md))`;

const data = [
  {
    name: 'Antelope High School',
    date: 'Nov 2022 - expected Jun 2026',
    logo: 'images/components/antelope-high-school-logo.webp',
    image: 'images/components/antelope-high-school.webp',
  },
  {
    name: 'Tran Quoc Toan 1 Secondary School',
    date: 'Sep 2021 - Oct 2022',
    logo: 'images/components/tqt1-secondary-school-logo.webp',
    image: 'images/components/tqt1-secondary-school.webp',
  },
  {
    name: 'The Asian International School',
    date: 'Aug 2014 - May 2021',
    logo: 'images/components/the-asian-international-school-logo.webp',
    image: 'images/components/the-asian-international-school.webp',
  },
];

const schoolComponents = data.map((item) => (
  <>
    <Overlay radius="md" p="md" className={classes.overlay}>
      <Flex direction="column" align="center" justify="center" h="100%">
        <Image
          src={item.logo}
          alt={item.name}
          style={{
            height: '120px',
            width: 'auto',
            marginBottom: 'var(--mantine-spacing-md)',
          }}
        />
        <Text fw="bold" fz="xl" c="white" ta="center">
          {item.name}
        </Text>
        <Text size="sm" c="white" ta="center">
          {item.date}
        </Text>
      </Flex>
    </Overlay>
    <BackgroundImage p="md" h="100%" src={item.image} radius="md" />
  </>
));

export default function Education() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  return (
    <Box mt="xl">
      <Center>
        <Title order={1}>Education</Title>
      </Center>
      <Box
        style={{
          marginTop: 'calc(var(--mantine-spacing-lg) * 2)',
          marginBottom: 'calc(var(--mantine-spacing-lg) * 2)',
        }}
      >
        <SimpleGrid cols={{ base: 1, xl: 2 }} spacing="md">
          <Box
            h={!isMobile ? PRIMARY_COL_HEIGHT : SECONDARY_COL_HEIGHT}
            style={{ position: 'relative' }}
          >
            {schoolComponents[0]}
          </Box>
          <Grid gutter="md">
            <Grid.Col>
              <Flex h={TERTIARY_COL_HEIGHT} direction="column" align="center" justify="center">
                <Title order={2}>Schools in Vietnam</Title>
                <Text size="sm" c="dimmed" ta="center">
                  Where I grew and learned the most during my early years.
                </Text>
              </Flex>
            </Grid.Col>
            <Grid.Col span={isMobile ? 12 : 6}>
              <Box h={SECONDARY_COL_HEIGHT} style={{ position: 'relative' }}>
                {schoolComponents[1]}
              </Box>
            </Grid.Col>
            <Grid.Col span={isMobile ? 12 : 6}>
              <Box h={SECONDARY_COL_HEIGHT} style={{ position: 'relative' }}>
                {schoolComponents[2]}
              </Box>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
