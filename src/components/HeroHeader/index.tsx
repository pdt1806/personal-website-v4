import { Container, Space, Text, Title } from '@mantine/core';
import SocialLinks from '../SocialLinks';
import classes from './index.module.css';

export function HeroHeader() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title order={2} className={classes.title}>
              This is
            </Title>
            <Text
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
            <SocialLinks />
          </div>
        </div>
      </Container>
    </div>
  );
}
