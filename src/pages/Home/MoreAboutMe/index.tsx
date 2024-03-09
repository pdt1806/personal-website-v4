import MoreAboutMeCard from '@/components/MoreAboutMeCard';
import { Box, Center, Grid, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const desc = [
  'Was born and raised in Vietnam until the age of 14, I’ve overcome numerous obstacles to become who I am today.',
  'Living in 2 different countries with 2 distinct cultures has made my perspective on this world unique.',
  'Driven by a deep passion, I aspire to create computer innovations that touch lives, making a positive impact on the world around us.',
];

export default function MoreAboutMe() {
  const isMobile = useMediaQuery('(max-width: 62em)');

  return (
    <Box mt="xl">
      <Center>
        <Title order={1} ta="center">
          More about me
        </Title>
      </Center>
      <Grid grow mt="xl">
        {desc.map((_, index) => (
          <Grid.Col span={isMobile ? 12 : 3} key={index}>
            <MoreAboutMeCard index={index} desc={desc[index]} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
