import { Button, Card, Group, Overlay, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

export function WorksBox({
  title,
  description,
  img,
  source,
  url,
}: {
  title: string;
  description: string;
  img: string;
  source: string;
  url: string;
}) {
  return (
    <Card radius="md" className={classes.card} mb="lg">
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />
      <div className={classes.content}>
        <Title order={2} className={classes.title}>
          {title}
        </Title>
        <Text size="md" className={classes.description}>
          {description}
        </Text>
        <Group className={classes.action}>
          <Button c="white" color="black" size="xs" component={Link} to={source} target="_blank">
            Source code
          </Button>
          <Button variant="white" color="dark" size="xs" component={Link} to={url} target="_blank">
            Visit
          </Button>
        </Group>
      </div>
    </Card>
  );
}
