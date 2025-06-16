import { Group, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Brand({ closeDrawer }: { closeDrawer: () => void }) {
  const navigate = useNavigate();

  return (
    <Group
      w="max-content"
      onClick={() => {
        closeDrawer();
        navigate('/');
      }}
      style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
    >
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
