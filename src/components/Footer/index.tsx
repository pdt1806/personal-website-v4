import { Container, Group, Text, rem } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getUTCOffset } from '../../utils';
import SocialLinks from '../SocialLinks';
import classes from './index.module.css';

export default function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        // second: '2-digit',
        hour12: true,
      });
      setTime(now);
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group mb="sm">
            <img
              src="icons/webIcon.svg"
              alt="Logo"
              width={30}
              height={30}
              style={{ pointerEvents: 'none' }}
            />
            <Text fz="lg" fw="bold">
              Benny Nguyen
            </Text>
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
              Email: me@bennynguyen.dev
            </Text>
            <Text size="sm" c="dimmed">
              Based in: Antelope, California
            </Text>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title} mb="sm">
              Local time
            </Text>
            <Text size="sm" c="dimmed">
              {time} ({getUTCOffset('America/Los_Angeles')})
            </Text>
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} Benny Nguyen. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <SocialLinks
            color="gray"
            size="lg"
            page="footer"
            variant="subtle"
            style={{ width: rem(18), height: rem(18) }}
          />
        </Group>
      </Container>
    </footer>
  );
}
