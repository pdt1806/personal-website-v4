import { Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function SocialLinks() {
  return (
    <Group gap="xl">
      <Link to="https://github.com/pdt1806" target="_blank">
        <img
          src="/icons/tech/github.svg"
          alt="GitHub"
          width={30}
          height={30}
          style={{ filter: 'invert(1)' }}
        />
      </Link>
      <Link to="https://instagram.com/benny_ng08" target="_blank">
        <img
          src="/icons/social/instagram.svg"
          alt="Instagram"
          width={30}
          height={30}
          style={{ filter: 'invert(1)' }}
        />
      </Link>
      <Link to="https://facebook.com/pdteggman" target="_blank">
        <img
          src="/icons/social/facebook.svg"
          alt="Facebook"
          width={30}
          height={30}
          style={{ filter: 'invert(1)' }}
        />
      </Link>
      <Link to="https://x.com/pdteggman" target="_blank">
        <img
          src="/icons/social/x.svg"
          alt="X"
          width={30}
          height={30}
          style={{ filter: 'invert(1)' }}
        />
      </Link>
    </Group>
  );
}
