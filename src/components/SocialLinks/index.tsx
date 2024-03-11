import { socialLinks } from '@/utils';
import { ActionIcon } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function SocialLinks({
  color,
  size,
  variant,
  style,
  page,
  className,
}: {
  color: string;
  size: number | string;
  variant: string;
  style?: React.CSSProperties;
  page: string;
  className?: string;
}) {
  const icons = socialLinks.map((link) => (
    <ActionIcon
      key={link.name + `_${page}`}
      aria-label={link.name}
      size={size}
      variant={variant}
      component={Link}
      to={link.to}
      target="_href"
      c={color}
      color={color}
      className={className}
    >
      <link.icon stroke={1.5} style={style} />
    </ActionIcon>
  ));

  return <>{icons}</>;
}
