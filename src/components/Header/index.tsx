import { Box, Burger, Button, Divider, Drawer, Group, ScrollArea, Title, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './index.module.css';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <img
              src="icons/webIcon.png"
              alt="Logo"
              width={35}
              height={35}
              style={{ pointerEvents: 'none' }}
            />
            <Title order={4}>Benny Nguyen</Title>
          </Group>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              About me
            </a>
            <a href="#" className={classes.link}>
              Skills
            </a>
            <a href="#" className={classes.link}>
              Works
            </a>
          </Group>
          <Group visibleFrom="sm">
            <Button>Contact</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <a href="#" className={classes.link}>
            About me
          </a>
          <a href="#" className={classes.link}>
            Skills
          </a>
          <a href="#" className={classes.link}>
            Works
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button>Contact me</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
