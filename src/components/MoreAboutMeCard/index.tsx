import { Card, Text } from '@mantine/core';
import classes from './index.module.css';

export default function MoreAboutMeCard({ desc, index }: { desc: string; index: number }) {
  return (
    <Card p="lg" shadow="lg" className={classes.card} radius="md">
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(images/components/aboutme-bg-${index + 1}.webp)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {desc}
          </Text>
        </div>
      </div>
    </Card>
  );
}
