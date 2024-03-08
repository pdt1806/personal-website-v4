import MoreAboutMeCard from '@/components/MoreAboutMeCard';
import { Box, Center, Grid, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
        {[1, 2, 3].map((index) => (
          <Grid.Col span={isMobile ? 12 : 3} key={index}>
            <MoreAboutMeCard index={index} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
