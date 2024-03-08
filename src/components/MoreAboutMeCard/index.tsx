import { Card, Text } from '@mantine/core';
import classes from './index.module.css';

const desc = [
  'Was born and raised in Vietnam until the age of 14, I’ve overcome numerous obstacles to become who I am today.',
  'Living in 2 different countries with 2 distinct cultures has made my perspective on this world unique.',
  'Talking about my hobbies, it is clear that I really enjoy programming. I also like watching anime and listening to Japanese music.',
];

export default function MoreAboutMeCard({ index }: { index: number }) {
  return (
    <Card p="lg" shadow="lg" className={classes.card} radius="md">
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(images/components/aboutme-bg-${index}.webp)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {desc[index - 1]}
          </Text>
        </div>
      </div>
    </Card>
  );
}
