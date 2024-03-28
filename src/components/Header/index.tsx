import { scrollToSection } from '@/utils';
import { Box, Burger, Button, Divider, Drawer, Group, ScrollArea, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import Brand from '../Brand';
import classes from './index.module.css';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const navigate = useNavigate();

  const scrollAndCloseDrawer = (id: string) => {
    navigate('/');
    setTimeout(() => {
      closeDrawer();
      scrollToSection(id);
    }, 0);
  };

  const links = (
    <>
      <Text className={classes.link} onClick={() => scrollAndCloseDrawer('introduction')}>
        Introduction
      </Text>
      <Text className={classes.link} onClick={() => scrollAndCloseDrawer('skills')}>
        Skills
      </Text>
      <Text className={classes.link} onClick={() => scrollAndCloseDrawer('works')}>
        Works
      </Text>
    </>
  );

  const contactMeButton = (
    <Button onClick={() => scrollAndCloseDrawer('contact')}>Contact me</Button>
  );

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Brand />
          <Group h="100%" gap={0} visibleFrom="sm">
            {links}
          </Group>
          <Group visibleFrom="sm">{contactMeButton}</Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            aria-label="burger-button"
          />
        </Group>
      </header>

      <Drawer.Root
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>
              <Brand />
            </Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
              {links}

              <Divider my="sm" />

              <Group justify="center" grow pb="xl" px="md">
                {contactMeButton}
              </Group>
            </ScrollArea>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </Box>
  );
}
