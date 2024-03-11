import { Container, Group, Space, Text, Title, rem } from '@mantine/core';
import SocialLinks from '../SocialLinks';
import classes from './index.module.css';

export function HeroHeader() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title order={2} className={classes.title} fw={500} c="white">
              This is
            </Title>
            <Text
              fw={700}
              className={classes.title}
              variant="gradient"
              gradient={{ from: 'blue', to: 'lightblue' }}
            >
              Benny Nguyen
            </Text>
            <Text className={classes.description} mt={30}>
              A{' '}
              <Text component="span" inherit fw="bold">
                Front-end developer
              </Text>{' '}
              who enjoys and wants to know more about programming.
            </Text>
            <Space mt={30} />
            <Group mt="xl">
              <SocialLinks
                color="white"
                size={30}
                page="hero"
                variant="transparent"
                style={{ width: rem(30), height: rem(30) }}
              />
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
