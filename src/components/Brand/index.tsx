import { Group, Title } from '@mantine/core';

export default function Brand() {
  return (
    <Group w="max-content">
      <img
        src="icons/webIcon.svg"
        alt="Logo"
        width={30}
        height={30}
        style={{ pointerEvents: 'none' }}
      />
      <Title order={4}>Benny Nguyen</Title>
    </Group>
  );
}
