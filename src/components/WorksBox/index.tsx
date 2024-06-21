import { Button, Card, Group, Overlay, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

export function WorksBox({
  title,
  description,
  img,
  source,
  url,
  collaborators,
}: {
  title: string;
  description: string;
  img: string;
  source: string;
  url: string;
  collaborators?: string[];
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
          {collaborators && (
            <Text component="p">
              In collaboration with{' '}
              {collaborators.map((collaborator, index) => (
                <span key={index}>
                  <Link to={`https://github.com/${collaborator}`} style={{ color: 'white' }}>
                    @{collaborator}
                  </Link>
                  {index !== collaborators.length - 1 && ', '}
                </span>
              ))}
            </Text>
          )}
        </Text>
        <Group className={classes.action}>
          <Button c="white" color="black" size="xs" component={Link} to={source}>
            Source code
          </Button>
          <Button variant="white" color="dark" size="xs" component={Link} to={url}>
            Visit
          </Button>
        </Group>
      </div>
    </Card>
  );
}
