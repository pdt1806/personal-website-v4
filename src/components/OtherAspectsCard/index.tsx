import { Button, Card, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconHeart } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

export default function OtherAspectsCard({
  info,
  index,
}: {
  info: { title: string; desc: string };
  index: number;
}) {
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Card p="xl" shadow="lg" className={classes.card} radius="md" mb="lg">
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(images/components/other-aspects-${index + 1}.webp)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className={classes.overlay}
        style={{
          backgroundImage: `linear-gradient(${isMobile ? '180' : index % 2 === 0 ? '270' : '90'}deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isMobile ? '0.6' : '0.45'}) 40%, rgba(0, 0, 0, 0.85) 100%)`,
        }}
      />
      <div
        className={classes.content}
        style={{
          alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end',
        }}
      >
        <div style={{ maxWidth: isMobile ? '100%' : '35%' }}>
          <Title order={2} c="white">
            {info.title}
          </Title>
          <Text size="lg" className={classes.title} fw={500}>
            {info.desc}
          </Text>
          {index === 1 && (
            <Button
              leftSection={<IconHeart size={18} />}
              size="lg"
              color="#044eb3"
              mt="sm"
              component={Link}
              to="https://app.schoolfundr.org/fund/antelopechoir/nmcDH"
              target="_blank"
            >
              We are organizing a fundraiser!
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
