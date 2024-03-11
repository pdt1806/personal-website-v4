import { Box, Burger, Button, Divider, Drawer, Group, ScrollArea, Title, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const links = (
    <>
      <Link to="/" className={classes.link} onClick={closeDrawer}>
        Home
      </Link>
      <Link to="/skills" className={classes.link} onClick={closeDrawer}>
        Skills
      </Link>
      <Link to="/works" className={classes.link} onClick={closeDrawer}>
        Works
      </Link>
    </>
  );

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <img
              src="icons/webIcon.svg"
              alt="Logo"
              width={35}
              height={35}
              style={{ pointerEvents: 'none' }}
            />
            <Title order={4}>Benny Nguyen</Title>
          </Group>
          <Group h="100%" gap={0} visibleFrom="sm">
            {links}
          </Group>
          <Group visibleFrom="sm">
            <Button component={Link} to="/contact" onClick={closeDrawer}>
              Contact me
            </Button>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            aria-label="burger-button"
          />
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
          {links}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button component={Link} to="/contact" onClick={closeDrawer}>
              Contact me
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
