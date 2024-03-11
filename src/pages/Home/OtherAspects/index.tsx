import OtherAspectsCard from '@/components/OtherAspectsCard';
import { Box, Center, Title } from '@mantine/core';

const info = [
  {
    title: 'Soccer',
    desc: "I enjoy watching and playing soccer since the age of 10. With my passion, I have been a part of my 2 middle schools' soccer team for 2 years.",
  },
  {
    title: 'Choir',
    desc: "Singing has been a part of my life since I was young. I've been a member of my high school's choir for 2 years.",
  },
  {
    title: 'Anime',
    desc: "I've been a fan of anime since I was 12. I enjoy watching anime and listening to Japanese music in my free time.",
  },
];

export default function OtherAspects() {
  return (
    <Box mt="xl">
      <Center>
        <Title order={1}>Other Aspects</Title>
      </Center>
      <Box my="md" mt="xl">
        {info.map((_, index) => (
          <OtherAspectsCard info={info[index]} index={index} key={index} />
        ))}
      </Box>
    </Box>
  );
}
