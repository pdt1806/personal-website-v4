import { Box, Stack, Text, rem } from '@mantine/core';
import { IconAt, IconPhone, IconSun } from '@tabler/icons-react';
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

const MOCKDATA = [
  { title: 'Email', description: 'me@bennynguyen.dev', icon: IconAt },
  { title: 'Phone', description: '+1 (279) 300-9785', icon: IconPhone },
  {
    title: 'Working hours',
    description: [0, 6].includes(new Date().getDay()) ? '12:00 PM – 9:00 PM' : '4:00 PM – 9:00 PM',
    icon: IconSun,
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
