import {
  BackgroundImage,
  Box,
  Center,
  Flex,
  Grid,
  Overlay,
  SimpleGrid,
  Text,
  Title,
  Transition,
  rem,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
const PRIMARY_COL_HEIGHT = rem(500);

export default function Education() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 1.2 - var(--mantine-spacing-md) / 1.2)`;
  const TERTIARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} - ${SECONDARY_COL_HEIGHT} - var(--mantine-spacing-md))`;

  const [overlayAnHS, setOverlayAnHS] = useState(false);
  const [overlayTQT1, setOverlayTQT1] = useState(false);
  const [overlayAIS, setOverlayAIS] = useState(false);

  useEffect(() => {
    setOverlayAnHS(isMobile ?? false);
    setOverlayTQT1(isMobile ?? false);
    setOverlayAIS(isMobile ?? false);
  }, [isMobile]);

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
            <Transition
              mounted={overlayAnHS}
              transition="fade"
              duration={200}
              timingFunction="ease"
            >
              {(styles) => (
                <Overlay
                  radius="md"
                  onMouseLeave={() => !isMobile && setOverlayAnHS(false)}
                  style={styles}
                >
                  <Flex direction="column" align="center" justify="center" h="100%">
                    <img
                      src="images/components/antelope-high-school-logo.webp"
                      alt="Antelope High School"
                      style={{
                        height: '120px',
                        width: '180px',
                        marginBottom: 'var(--mantine-spacing-md)',
                      }}
                    />
                    <Text fw="bold" fz="xl" c="white" ta="center">
                      Antelope High School
                    </Text>
                    <Text size="sm" c="white" ta="center">
                      Nov 2022 - expected Jun 2026
                    </Text>
                  </Flex>
                </Overlay>
              )}
            </Transition>
            <BackgroundImage
              p="md"
              h="100%"
              src="images/components/antelope-high-school.webp"
              radius="md"
              onMouseEnter={() => !isMobile && setOverlayAnHS(true)}
            />
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
                <Transition
                  mounted={overlayTQT1}
                  transition="fade"
                  duration={200}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Overlay
                      radius="md"
                      onMouseLeave={() => !isMobile && setOverlayTQT1(false)}
                      style={styles}
                    >
                      <Flex direction="column" align="center" justify="center" h="100%">
                        <img
                          src="images/components/tqt1-secondary-school-logo.webp"
                          alt="Tran Quoc Toan 1 Secondary School"
                          style={{
                            height: '120px',
                            width: '198.14px',
                            marginBottom: 'var(--mantine-spacing-md)',
                          }}
                        />
                        <Text fw="bold" fz="xl" c="white" ta="center">
                          Tran Quoc Toan 1 Secondary School
                        </Text>
                        <Text size="sm" c="white" ta="center">
                          Sep 2021 - Oct 2022
                        </Text>
                      </Flex>
                    </Overlay>
                  )}
                </Transition>
                <BackgroundImage
                  p="md"
                  h="100%"
                  src="images/components/tqt1-secondary-school.webp"
                  radius="md"
                  onMouseEnter={() => !isMobile && setOverlayTQT1(true)}
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={isMobile ? 12 : 6}>
              <Box h={SECONDARY_COL_HEIGHT} style={{ position: 'relative' }}>
                <Transition
                  mounted={overlayAIS}
                  transition="fade"
                  duration={200}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Overlay
                      radius="md"
                      onMouseLeave={() => !isMobile && setOverlayAIS(false)}
                      style={styles}
                    >
                      <Flex direction="column" align="center" justify="center" h="100%">
                        <img
                          src="images/components/the-asian-international-school-logo.webp"
                          alt="The Asian International School"
                          style={{
                            height: '120px',
                            width: '120px',
                            marginBottom: 'var(--mantine-spacing-md)',
                          }}
                        />
                        <Text fw="bold" fz="xl" c="white" ta="center">
                          The Asian International School
                        </Text>
                        <Text size="sm" c="white" ta="center">
                          Aug 2014 - May 2021
                        </Text>
                      </Flex>
                    </Overlay>
                  )}
                </Transition>
                <BackgroundImage
                  p="md"
                  h="100%"
                  src="images/components/the-asian-international-school.webp"
                  radius="md"
                  onMouseEnter={() => !isMobile && setOverlayAIS(true)}
                />
              </Box>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
