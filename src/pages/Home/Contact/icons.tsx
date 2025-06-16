import { Box, Stack, Text, rem } from '@mantine/core';
import { IconAt, IconLocation, IconSun } from '@tabler/icons-react';
import classes from './icons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>
      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const mapData = [
  { title: 'Email', description: 'me@bennynguyen.dev', icon: IconAt },
  { title: 'Based in', description: 'Antelope, California', icon: IconLocation },
];

export function ContactIconsList() {
  const items = mapData.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
