import { Card, Container, SimpleGrid, Text, Title, rem, useMantineTheme } from '@mantine/core';
import { IconBook, IconLanguage, IconUsersGroup } from '@tabler/icons-react';
import classes from './index.module.css';

const mockdata = [
  {
    title: 'Willing to Learn',
    description:
      'Learning is a never-ending process. I am always willing to learn new things and improve my skills.',
    icon: IconBook,
  },
  {
    title: 'Language Advantage',
    description:
      'Being fluent in English and Vietnamese is a big advantage for me to communicate with people from different countries. I also have some knowledge of Japanese and Spanish.',
    icon: IconLanguage,
  },
  {
    title: 'Teamwork Skills',
    description:
      'I have experience working in a team, and I know how to communicate and collaborate with other members to achieve the best results.',
    icon: IconUsersGroup,
  },
];

export function Values() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg">
      <Title order={1} ta="center" mt="sm">
        Skills and Values
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        In addition to my programming knowledge, there are certain skills and values that I take
        pride in.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
