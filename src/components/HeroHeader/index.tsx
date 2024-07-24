import { Box, Grid, Group, Image, Text, Title, rem } from '@mantine/core';
import { postLoading } from '../../utils';
import SocialLinks from '../SocialLinks';
import classes from './index.module.css';

export function HeroHeader() {
  return (
    <Box>
      <Grid>
        <Grid.Col span={{ base: 0, md: 0.5 }} />
        <Grid.Col
          span={{ base: 12, md: 6.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          mb={{ base: 0, md: 'xl' }}
        >
          <div className={classes.content}>
            <Title order={2} className={classes.title} fw={500}>
              This is
            </Title>
            <Text
              fw={700}
              className={classes.title}
              variant="gradient"
              gradient={{ from: 'blue', to: 'bn-blue' }}
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
            <Group mt="xl">
              <SocialLinks
                color="black"
                size={30}
                page="hero"
                variant="transparent"
                style={{ width: rem(30), height: rem(30) }}
              />
            </Group>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Image
            src="/images/me.webp"
            alt="Benny Nguyen"
            className={classes.image}
            // @ts-expect-error: intentional attribute
            fetchpriority="high"
            onLoad={postLoading}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
