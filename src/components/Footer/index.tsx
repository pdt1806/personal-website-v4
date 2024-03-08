import { ActionIcon, Container, Group, Text, Title, rem } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react';
import classes from './index.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group mb="sm">
            <img
              src="icons/webIcon.png"
              alt="Logo"
              width={35}
              height={35}
              style={{ pointerEvents: 'none' }}
            />
            <Title order={4}>Benny Nguyen</Title>
          </Group>
          <Text size="xs" c="dimmed" className={classes.description}>
            A{' '}
            <Text component="span" inherit fw="bold">
              Front-end developer
            </Text>{' '}
            who enjoys and wants to know more about programming.
          </Text>
        </div>
        <div className={classes.groups}>
          <div className={classes.wrapper}>
            <Text className={classes.title} mb="sm">
              Contact
            </Text>
            <Text size="sm" c="dimmed">
              Email: nmphuc1806@gmail.com
            </Text>
            <Text size="sm" c="dimmed">
              Phone: +1 (279) 300-9785
            </Text>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title} mb="sm">
              Working Hours
            </Text>
            <Text size="sm" c="dimmed">
              Weekdays: 4:00 PM - 9:00 PM
            </Text>
            <Text size="sm" c="dimmed">
              Weekends: 12:00 PM - 9:00 PM
            </Text>
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} Benny Nguyen. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandX style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
